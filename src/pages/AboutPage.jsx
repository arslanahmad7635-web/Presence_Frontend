// export default function AboutPage() {
//   return (
//     <div className="min-h-screen pt-32 px-6 text-center">
//       <h1 className="text-4xl font-bold text-white">About Us</h1>
//       <p className="text-slate-300 mt-4">ChronosFace is a next-gen computer vision attendance tracking system.</p>
//     </div>
//   );
// }
// ─────────────────────────────────────────────
// 1. CONTENT — replace with your own text

import Navbar from "@/components/Navbar";

// ─────────────────────────────────────────────
const mission = {
  badge: "Our Mission",
  titleWhite: "About",
  titleAccent: "ChronosFace",
  description:
    "Write your overview here. Explain what ChronosFace is and why you built it.",
};

const steps = [
  {
    number: "01",
    title: "Step one title",
    description: "Describe the first step of how the system works.",
  },
  {
    number: "02",
    title: "Step two title",
    description: "Describe the second step of how the system works.",
  },
  {
    number: "03",
    title: "Step three title",
    description: "Describe the third step of how the system works.",
  },
  {
    number: "04",
    title: "Step four title",
    description: "Describe the fourth step of how the system works.",
  },
];

// ─────────────────────────────────────────────
// 2. SMALL REUSABLE PIECES
// ─────────────────────────────────────────────
function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="group rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20">
      <span className="inline-block rounded-full border border-cyan-400/30 px-3 py-1 text-xs font-semibold text-cyan-300">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. PAGE
// ─────────────────────────────────────────────
export default function AboutUs() {
  return (
    <>
    <Navbar />
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-24 text-white"
    >
      {/* Soft cyan glow in the background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Mission / overview */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{mission.badge}</Badge>

          <h1 className="mt-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            {mission.titleWhite}{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {mission.titleAccent}
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            {mission.description}
          </p>
        </div>

        {/* How it works */}
        <div className="mt-24">
          <div className="text-center">
            <Badge>How It Works</Badge>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From camera to{" "}
              <span className="text-cyan-400">attendance</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
</>
      );
}
