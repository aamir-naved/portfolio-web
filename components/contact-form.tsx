"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const note = formData.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${String(name || "visitor")}`);
    const body = encodeURIComponent(
      `Name: ${String(name || "")}\nEmail: ${String(email || "")}\n\nMessage:\n${String(note || "")}`,
    );

    window.location.href = `mailto:aamirnaved0020@gmail.com?subject=${subject}&body=${body}`;
    setMessage("Your email client is ready. I’d love to hear from you.");
    event.currentTarget.reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      whileHover={{ rotate: -0.35 }}
      className="sketch-panel mx-auto flex max-w-md flex-col gap-4 p-5"
    >
      <input name="name" placeholder="Name" required className="sketch-input" />
      <input name="email" type="email" placeholder="Email" required className="sketch-input" />
      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        required
        className="sketch-input resize-none"
      />
      <button type="submit" className="notebook-button bg-[#f7edd9] text-[#211d19]">
        Send Message
      </button>
      {message ? <p className="text-[1.05rem] text-[#4b433b]">{message}</p> : null}
    </motion.form>
  );
}
