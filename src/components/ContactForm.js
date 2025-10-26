"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <form onSubmit={onSubmit} className="mt-4" style={{ display: 'grid', gap: 12 }}>
      <input className="card" style={{ padding: 12, borderRadius: 10, background: 'rgba(255,255,255,.06)', border: '1px solid var(--border)', color: 'var(--fg)' }} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input className="card" style={{ padding: 12, borderRadius: 10, background: 'rgba(255,255,255,.06)', border: '1px solid var(--border)', color: 'var(--fg)' }} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <textarea className="card" rows={6} style={{ padding: 12, borderRadius: 10, background: 'rgba(255,255,255,.06)', border: '1px solid var(--border)', color: 'var(--fg)', resize: 'vertical' }} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button className="btn btn-primary" style={{ justifyContent: 'center', cursor: 'pointer' }} type="submit">Send Message</button>
      {sent && <div style={{ color: 'var(--success)' }}>Message sent (demo)!</div>}
    </form>
  );
}

