import { courses } from '@/data/courses';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import Testimonials from '@/components/Testimonials';

export default async function Home() {
  return (
    <>
      <Hero />

      <section id="courses" className="container" style={{ marginTop: 16 }}>
        <h2 className="section-title mb-3">Explore Courses</h2>
        <div className="auto-grid">
          {courses.map((c) => (
            <CourseCard key={c._id} course={c} />
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  );
}
