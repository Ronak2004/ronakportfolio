import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import MyWork from "./components/MyWork";
import ReactProjects from "./components/ReactProjects";
import Education from "./components/Education";
import AdditionalExpertise from "./components/AdditionalExpertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen font-sans bg-primary overflow-x-hidden w-full">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <MyWork />
        <ReactProjects />
        <Education />
        <AdditionalExpertise />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;