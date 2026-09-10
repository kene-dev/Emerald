import useLenis from "./lib/useLenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Admissions from "./sections/Admissions";
import Testimonials from "./sections/Testimonials";
import Leadership from "./sections/Leadership";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

export default function App() {
  useLenis();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Admissions />
        <Testimonials />
        {/* <Leadership /> */}
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
