import { useEffect, useState } from 'react';
import { LayoutDashboard, Layers, BookOpen, ScanFace, ShieldX, Loader2 } from 'lucide-react';
import OverviewTab from './Tabs/OverviewTab';
import SectionsTab from './Tabs/SectionsTab/SectionsTab';
import CoursesTab from './Tabs/CoursesTab/CoursesTab';
import api from '../../services/axios';

/* ── Nav config ─────────────────────────────────────────────── */
const NAV = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard, blurb: 'Welcome back, Instructor' },
  { id: 'sections', label: 'Sections', icon: Layers,           blurb: 'Manage your class sections' },
  { id: 'courses',  label: 'Courses',  icon: BookOpen,         blurb: 'Manage your assigned courses' },
];

/* ── Tab registry: id → component ───────────────────────────── */
const TAB_COMPONENTS = {
  overview: OverviewTab,
  sections: SectionsTab,
  courses:  CoursesTab,
};

function MainDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [staffDetails, setStaffDetails] = useState({});
  const [fetchingStaffDetails, setFetchingStaffDetails] = useState(true);
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let canceled = false;

    (async () => {
      try {
        const response = await api.get('api/teacher/details', {
          signal: controller.signal,
        });

        if (canceled) return;

        // Access granted only if the request succeeded
        setStaffDetails(response.data);
        setAccessGranted(true);
      } catch (error) {
        if (canceled) return;

        if (error?.name !== 'CanceledError') {
          console.log(error);

          // Access denied on any real error (401, 403, network, etc.)
          setAccessGranted(false);
        }
      } finally {
        if (!canceled) setFetchingStaffDetails(false);
      }
    })();

    return () => {
      canceled = true;
      controller.abort();
    };
  }, []);

  /* ── 1. LOADING STATE ───────────────────────────────────────── */
  if (fetchingStaffDetails) {
    return (
      <section className="w-full h-screen grid place-items-center bg-[#050A12] text-white font-['Poppins',sans-serif] antialiased">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={36} className="text-cyan-400 animate-spin" />
          <p className="text-sm text-slate-400 tracking-wide">Fetching Details...</p>
        </div>
      </section>
    );
  }

  /* ── 2. ACCESS DENIED ───────────────────────────────────────── */
  if (!accessGranted) {
    return (
      <section className="w-full h-screen grid place-items-center bg-[#050A12] text-white font-['Poppins',sans-serif] antialiased">
        <div className="flex flex-col items-center gap-5 text-center px-6">
          <div className="h-16 w-16 rounded-2xl grid place-items-center border border-red-500/30 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <ShieldX size={30} className="text-red-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Access Denied</h1>
            <p className="text-sm text-slate-500 mt-1.5 max-w-xs">
              You don't have permission to view this dashboard. Contact your administrator.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ── 3. GRANTED → DASHBOARD ─────────────────────────────────── */
  const activeNav = NAV.find((item) => item.id === activeTab) ?? NAV[0];
  const ActiveTabComponent = TAB_COMPONENTS[activeTab] ?? OverviewTab;

  return (
    <section className="w-full h-screen flex items-stretch bg-[#050A12] text-white font-['Poppins',sans-serif] antialiased [overflow-x:clip]">

      {/* ── Sidebar ── */}
      <aside className="w-64 shrink-0 h-full border-r border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex flex-col p-6">

        <div className="flex items-center gap-2 mb-10 px-2">
          <ScanFace size={22} className="text-cyan-400" />
          <h2 className="text-base font-bold tracking-tight">Presence Vision</h2>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV.map(({ id, label, icon: Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 border ${
                  active
                    ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                    : 'border-transparent text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon
                  size={18}
                  className={
                    active
                      ? 'text-cyan-300'
                      : 'text-slate-500 group-hover:text-cyan-300 transition-colors'
                  }
                />
                {label}
              </button>
            );
          })}
        </nav>

      </aside>

      {/* ── Main Column ── */}
      <div className="flex-1 h-full flex flex-col min-w-0">

        <header className="h-20 shrink-0 border-b border-white/[0.08] flex items-center justify-between px-8">
          <div>
            <h1 className="text-xl font-bold tracking-tight capitalize">{activeNav.label}</h1>
            <p className="text-xs text-slate-500 mt-0.5">{activeNav.blurb}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-[11px] font-bold uppercase tracking-widest text-cyan-400">
              Fall 2026
            </span>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 grid place-items-center text-slate-950 text-sm font-bold shadow-[0_0_20px_rgba(34,211,238,0.35)]">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
          <ActiveTabComponent
            isActive
            staffDetails={staffDetails}
            fetchingStaffDetails={fetchingStaffDetails}
          />
        </main>
      </div>
    </section>
  );
}

export default MainDashboard;