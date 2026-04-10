"use client";

import { useCallback, useState } from "react";
import { contact } from "@/assets/site-content";

function gmailComposeUrl(): string {
  const to = encodeURIComponent(contact.email);
  const su = encodeURIComponent("Hello");
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}`;
}

function outlookComposeUrl(): string {
  return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(contact.email)}`;
}

type ContactQuickActionsProps = {
  className?: string;
};

export function ContactQuickActions({ className = "" }: ContactQuickActionsProps) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const copyEmail = useCallback(async () => {
    setCopyFailed(false);
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopyFailed(true);
    }
  }, []);

  return (
    <div className={className}>
      <p className="mb-2 mt-0 text-[0.95rem] font-medium text-[#4a4037]">Email me directly</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="contact-quick-btn" onClick={copyEmail}>
          {copied ? "Copied!" : "Copy email"}
        </button>
        <a
          className="contact-quick-btn"
          href={gmailComposeUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Gmail
        </a>
        <a
          className="contact-quick-btn"
          href={outlookComposeUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Outlook web
        </a>
        <a className="contact-quick-btn" href={`mailto:${contact.email}`}>
          Mail app
        </a>
      </div>
      {copyFailed ? (
        <p className="mb-0 mt-2 text-[0.9rem] text-[#8b4513]">
          Can&apos;t copy automatically—select this address: {contact.email}
        </p>
      ) : null}
    </div>
  );
}
