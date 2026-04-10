"use client";

import { FormEvent, useCallback, useRef, useState } from "react";
import { contact } from "@/assets/site-content";

/** Browsers / mail apps differ; ~2k chars for the full mailto URL is a safe target. */
const MAX_MAILTO_TOTAL_CHARS = 1900;

function buildMailtoHref(name: string, visitorEmail: string, note: string): string {
  const safeName = name.trim() || "visitor";
  const subject = encodeURIComponent(`Portfolio inquiry from ${safeName}`);
  let bodyRaw = `Name: ${name.trim()}\nEmail: ${visitorEmail.trim()}\n\nMessage:\n${note.trim()}`;

  const prefix = `mailto:${contact.email}?subject=${subject}&body=`;
  let bodyEnc = encodeURIComponent(bodyRaw);

  if (prefix.length + bodyEnc.length > MAX_MAILTO_TOTAL_CHARS) {
    const overhead = prefix.length + 80;
    const maxBodyBytes = Math.max(200, MAX_MAILTO_TOTAL_CHARS - overhead);
    let truncated = bodyRaw;
    while (encodeURIComponent(truncated).length > maxBodyBytes && truncated.length > 80) {
      truncated = truncated.slice(0, Math.floor(truncated.length * 0.92));
    }
    bodyRaw =
      truncated +
      "\n\n—\n(Message was shortened to fit your mail app. For a longer note, email me directly from the link on the left.)";
    bodyEnc = encodeURIComponent(bodyRaw);
  }

  return `${prefix}${bodyEnc}`;
}

function openMailto(url: string): void {
  // Synchronous user gesture (form submit) + immediate navigation works best across mobile Safari / Chrome.
  window.location.assign(url);
}

export function ContactForm() {
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const submitLockRef = useRef(false);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitLockRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const note = String(formData.get("message") ?? "");

    submitLockRef.current = true;
    setBusy(true);

    const href = buildMailtoHref(name, email, note);

    try {
      openMailto(href);
    } catch {
      setNotice("Could not open your mail app. Please use the email address on the left.");
      submitLockRef.current = false;
      setBusy(false);
      return;
    }

    setNotice("Your email app should open with a draft ready to send. If nothing happened, tap the ✉ email link on the left.");

    queueMicrotask(() => {
      form.reset();
    });

    window.setTimeout(() => {
      submitLockRef.current = false;
      setBusy(false);
    }, 1600);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="sketch-panel mx-auto flex max-w-md flex-col gap-4 p-5"
      aria-describedby="contact-form-hint"
    >
      <p id="contact-form-hint" className="m-0 text-[0.98rem] leading-snug text-[#5a4f45]">
        Opens your email app with a draft to <strong className="font-semibold text-[#3d352d]">{contact.email}</strong>
        —no server. Works best on phones and tablets with Mail or Gmail installed. If it doesn&apos;t open, use the ✉
        link in the column beside this form.
      </p>
      <input name="name" placeholder="Name" required className="sketch-input" autoComplete="name" />
      <input
        name="email"
        type="email"
        inputMode="email"
        placeholder="Email"
        required
        className="sketch-input"
        autoComplete="email"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        required
        maxLength={4000}
        className="sketch-input resize-none"
      />
      <button type="submit" className="notebook-button bg-[#f7edd9] text-[#211d19]" disabled={busy}>
        {busy ? "Opening…" : "Open email draft to send"}
      </button>
      {notice ? <p className="m-0 text-[1.05rem] leading-snug text-[#4b433b]">{notice}</p> : null}
    </form>
  );
}
