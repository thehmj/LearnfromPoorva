"use client";
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [error] = useState(null);
  const router = useRouter();

  return (
    <div className="container" style={{ marginTop: 28 }}>
      <div className="glass card" style={{ padding: 20, maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
        <h1 className="section-title">Registration Disabled</h1>
        <p className="text-muted mt-3">This demo uses fixed credentials. Please login using:</p>
        <div className="mt-3" style={{ display: 'inline-grid', gap: 8, textAlign: 'left' }}>
          <div className="chip">Email: admin@admin.com</div>
          <div className="chip">Password: admin</div>
        </div>
        <div className="mt-4">
          <button className="btn btn-primary" onClick={() => router.push('/login')}>Go to Login</button>
        </div>
        {error && <div style={{ color: 'crimson' }}>{error}</div>}
      </div>
    </div>
  );
}
