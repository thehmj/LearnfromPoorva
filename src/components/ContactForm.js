"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <form onSubmit={onSubmit} className="mt-4 ocg-form-grid">
      <input
        className="ocg-input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="ocg-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className="ocg-textarea"
        rows={6}
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button className="ocg-btn-primary ocg-btn-block" type="submit">
        Send Message
      </button>
      {sent && <div className="ocg-success-message">Message sent (demo)!</div>}
    </form>
  );
}
