import Navbar from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Works from "@/components/works";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
