import ContactForm from "@/components/ContactForm";

export default function ContactUs() {
  return (
    <section id="contact" className="ocg-section">
      <div className="ocg-container">
        <div className="ocg-section-header">
          <span className="ocg-section-eyebrow">
            <i className="fal fa-envelope" />
            Contact Us
          </span>
          <h1 className="ocg-section-title">Have a Doubt? Reach Out.</h1>
          <p className="ocg-section-text">
            Whether it&apos;s course details, career guidance, or study help, send a message and
            Poorva Ma&apos;am will get back to you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: 24,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "var(--ocg-radius-lg)",
              padding: 20,
              boxShadow: "var(--ocg-shadow-soft)",
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Send a Message</h2>
            <p className="text-muted" style={{ fontSize: 14 }}>
              Fill the form and share your question, topic, or concern. You&apos;ll receive a reply
              on your email.
            </p>
            <ContactForm />
          </div>

          <aside
            style={{
              background: "rgba(255,255,255,0.8)",
              borderRadius: "var(--ocg-radius-lg)",
              padding: 20,
              border: "1px solid var(--ocg-border)",
            }}
          >
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Direct Contact</h2>
            <p className="text-muted" style={{ fontSize: 14, marginBottom: 12 }}>
              Prefer reaching out directly? Use the details below to connect with Poorva Ma&apos;am.
            </p>
            <div style={{ display: "grid", gap: 8, fontSize: 14 }}>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:poorva.teacher@example.com"
                  style={{ color: "var(--ocg-primary)", fontWeight: 500 }}
                >
                 shyam@taxsapphire.com
                </a>
              </p>
              <p>
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
              {/* <p>
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://instagram.com/your_profile"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--ocg-primary)", fontWeight: 500 }}
                >
                  @your_profile
                </a>
              </p>
              <p>
                <strong>YouTube:</strong>{" "}
                <a
                  href="https://www.youtube.com/@your_channel"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--ocg-primary)", fontWeight: 500 }}
                >
                  Commerce with Poorva Ma&apos;am
                </a>
              </p> */}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
