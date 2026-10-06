import React, { useEffect, useState, useCallback } from 'react';
import CreateSection from './Components/CreateSection';
import api from '../../../../services/axios'; // Ensure path relative to this file is correct

export default function SectionsTab({ isActive = true, staffDetails }) {
  const [sections, setSections] = useState([]);
  const [loadingSections, setLoadingSections] = useState(false);
  const [creationTabOpen, setCreationTabOpen] = useState(false);

  const sectionCount = sections.length;

  const fetchSections = useCallback(async (signal) => {
    setLoadingSections(true);

    try {
      // 1. Change endpoint if needed (e.g., 'api/teacher/sections' or 'api/sections')
      const response = await api.get('api/teacher/sections', { signal });

      // 2. Safely extract array based on backend response shape
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

    return () => {
      controller.abort();
    };
  }, [isActive, fetchSections]);

  const handleCloseCreateSection = () => {
    setCreationTabOpen(false);
    fetchSections();
  };

  if (loadingSections && sections.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-slate-500">
        Loading sections...
      </div>
    );
  }

  if (creationTabOpen) {
    return <CreateSection onClose={handleCloseCreateSection} />;
  }

  if (sectionCount === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <div className="relative flex items-center justify-center">
          <button
            onClick={() => setCreationTabOpen(true)}
            type="button"
            className="z-10 bg-cyan-400/10 text-cyan-200 text-base transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] py-4 px-6 rounded-lg font-light"
          >
            Create Section
          </button>
          <span className="absolute bg-cyan-400/10 text-cyan-200 text-xl transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] py-4 px-6 rounded-lg font-light animate-ping" />
        </div>

        <h1 className="mt-8 text-xl text-slate-700 italic">
          Looks Like You Haven't Created Any Sections
        </h1>
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

      <div className="w-full h-9/10 bg-transparent flex items-center justify-center">
        {/* Render sections grid/list here */}
      </div>
    </div>
  );
}