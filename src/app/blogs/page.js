import { blogs } from '@/data/blogs';

export const metadata = { title: 'Blogs – Course Store' };

export default function BlogsPage() {
  return (
    <div className="container" style={{ marginTop: 16 }}>
      <div className="glass card" style={{ padding: 20 }}>
        <h1 className="section-title">Blogs</h1>
        <p className="text-muted mt-2">Guides and strategies for CA exams.</p>
        <div className="auto-grid mt-4">
          {blogs.map((b) => (
            <article key={b.slug} className="card" style={{ padding: 16 }}>
              <div className="chip">{new Date(b.date).toLocaleDateString()}</div>
              <h3 style={{ marginTop: 8 }}>{b.title}</h3>
              <p className="text-muted mt-2">{b.excerpt}</p>
              <div className="mt-2">
                <button className="btn" style={{ cursor: 'pointer' }} disabled>Coming soon</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

