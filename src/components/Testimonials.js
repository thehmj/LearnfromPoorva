"use client";
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];
  return (
    <section className="container" style={{ marginTop: 28 }}>
      <h2 className="section-title mb-3">What Students Say</h2>
      <div className="glass card" style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 16, padding: 16, width: 'max-content', animation: 'marquee 28s linear infinite' }}>
          {items.map((t, idx) => (
            <blockquote key={idx} className="card" style={{ minWidth: 280, maxWidth: 320, padding: 16 }}>
              <p style={{ fontStyle: 'italic' }}>“{t.content}”</p>
              <div className="mt-2 text-muted">
                <strong style={{ color: 'var(--fg)' }}>{t.name}</strong>
                <div>{t.role}</div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

