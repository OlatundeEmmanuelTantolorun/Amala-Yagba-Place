import { useState, type FormEvent } from "react";
import { config, wa } from "../config";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Website feedback for ${config.name}`;
    const body = [`Name: ${name.trim()}`, `Email: ${email.trim() || "Not provided"}`, "", message.trim()].join("\n");
    if (config.feedbackEmail.trim()) {
      window.location.href = `mailto:${config.feedbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }
    if (!config.visit.whatsapp) {
      setError("Feedback contact details haven't been configured yet. Please call the restaurant.");
      return;
    }
    window.open(wa(`Hello ${config.name}, I'd like to share feedback.\n\n${body}`), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="feedback" aria-labelledby="feedback-heading" className="bg-[#e9dfce] px-6 py-24 sm:py-32 md:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-12 md:grid-cols-[.9fr_1.1fr] md:gap-20">
        <div>
          <p className="eyebrow text-ember">A note from you</p>
          <h2 id="feedback-heading" className="mt-6 max-w-[9ch] font-display text-5xl leading-[.94] tracking-[-.045em] sm:text-7xl">Tell us how we did.</h2>
          <p className="mt-6 max-w-[36ch] text-sm leading-[1.9] text-[#6d6254] sm:text-base">Good, bad or somewhere in between — your feedback helps us make every visit better.</p>
          <p className="mt-8 text-xs leading-relaxed text-muted">{config.feedbackEmail.trim() ? `Your message will open in your email app addressed to ${config.feedbackEmail}.` : "Your message will open in WhatsApp so the restaurant can hear directly from you."}</p>
        </div>
        <form onSubmit={submit} className="grid gap-5">
          <label className="grid gap-2 text-xs uppercase tracking-[.14em] text-[#6d6254]">Your name<input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="min-h-12 border-b border-[#b9aa94] bg-transparent px-1 text-base normal-case tracking-normal text-ink outline-none transition focus:border-ember" placeholder="How should we address you?" /></label>
          <label className="grid gap-2 text-xs uppercase tracking-[.14em] text-[#6d6254]">Email <span className="normal-case tracking-normal">(optional)</span><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className="min-h-12 border-b border-[#b9aa94] bg-transparent px-1 text-base normal-case tracking-normal text-ink outline-none transition focus:border-ember" placeholder="you@example.com" /></label>
          <label className="grid gap-2 text-xs uppercase tracking-[.14em] text-[#6d6254]">Your message<textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="resize-y border-b border-[#b9aa94] bg-transparent px-1 py-3 text-base normal-case tracking-normal text-ink outline-none transition focus:border-ember" placeholder="Tell us about your experience..." /></label>
          {error && <p role="alert" className="text-sm text-ember">{error}</p>}
          <button type="submit" className="mt-2 inline-flex min-h-12 w-fit items-center gap-5 bg-night px-6 py-3 text-[10px] uppercase tracking-[.18em] text-paper transition hover:bg-ember">Send feedback <span aria-hidden="true">↗</span></button>
        </form>
      </div>
    </section>
  );
}
