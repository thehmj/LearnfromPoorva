import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export const metadata = { title: "Courses – Poorva Ma’am" };

export default function CoursesPage() {
  return (
    <main className="ocg-section">
      <div className="ocg-container">
        <div className="ocg-section-header">
          <span className="ocg-section-eyebrow">
            <i className="fal fa-book me-2" />
            Learn with Poorva Ma’am
          </span>
          <h1 className="ocg-section-title">Available Courses</h1>
          <p className="ocg-section-text">
            Two carefully designed programs to build your fundamentals and confidence in commerce.
          </p>
        </div>
        <div className="auto-grid">
          {courses.slice(0, 2).map((c) => (
            <CourseCard key={c._id} course={c} />
          ))}
        </div>
      </div>
    </main>
  );
}

