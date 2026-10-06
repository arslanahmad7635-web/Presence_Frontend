import React from 'react';
import { BookOpen, Users, TrendingUp, ArrowRight } from 'lucide-react';

const MOCK_SECTIONS = [
  {
    id: 1,
    name: '2026 Fall Morning Section A',
    course: { code: 'CS-301', name: 'Data Science' },
    enrolled_count: 45,
  },
  {
    id: 2,
    name: '2026 Fall Afternoon Section B',
    course: { code: 'CS-302', name: 'Software Engineering' },
    enrolled_count: 38,
  },
];

export default function OverviewTab({ onSelectSection }) {
  const totalEnrolled = MOCK_SECTIONS.reduce((a, s) => a + s.enrolled_count, 0);

  const METRICS = [
    { label: 'Assigned Classes', value: MOCK_SECTIONS.length, icon: BookOpen, valueClass: 'text-white' },
    { label: 'Total Enrolled Students', value: totalEnrolled, icon: Users, valueClass: 'text-white' },
    { label: 'Avg. Attendance Rate', value: '91.4%', icon: TrendingUp, valueClass: 'text-emerald-400' },
  ];

  return (
    <div className="space-y-10">

      {/* ── Metric Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {METRICS.map(({ label, value, icon: Icon, valueClass }) => (
          <div
            key={label}
            className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                {label}
              </p>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 transition-colors group-hover:bg-cyan-400 group-hover:text-slate-950">
                <Icon size={18} />
              </span>
            </div>
            <p className={`mt-4 text-4xl font-extrabold tracking-tight ${valueClass}`}>
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* ── Sections Grid ── */}
      <div>
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">
              Your Courses
            </span>
            <h3 className="mt-1 text-2xl font-extrabold tracking-tight">
              Taught Sections
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_SECTIONS.map((sec) => (
            <div
              key={sec.id}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-1 bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 rounded-md tracking-wider">
                    {sec.course.code}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-3 group-hover:text-cyan-300 transition-colors">
                    {sec.course.name}
                  </h4>
                  <p className="text-sm text-slate-400 mt-1">{sec.name}</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
                  <Users size={13} className="text-slate-500" />
                  {sec.enrolled_count}
                </span>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => onSelectSection?.(sec)}
                  className="group/btn w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-sm font-bold transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                >
                  Manage Roster
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}