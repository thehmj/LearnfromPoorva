"use client";
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function EnrollClient({ courseId }) {
  const { user } = useAuth();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);

  useEffect(() => {
    if (!user) return;
    try {
      const raw = localStorage.getItem('enrollments');
      const all = raw ? JSON.parse(raw) : {};
      const list = Array.isArray(all[user.email]) ? all[user.email] : [];
      setAlreadyEnrolled(list.includes(courseId));
    } catch (_) {}
  }, [user, courseId]);

  const enroll = async () => {
    try {
      setStatus('loading');
      setError(null);
      const raw = localStorage.getItem('enrollments');
      const all = raw ? JSON.parse(raw) : {};
      const list = Array.isArray(all[user.email]) ? all[user.email] : [];
      if (!list.includes(courseId)) list.push(courseId);
      all[user.email] = list;
      localStorage.setItem('enrollments', JSON.stringify(all));
      setAlreadyEnrolled(true);
      setStatus('done');
    } catch (e) {
      setError(e.message || 'Failed to enroll');
      setStatus('idle');
    }
  };

  if (!user)
    return (
      <p>
        Please <Link href="/login">login</Link> to enroll.
      </p>
    );

  return (
    <div style={{ margin: '12px 0' }}>
      <button
        onClick={enroll}
        disabled={status === 'loading' || alreadyEnrolled}
        className="btn btn-primary"
        style={{ cursor: status === 'loading' || alreadyEnrolled ? 'not-allowed' : 'pointer' }}
      >
        {alreadyEnrolled ? 'Already Enrolled' : status === 'loading' ? 'Processing...' : 'Enroll Now'}
      </button>
      {status === 'done' && <span style={{ marginLeft: 8, color: 'var(--success)' }}>Enrolled!</span>}
      {error && <div style={{ color: 'crimson' }}>{error}</div>}
    </div>
  );
}
