// ─────────────────────────────────────────────
// 1. CONTENT — replace with your own text
// ─────────────────────────────────────────────
const header = {
  badge: "Privacy Policy",
  titleWhite: "Your Data,",
  titleAccent: "Protected",
  description: "We ensure secure processing and protection of facial biometric data.",
  lastUpdated: "Last updated: Month DD, YYYY",
};

const sections = [
  {
    title: "Information We Collect",
    body: "Describe what data the system collects, such as facial images captured during enrollment, attendance timestamps, and basic account details.",
  },
  {
    title: "How We Use Your Data",
    body: "Explain the purpose of the data, for example marking attendance, generating reports, and improving recognition accuracy.",
  },
  {
    title: "Biometric Data Protection",
    body: "We do not store facial images. Only a numerical face embedding generated from your image is kept, and it is used solely to recognize you when marking attendance. Embeddings are still treated as sensitive biometric data and are protected with strict access controls.",
  },
  {
    title: "Data Retention",
    body: "State how long attendance records and biometric data are kept, and what happens when a user leaves the institution.",
  },
  {
    title: "Your Rights",
    body: "Explain how users can request access, correction, or deletion of their data.",
  },
  {
    title: "Contact",
    body: "Tell users who to contact with privacy questions, and point them to the Contact Us page.",
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

function PolicySection({ number, title, body }) {
  return (
    <div className="flex gap-5 rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur transition duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 sm:p-8">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-semibold text-cyan-300">
        {number}
      </span>
      <div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. PAGE
// ─────────────────────────────────────────────
export default function PrivacyPolicy() {
  return (
    <section
      id="privacy"
      className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-24 text-white"
    >
      {/* Soft cyan glow in the background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center">
          <Badge>{header.badge}</Badge>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            {header.titleWhite}{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {header.titleAccent}
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            {header.description}
          </p>
          <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
            {header.lastUpdated}
          </p>
        </div>

        {/* Policy sections */}
        <div className="mt-14 space-y-5">
          {sections.map((section, index) => (
            <PolicySection
              key={section.title}
              number={String(index + 1).padStart(2, "0")}
              title={section.title}
              body={section.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}