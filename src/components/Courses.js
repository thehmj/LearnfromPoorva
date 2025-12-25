import { courses } from "@/data/courses";
import CourseCard from "./CourseCard";

export default function Courses() {
    return (
        <section id="courses" className="ocg-section">
            <div className="ocg-container">
                <div className="ocg-section-header">
                    <span className="ocg-section-eyebrow">
                        <i className="fal fa-book me-2" />
                        Courses
                    </span>
                    <h2 className="ocg-section-title">Courses</h2>
                    <p className="ocg-section-text">
                        US taxation and accounting courses designed for beginners to build
                        strong fundamentals in accounting and taxation.
                    </p>
                </div>
                <div className="auto-grid">
                    {courses.map((c) => (
                        <CourseCard key={c._id} course={c} />
                    ))}
                </div>
            </div>
        </section>)
}