export const metadata = { title: 'About Us – Course Store' };

export default function AboutPage() {
  return (
    <div className="container" style={{ marginTop: 16 }}>
      <div className="glass card" style={{ padding: 24 }}>
        <h1 className="section-title">About Us</h1>
        <p className="text-muted mt-3" style={{ maxWidth: 760 }}>
          We craft concise, exam-focused CA courses that balance conceptual clarity with practice. Our team blends
          teaching experience with thoughtful product design to make your preparation delightful and effective.
        </p>
        <div className="auto-grid mt-4">
          <div className="card" style={{ padding: 16 }}>
            <strong>Clarity-first content</strong>
            <p className="text-muted mt-2">Concepts explained simply with structured problem solving.</p>
          </div>
          <div className="card" style={{ padding: 16 }}>
            <strong>Exam-focused</strong>
            <p className="text-muted mt-2">Syllabus mapped lessons and PYQs curated by mentors.</p>
          </div>
          <div className="card" style={{ padding: 16 }}>
            <strong>Crafted UI</strong>
            <p className="text-muted mt-2">A modern, responsive interface that keeps you in flow.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

