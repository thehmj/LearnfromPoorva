import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Courses from "@/components/Courses";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
        <Navbar />
      <Hero />
      <Courses/>
      <AboutUs />
      <ContactUs />
    </main>
  );
}
