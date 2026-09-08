import About from "@/components/About";
import Collaboration from "@/components/Collaboration";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import PageMotion from "@/components/PageMotion";

export default function Home() {
  return (
    <PageMotion>
      <a className="skip-link fixed left-5 top-3.5 z-100 -translate-y-[150%] bg-background px-[18px] py-2.5 focus:translate-y-0" href="#main">Aller au contenu</a>
      <Header />
      <main id="main" className="overflow-clip">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Collaboration />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </PageMotion>
  );
}
