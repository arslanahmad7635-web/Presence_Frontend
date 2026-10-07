import React, { useEffect, useState, useCallback } from 'react';
import CreateSection from './Components/CreateSection';
import SectionDetails from './Components/SectionDetails';
import api from '../../../../services/axios';

export default function SectionsTab({ isActive = true, staffDetails }) {
  const [sections, setSections] = useState([]);
  const [loadingSections, setLoadingSections] = useState(false);
  const [creationTabOpen, setCreationTabOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const sectionCount = sections.length;

  const fetchSections = useCallback(async (signal) => {
    setLoadingSections(true);
    try {
      const response = await api.get('api/teacher/sections', { signal });
      const fetchedSections = Array.isArray(response.data)
        ? response.data
        : (response.data?.sections || []);
      setSections(fetchedSections);
    } catch (error) {
      if (error?.name !== 'CanceledError' && error?.code !== 'ERR_CANCELED') {
        console.error('Failed to load sections:', error);
      }
    } finally {
      setLoadingSections(false);
    }
  }, []);

  useEffect(() => {
    if (!isActive) return;
    const controller = new AbortController();
    fetchSections(controller.signal);
    return () => controller.abort();
  }, [isActive, fetchSections]);

  const handleCloseCreateSection = () => {
    setCreationTabOpen(false);
    fetchSections();
  };

  if (creationTabOpen) {
    return <CreateSection onClose={handleCloseCreateSection} />;
  }

  if (selectedSection) {
    return (
      <SectionDetails
        section={selectedSection}
        onClose={() => setSelectedSection(null)}
        onSuccess={() => {
          setSelectedSection(null);
          fetchSections();
        }}
      />
    );
  }

  if (loadingSections && sections.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-slate-500">
        Loading sections...
      </div>
    );
  }

  if (sectionCount === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-sm px-6">
          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
              <path d="M14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
              <path d="M4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
              <path d="M14 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
            </svg>
          </div>

          {/* Copy */}
          <h1 className="mt-5 text-xl font-semibold text-slate-100">
            No sections yet
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Create your first section to get started.
          </p>

          {/* CTA */}
          <button
            onClick={() => setCreationTabOpen(true)}
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition-all hover:border-cyan-400/70 hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create Section
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <div className="w-full h-1/10 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">
          Total Sections - {sectionCount}
        </h1>
        <button
          onClick={() => setCreationTabOpen(true)}
          className="bg-cyan-400/10 text-cyan-200 transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] py-3 px-6 rounded-lg font-medium"
        >
          Create New
        </button>
      </div>

      <div className="w-full h-9/10 bg-transparent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 pt-4 overflow-y-auto pr-1 items-start content-start">
        {sections.map((section) => (
          <button
            key={section.id ?? section._id ?? section.name}
            type="button"
            onClick={() => setSelectedSection(section)}
            className="group relative overflow-hidden text-left rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.2)] cursor-pointer"
          >
            {/* Ambient glow on hover */}
            <span className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Top row: course badge + arrow */}
            <div className="relative flex items-start justify-between gap-3">
              <span className="inline-flex items-center rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-cyan-200">
                {section.course_code || 'COURSE'}
              </span>

              {/* Arrow that slides right on hover */}
              <svg
                className="h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>

            {/* Section name */}
            <h3 className="relative mt-4 text-lg font-semibold text-slate-100 leading-snug group-hover:text-white transition-colors">
              {section.name || 'Untitled Section'}
            </h3>

            {/* Course full name */}
            <p className="relative mt-1 text-sm text-slate-400 line-clamp-2">
              {section.course_name || '—'}
            </p>

            {/* Divider */}
            <div className="relative mt-5 h-px w-full bg-gradient-to-r from-cyan-400/30 via-cyan-400/10 to-transparent" />

            {/* Footer with initial avatar */}
            <div className="relative mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-xs font-semibold text-cyan-200">
                  {(section.name || '?').trim().charAt(0).toUpperCase()}
                </div>
                <span className="text-xs text-slate-500">Tap to view details</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}