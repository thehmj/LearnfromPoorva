"use client";
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const ADMIN_EMAIL = 'admin@admin.com';
      const ADMIN_PASS = 'admin';
      if (email !== ADMIN_EMAIL || password !== ADMIN_PASS) {
        throw new Error('Invalid credentials. Use admin@admin.com / admin');
      }
      const data = { token: `local-${Date.now()}`, user: { name: 'Admin', email: ADMIN_EMAIL } };
      login(data);
      router.push('/');
    } catch (e) {
      setError(e.message || 'Login failed');
    }
  };

  return (
    <div className="container" style={{ marginTop: 28 }}>
      <div className="glass card" style={{ padding: 20, maxWidth: 420, margin: '0 auto' }}>
        <h1 className="section-title">Admin Login</h1>
        <form onSubmit={onSubmit} className="mt-3" style={{ display: 'grid', gap: 12 }}>
          <input className="card" style={{ padding: 12, borderRadius: 10, background: 'rgba(255,255,255,.06)', border: '1px solid var(--border)', color: 'var(--fg)' }} type="email" placeholder="Email (admin@admin.com)" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="card" style={{ padding: 12, borderRadius: 10, background: 'rgba(255,255,255,.06)', border: '1px solid var(--border)', color: 'var(--fg)' }} type="password" placeholder="Password (admin)" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', cursor: 'pointer' }}>Login</button>
          {error && <div style={{ color: 'crimson' }}>{error}</div>}
        </form>
      </div>
    </div>
  );
}
