import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';

export const metadata = { title: 'Courses – Course Store' };

export default function CoursesPage() {
  return (
    <div className="container" style={{ marginTop: 16 }}>
      <div className="glass card" style={{ padding: 20 }}>
        <h1 className="section-title">All Courses</h1>
        <p className="text-muted mt-2">Foundation, Intermediate and Final — explore handcrafted courses.</p>
        <div className="auto-grid mt-4">
          {courses.map((c) => (
            <CourseCard key={c._id} course={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

