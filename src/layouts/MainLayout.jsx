import Navbar from '../components/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen text-slate-100 selection:text-white">
      <Navbar />
      <main className="relative">{children}</main>
    </div>
  );
}
