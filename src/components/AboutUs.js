export default function AboutUs() {
  return (
    <section id="about" className="ocg-section ocg-section-soft">
      <div className="ocg-container">
        <div className="ocg-section-header">
          <span className="ocg-section-eyebrow">
            <i className="fal fa-user-graduate" />
            About Your Teacher
          </span>
          {/* <h1 className="ocg-section-title">Meet Poorva Ma&apos;am</h1> */}
          <p className="ocg-section-text">
            An individual commerce mentor who believes in patient teaching, practical learning, and
            personal attention for every student.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: 28,
            alignItems: "flex-start",
          }}
        >
          <section
            style={{
              background: "#ffffff",
              borderRadius: "var(--ocg-radius-lg)",
              padding: 24,
              boxShadow: "var(--ocg-shadow-soft)",
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
              Teaching Philosophy
            </h2>
            <p className="text-muted" style={{ fontSize: 14, marginBottom: 14 }}>
              Our Faculty focuses on simplifying concepts instead of rote learning. Every
              topic is broken into small, clear steps with real-life commerce and taxation
              examples, so you understand not just{" "}
              <strong>what</strong> to do, but also <strong>why</strong>.
            </p>
            <p className="text-muted" style={{ fontSize: 14 }}>
              Classes are kept intentionally small, allowing her to track each student&apos;s
              progress, clarify doubts in depth, and give honest feedback on where you can improve.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 14,
                marginTop: 18,
              }}
            >
              <div
                style={{
                  padding: 14,
                  borderRadius: "var(--ocg-radius-md)",
                  border: "1px solid var(--ocg-border)",
                  background: "rgba(255,255,255,0.9)",
                }}
              >
                <strong>Concept clarity first</strong>
                <p className="text-muted" style={{ fontSize: 13, marginTop: 6 }}>
                  Diagrams, flow charts, and step-wise notes to make topics stick.
                </p>
              </div>
              <div
                style={{
                  padding: 14,
                  borderRadius: "var(--ocg-radius-md)",
                  border: "1px solid var(--ocg-border)",
                  background: "rgba(255,255,255,0.9)",
                }}
              >
                <strong>Practical approach</strong>
                <p className="text-muted" style={{ fontSize: 13, marginTop: 6 }}>
                  Focus on how concepts show up in real accounting and US taxation work.
                </p>
              </div>
              <div
                style={{
                  padding: 14,
                  borderRadius: "var(--ocg-radius-md)",
                  border: "1px solid var(--ocg-border)",
                  background: "rgba(255,255,255,0.9)",
                }}
              >
                <strong>Supportive environment</strong>
                <p className="text-muted" style={{ fontSize: 13, marginTop: 6 }}>
                  A calm, friendly classroom where you can ask any doubt freely.
                </p>
              </div>
            </div>
          </section>

          <aside
            style={{
              background: "rgba(255,255,255,0.9)",
              borderRadius: "var(--ocg-radius-lg)",
              padding: 22,
              border: "1px solid var(--ocg-border)",
            }}
          >
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>At a Glance</h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: 8,
                fontSize: 14,
              }}
            >
              <li>
                <strong>Based in:</strong> Ahmedabad
              </li>
              <li>
                <strong>Specialisation:</strong> Commerce, Accounting &amp; US Taxation
              </li>
              <li>
                <strong>Batch style:</strong> Small, focused groups with personal guidance
              </li>
              <li>
                <strong>Teaching mode:</strong> Concept sessions, practice hours, and doubt solving
              </li>
            </ul>

            <div style={{ marginTop: 16, fontSize: 14 }}>
              <p className="text-muted">
                If you&apos;d like to know whether these classes are the right fit for you, you can
                always reach out directly.
              </p>
              <p style={{ marginTop: 10 }}>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:shyam@taxsapphire.com"
                  style={{ color: "var(--ocg-primary)", fontWeight: 500 }}
                >
                  shyam@taxsapphire.com
                </a>
                <br />
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/0000000000"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--ocg-primary)", fontWeight: 500 }}
                >
                  +91-00000-00000
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
