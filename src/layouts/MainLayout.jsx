export default function MainLayout({ children }) {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <div className="min-h-screen text-slate-100 selection:text-white">
        <main className="relative">{children}</main>
      </div>
    </div>
  );
}
