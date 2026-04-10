"use client";

import { FormEvent, useCallback, useRef, useState } from "react";
import { contact } from "@/assets/site-content";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const WEB3_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

/** Safe mailto URL length across mail clients. */
const MAX_MAILTO_TOTAL_CHARS = 1900;

function hasWeb3FormsKey(key: string): boolean {
  return typeof key === "string" && key.trim().length >= 16;
}

const canSubmitViaWeb3 = hasWeb3FormsKey(WEB3_ACCESS_KEY);

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
      "\n\n—\n(Your message was shortened to fit your mail app—send a second note if you need more room.)";
    bodyEnc = encodeURIComponent(bodyRaw);
  }

  return `${prefix}${bodyEnc}`;
}

function openMailto(url: string): void {
  window.location.assign(url);
}

export function ContactForm() {
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const submitLockRef = useRef(false);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (submitLockRef.current) return;

      const form = event.currentTarget;
      const formData = new FormData(form);
      const name = String(formData.get("name") ?? "").trim();
      const email = String(formData.get("email") ?? "").trim();
      const note = String(formData.get("message") ?? "").trim();

      setError(null);
      setNotice(null);
      submitLockRef.current = true;
      setBusy(true);

      try {
        if (canSubmitViaWeb3) {
          const res = await fetch(WEB3FORMS_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: WEB3_ACCESS_KEY.trim(),
              subject: `Portfolio inquiry from ${name || "website visitor"}`,
              name,
              email,
              message: note,
              from_name: name,
              replyto: email,
            }),
          });

          const data = (await res.json()) as { success?: boolean; message?: string };

          if (data.success) {
            setNotice("Thanks—got it. I’ll get back to you as soon as I can.");
            form.reset();
          } else {
            setError(
              data.message ?? "Something went wrong. Please try again, or use the email shortcuts on the left.",
            );
          }
        } else {
          const href = buildMailtoHref(name, email, note);
          try {
            openMailto(href);
          } catch {
            setError("Could not open your mail app. Use Copy email or Open in Gmail on the left.");
            submitLockRef.current = false;
            setBusy(false);
            return;
          }
          setNotice(
            "Your email app should open with a draft—tap Send when you’re ready. If nothing opens, use Open in Gmail or Copy email on the left.",
          );
          queueMicrotask(() => form.reset());
        }
      } catch {
        setError("Something blocked the send. Check your connection, or use the email shortcuts on the left.");
      } finally {
        window.setTimeout(() => {
          submitLockRef.current = false;
          setBusy(false);
        }, canSubmitViaWeb3 ? 400 : 1600);
      }
    },
    [],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="sketch-panel mx-auto flex max-w-md flex-col gap-4 p-5"
      aria-describedby="contact-form-hint"
    >
        <p id="contact-form-hint" className="m-0 text-[0.98rem] leading-snug text-[#5a4f45]">
          {canSubmitViaWeb3 ? (
            <>
              Drop a note here—I read everything and reply when I can. Prefer your own inbox?{" "}
              <strong className="text-[#3d352d]">Copy email</strong> or <strong className="text-[#3d352d]">Gmail</strong>{" "}
              on the left works too.
            </>
          ) : (
            <>
              Fill this in and I&apos;ll open a draft in your email app so you can send in one tap. You can also use{" "}
              <strong className="text-[#3d352d]">Copy email</strong> or <strong className="text-[#3d352d]">Open in Gmail</strong>{" "}
              on the left.
            </>
          )}
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
          {busy ? (canSubmitViaWeb3 ? "Sending…" : "Opening…") : canSubmitViaWeb3 ? "Send message" : "Open email draft"}
        </button>
        {notice ? <p className="m-0 text-[1.05rem] leading-snug text-[#2d6b3a]">{notice}</p> : null}
        {error ? <p className="m-0 text-[1.05rem] leading-snug text-[#8b4513]">{error}</p> : null}
    </form>
  );
}
