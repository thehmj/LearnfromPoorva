"use client";
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20 }}>
      <div className="container" style={{ paddingTop: 14 }}>
        <div className="glass card" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '10px 14px', borderRadius: 12, gap: 12 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 900, letterSpacing: '-.02em' }}>
            <span style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(90deg, var(--brand), var(--brand-2))' }} />
            <span>Course Store</span>
          </Link>
          <nav style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
            <Link className="btn" href="/">Home</Link>
            <Link className="btn" href="/courses">Courses</Link>
            <Link className="btn" href="/about">About Us</Link>
            <Link className="btn" href="/blogs">Blogs</Link>
            <Link className="btn" href="/contact">Contact Us</Link>
          </nav>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'flex-end' }}>
            {user ? (
              <>
                <Link className="btn" href="/dashboard">Dashboard</Link>
                <button onClick={logout} className="btn" style={{ cursor: 'pointer' }}>Logout</button>
              </>
            ) : (
              <Link className="btn btn-primary" href="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
