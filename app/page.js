'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
    </>
  );
}
