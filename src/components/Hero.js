import Image from "next/image";
import Link from "next/link";
import imgLogo from "../Taxlogo.jpeg";
export default function Hero() {
  return (
    <section  className="ocg-hero">
      <div className="ocg-container ocg-hero-inner">
        <div className="ocg-hero-content">
          <span className="ocg-hero-eyebrow">
            <i className="fal fa-book me-2" />
            Personal Commerce Mentorship
          </span>
          <h1 className="ocg-hero-title">
            Learn US Taxation Practically {" "}
            {/* <span className="ocg-hero-highlight">Poorva Ma’am</span> */}
          </h1>
          {/* <p className="ocg-hero-text">
            A focused, two-course program crafted and taught by a single dedicated mentor – guiding you from basics
            to practical, job-ready skills.
          </p> */}
          <div className="ocg-hero-actions">
            <Link href="/courses" className="ocg-btn-primary">
              Explore Courses
            </Link>
            <Link href="/contact" className="ocg-btn-outline">
             Login / Register
            </Link>
          </div>
          <ul className="ocg-hero-bullets">
            <li>Concepts simplified with real-life examples</li>
            <li>Practical learning with real software</li>
            <li>Individual attention in a small batch</li>
          </ul>
        </div>

        <div className="ocg-hero-image-wrap">
          <div className="ocg-hero-badge">Individual Teacher • Ahmedabad</div>
          <div className="ocg-hero-image-card">
            <Image
              // src="https://www.overseascommercegurukul.com/wp-content/uploads/2023/07/cta_4_1.png"
              src={imgLogo}
              style={{contentFit: "cover"}}
              alt="Students learning accounting"
              width={640}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

