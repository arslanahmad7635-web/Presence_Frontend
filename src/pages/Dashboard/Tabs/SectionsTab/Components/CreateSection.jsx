import React, { useState } from 'react';
import { BarLoader } from 'react-spinners';
import api from '../../../../../services/axios';

function CreateSection({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      await api.post('api/teacher/sections/', data);
      onClose();
    } catch (err) {
      console.log(err);
      setError('Failed to create section. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto bg-[#050A12]">
      {/* ---------- Hero / Header ---------- */}
      <div className="relative overflow-hidden border-b border-cyan-400/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative px-8 pt-7 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
              <span>Sections</span>
              <span className="text-slate-700">/</span>
              <span className="text-cyan-300/80">Create</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-3.5 py-2 text-sm text-slate-300 transition-all hover:border-red-400/40 hover:text-red-200 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Close
            </button>
          </div>

          <div className="mt-6 flex items-start gap-5">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 text-cyan-100 shadow-[0_0_30px_-8px_rgba(34,211,238,0.5)]">
              <svg
                className="h-7 w-7"
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
            </div>

            <div className="min-w-0 flex-1">
              <span className="inline-flex items-center rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-cyan-200">
                New Section
              </span>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-100">
                Create a Section
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                Fill in the details below to add a new section.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Form Body ---------- */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col px-8 py-7 gap-6"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field
            label="Course Code"
            name="course_code"
            id="coursecode"
            placeholder="e.g. CS-XXX"
            disabled={loading}
          />
          <Field
            label="Course Name"
            name="course_name"
            id="coursename"
            placeholder="e.g. Programming Fundamentals"
            disabled={loading}
          />
          <Field
            label="Section Name"
            name="name"
            id="name"
            placeholder="e.g. BS DS Fall 2025 – Afternoon – B"
            disabled={loading}
            className="md:col-span-2"
          />
        </div>

        {error && (
          <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* ---------- Action Bar ---------- */}
        <div className="mt-auto flex items-center justify-end gap-3 border-t border-slate-800/60 pt-5">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg px-4 py-2.5 text-sm text-slate-400 transition-all hover:text-slate-200 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-slate-400"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="relative inline-flex min-w-[130px] items-center justify-center gap-2 overflow-hidden rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-6 py-2.5 text-sm font-medium text-cyan-100 transition-all hover:border-cyan-400/70 hover:bg-cyan-400/20 hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.5)] disabled:cursor-not-allowed disabled:opacity-80"
          >
            {loading ? (
              <BarLoader color="#67e8f9" width={80} height={3} />
            ) : (
              <>
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
                Create
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

/* -------------------- Reusable Field -------------------- */
function Field({ label, name, id, placeholder, disabled, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={id || name}
        className="text-xs font-medium uppercase tracking-wider text-slate-400"
      >
        {label}
      </label>
      <input
        id={id || name}
        name={name}
        type="text"
        placeholder={placeholder}
        required
        disabled={disabled}
        autoComplete="off"
        className="w-full rounded-lg border border-slate-700/60 bg-slate-900/50 px-4 py-2.5 text-slate-100 placeholder:text-slate-600 outline-none transition-all focus:border-cyan-400/60 focus:bg-slate-900/80 focus:ring-2 focus:ring-cyan-400/15 disabled:cursor-not-allowed disabled:opacity-60"
      />
    </div>
  );
}

export default CreateSection;