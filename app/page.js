'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Resume />
        <Projects />
        <Certificates />
        <Contact />
    </>
  );
}
