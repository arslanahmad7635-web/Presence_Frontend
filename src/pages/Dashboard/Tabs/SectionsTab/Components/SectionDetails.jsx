import React, { useMemo, useRef, useState, useEffect } from 'react';
import api from '../../../../../services/axios';

// Hold duration in milliseconds (1500 = 1.5 seconds)
const HOLD_DURATION = 1500;

function SectionDetails({ section, onClose, onSuccess }) {
  const originalValues = useMemo(
    () => ({
      name: section.name ?? '',
      course_code: section.course_code ?? '',
      course_name: section.course_name ?? '',
    }),
    [section]
  );

  const [form, setForm] = useState(originalValues);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [error, setError] = useState(null);

  const sectionId = section.id ?? section._id;
  const isDirty = Object.keys(originalValues).some(
    (key) => form[key] !== originalValues[key]
  );
  const isBusy = saving || deleting;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e?.preventDefault();
    if (!isDirty || isBusy) return;

    setSaving(true);
    setError(null);
    try {
      await api.put(`api/teacher/sections/${sectionId}/`, form);
      onSuccess?.();
    } catch (err) {
      console.error('Failed to update section:', err);
      setError('Failed to update section. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const performDelete = async () => {
    setDeleting(true);
    setError(null);
    try {
      await api.delete(`api/teacher/sections/${sectionId}/`);
      onSuccess?.();
    } catch (err) {
      console.error('Failed to delete section:', err);
      setError('Failed to delete section. Please try again.');
      setDeleting(false);
      setConfirmOpen(false);
    }
  };

  const initial = (originalValues.name || '?').trim().charAt(0).toUpperCase();

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      {/* ---------- Hero / Header ---------- */}
      <div className="relative overflow-hidden border-b border-cyan-400/10">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative px-8 pt-7 pb-6">
          {/* Breadcrumb / back */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
              <span>Sections</span>
              <span className="text-slate-700">/</span>
              <span className="text-cyan-300/80">Details</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              disabled={isBusy}
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-3.5 py-2 text-sm text-slate-300 transition-all hover:border-cyan-400/40 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>

          {/* Identity row */}
          <div className="mt-6 flex items-start gap-5">
            {/* Avatar */}
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 text-2xl font-semibold text-cyan-100 shadow-[0_0_30px_-8px_rgba(34,211,238,0.5)]">
              {initial}
              {isDirty && (
                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {originalValues.course_code && (
                  <span className="inline-flex items-center rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-cyan-200">
                    {originalValues.course_code}
                  </span>
                )}
                {isDirty && (
                  <span className="inline-flex items-center gap-1 rounded-md border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[11px] font-medium text-amber-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Unsaved changes
                  </span>
                )}
              </div>

              <h1 className="mt-2 truncate text-2xl font-bold tracking-tight text-slate-100">
                {originalValues.name || 'Untitled Section'}
              </h1>
              {originalValues.course_name && (
                <p className="mt-1 truncate text-sm text-slate-400">
                  {originalValues.course_name}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Form Body ---------- */}
      <form
        onSubmit={handleUpdate}
        className="flex flex-1 flex-col px-8 py-7 gap-6"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field
            label="Section Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={isBusy}
            placeholder="e.g. BS DS Fall 2025 – Afternoon – B"
            className="md:col-span-2"
          />
          <Field
            label="Course Code"
            name="course_code"
            value={form.course_code}
            onChange={handleChange}
            disabled={isBusy}
            placeholder="e.g. DS-207"
          />
          <Field
            label="Course Name"
            name="course_name"
            value={form.course_name}
            onChange={handleChange}
            disabled={isBusy}
            placeholder="e.g. Intro To Data Science"
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
        <div className="mt-auto flex flex-col-reverse items-stretch justify-between gap-3 border-t border-slate-800/60 pt-5 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => setConfirmOpen(true)}
            disabled={isBusy}
            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-red-500/30 bg-red-500/5 px-5 py-2.5 text-sm font-medium text-red-300 transition-all hover:border-red-500/60 hover:bg-red-500/15 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] disabled:cursor-not-allowed disabled:opacity-40"
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
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            Delete Section
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setForm(originalValues)}
              disabled={!isDirty || isBusy}
              className="rounded-lg px-4 py-2.5 text-sm text-slate-400 transition-all hover:text-slate-200 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-slate-400"
            >
              Reset
            </button>

            <button
              type="submit"
              disabled={!isDirty || isBusy}
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-6 py-2.5 text-sm font-medium text-cyan-100 transition-all hover:border-cyan-400/70 hover:bg-cyan-400/20 hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.5)] disabled:cursor-not-allowed disabled:border-slate-700/60 disabled:bg-slate-800/40 disabled:text-slate-500 disabled:shadow-none"
            >
              {saving ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Saving…
                </>
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
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Update
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {confirmOpen && (
        <DeleteConfirmModal
          sectionName={originalValues.name}
          deleting={deleting}
          onCancel={() => setConfirmOpen(false)}
          onConfirm={performDelete}
        />
      )}
    </div>
  );
}

/* -------------------- Delete Confirmation Modal -------------------- */
function DeleteConfirmModal({ sectionName, deleting, onCancel, onConfirm }) {
  const [holding, setHolding] = useState(false);
  const timeoutRef = useRef(null);

  const clearHold = () => {
    setHolding(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const startHold = (e) => {
    if (deleting) return;
    e?.preventDefault?.();
    setHolding(true);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      onConfirm();
    }, HOLD_DURATION);
  };

  useEffect(() => {
    const handleUp = () => clearHold();
    const handleKey = (e) => {
      if (e.key === 'Escape' && !deleting) onCancel();
    };
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    window.addEventListener('touchcancel', handleUp);
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
      window.removeEventListener('touchcancel', handleUp);
      window.removeEventListener('keydown', handleKey);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleting, onCancel]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md animate-[fadeIn_150ms_ease-out]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !deleting) onCancel();
      }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_20px_80px_-20px_rgba(239,68,68,0.35)]">
        {/* Top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-red-500/0 via-red-500/70 to-red-500/0" />

        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-500/40 bg-red-500/10 text-red-300">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold text-slate-100">
                Delete this section?
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                You're about to permanently delete{' '}
                <span className="font-medium text-slate-200">
                  {sectionName || 'this section'}
                </span>
                . This action cannot be undone.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              disabled={deleting}
              className="rounded-lg bg-slate-800/70 px-5 py-2.5 text-sm text-slate-300 transition-all hover:bg-slate-700/70 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Cancel
            </button>

            <button
              type="button"
              onMouseDown={startHold}
              onMouseLeave={clearHold}
              onTouchStart={startHold}
              onTouchEnd={clearHold}
              disabled={deleting}
              className="relative overflow-hidden rounded-lg border border-red-500/50 bg-red-500/10 px-6 py-2.5 text-sm font-medium text-red-200 transition-all hover:border-red-500/80 disabled:cursor-wait disabled:opacity-80"
            >
              <span
                className="absolute inset-y-0 left-0 bg-red-500/45 pointer-events-none"
                style={{
                  width: holding ? '100%' : '0%',
                  transition: holding
                    ? `width ${HOLD_DURATION}ms linear`
                    : 'none',
                }}
              />
              <span className="relative z-10">
                {deleting ? 'Deleting…' : 'Hold to Delete'}
              </span>
            </button>
          </div>

          <p className="mt-3 text-right text-[11px] uppercase tracking-wider text-slate-500">
            Hold for {HOLD_DURATION / 1000}s to confirm
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Reusable Field -------------------- */
function Field({ label, name, value, onChange, disabled, placeholder, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-wider text-slate-400"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-700/60 bg-slate-900/50 px-4 py-2.5 text-slate-100 placeholder:text-slate-600 outline-none transition-all focus:border-cyan-400/60 focus:bg-slate-900/80 focus:ring-2 focus:ring-cyan-400/15 disabled:cursor-not-allowed disabled:opacity-60"
      />
    </div>
  );
}

export default SectionDetails;