import EnrollClient from './server-enroll-client';
import { getCourseByIdOrSlug, courses } from '@/data/courses';

export function generateStaticParams() {
  return courses.map((c) => ({ id: c.slug || c._id }));
}

export default async function CoursePage({ params }) {
  const { id } = params;
  const course = getCourseByIdOrSlug(id);
  if (!course) return <div>Course not found.</div>;
  return (
    <div className="container" style={{ marginTop: 16 }}>
      <div className="glass card" style={{ padding: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <div className="chip mb-2">CA</div>
            <h1 className="gradient-text" style={{ fontSize: 34, fontWeight: 900, letterSpacing: '-.02em' }}>{course.title}</h1>
            <p className="text-muted mt-2" style={{ fontSize: 16 }}>{course.description}</p>

            <div className="mt-4" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="chip" style={{ background: 'rgba(34,197,94,.16)', borderColor: 'rgba(34,197,94,.25)', color: '#bbf7d0' }}>
                Price • ₹{Number(course.price).toLocaleString('en-IN')}
              </span>
              <EnrollClient courseId={course._id} />
            </div>

            <h3 className="mt-6" style={{ fontSize: 18, fontWeight: 700 }}>Lessons</h3>
            <ul className="mt-2" style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
              {course.lessons?.map((l, idx) => (
                <li key={idx} className="card" style={{ padding: 10, borderRadius: 10, display: 'flex', justifyContent: 'space-between' }}>
                  <span>{l.title}</span>
                  <span className="text-muted">{l.durationMins ? `${l.durationMins}m` : ''}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card" style={{ borderRadius: 16, overflow: 'hidden', background: 'linear-gradient(120deg, rgba(124,58,237,.5), rgba(34,211,238,.35))', minHeight: 240 }} />
        </div>
      </div>
    </div>
  );
}
