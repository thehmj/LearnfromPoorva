"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="container" style={{ position: 'relative', padding: '56px 0 28px' }}>
      <div className="orb purple" style={{ width: 280, height: 280, top: -60, left: -60, animation: 'float 9s ease-in-out infinite' }} />
      <div className="orb cyan" style={{ width: 300, height: 300, right: -80, top: -40, animation: 'float 11s ease-in-out infinite' }} />

      <div className="grid-bg" style={{ position: 'absolute', inset: 0, maskImage: 'radial-gradient(60% 60% at 50% 40%, black, transparent 80%)' }} />

      <div className="glass card" style={{ padding: 28, borderRadius: 18, position: 'relative', overflow: 'hidden' }}>
        <div className="tilt" style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', alignItems: 'center', gap: 16 }}>
          <div className={`tilt-inner ${mounted ? 'fade-up' : ''}`}>
            <div className="chip mb-2">Premium CA Courses</div>
            <h1 style={{ fontSize: 42, lineHeight: 1.05, fontWeight: 900, letterSpacing: '-.02em', marginBottom: 10 }}>
              Level up your CA prep with
              <span className="gradient-text"> concept clarity</span>
            </h1>
            <p className="text-muted" style={{ fontSize: 16, maxWidth: 560 }}>
              Crisp lessons, exam-focused problem sets and delightful UI. Built for Foundation, Inter and Final.
            </p>
            <div className="mt-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#courses" className="btn btn-primary">Browse Courses</Link>
              <Link href="/dashboard" className="btn">Go to Dashboard</Link>
            </div>
          </div>

          <div className={`tilt-inner ${mounted ? 'fade-up delay-2' : ''}`} style={{ position: 'relative' }}>
            <div className="card" style={{ borderRadius: 18, overflow: 'hidden' }}>
              <Image src="/graphics/gradient-1.svg" alt="Hero" width={720} height={540} priority style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

