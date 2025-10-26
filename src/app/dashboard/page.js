"use client";
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { courses } from '@/data/courses';

export default function Dashboard() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user) return;
    try {
      const raw = localStorage.getItem('enrollments');
      const all = raw ? JSON.parse(raw) : {};
      const ids = Array.isArray(all[user.email]) ? all[user.email] : [];
      const mapped = ids
        .map((id) => courses.find((c) => c._id === id))
        .filter(Boolean)
        .map((course) => ({ _id: course._id, course }));
      setItems(mapped);
    } catch (_) {
      setItems([]);
    }
  }, [user]);

  if (!user) return <div className="container">Please login to view your dashboard.</div>;

  return (
    <div className="container" style={{ marginTop: 16 }}>
      <div className="glass card" style={{ padding: 20 }}>
        <h1 className="section-title">Your Enrollments</h1>
        {items.length === 0 && <div className="mt-3 text-muted">No enrollments yet.</div>}
        <div className="auto-grid mt-4">
          {items.map((item) => (
            <div key={item._id} className="card" style={{ padding: 14 }}>
              <strong>{item.course?.title}</strong>
              <div className="mt-2">
                <Link className="btn" href={`/courses/${item.course?.slug || item.course?._id}`}>Go to course</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
