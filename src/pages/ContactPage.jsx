// export default function ContactPage() {
//   return (
//     <div className="min-h-screen pt-32 px-6 text-center">
//       <h1 className="text-4xl font-bold text-white">Contact Us</h1>
//       <p className="text-slate-300 mt-4">Get in touch with our team for support or inquiries.</p>
//     </div>
//   );
// }
import Navbar from "@/components/Navbar";
import { useState } from "react";

// ─────────────────────────────────────────────
// 1. CONTENT — replace with your own text
// ─────────────────────────────────────────────
const header = {
  badge: "Contact Us",
  titleWhite: "Get in",
  titleAccent: "Touch",
  description: "Write a short line inviting people to reach out.",
};

const initialForm = { name: "", email: "", subject: "", message: "" };

// Shared style for all inputs, so it's defined once
const inputClass =
  "w-full rounded-xl border border-cyan-400/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30";

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

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </span>
      {children}
    </label>
  );
}

// ─────────────────────────────────────────────
// 3. PAGE
// ─────────────────────────────────────────────
export default function ContactUs() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: replace with your real API call, e.g.
      // await fetch("/api/contact", { method: "POST", headers: {...}, body: JSON.stringify(form) });
      await new Promise((resolve) => setTimeout(resolve, 800)); // fake delay
      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
    <Navbar />
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-24 text-white"
    >
      {/* Soft cyan glow in the background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-2xl">
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
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-5 rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={inputClass}
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Subject">
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              required
              className={inputClass}
            />
          </Field>

          <Field label="Message">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message..."
              required
              className={`${inputClass} resize-none`}
            />
          </Field>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-center text-sm text-cyan-300">
              Message sent. We'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
    </>
  );
}
