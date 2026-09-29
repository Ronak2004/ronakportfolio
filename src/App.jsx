import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <MyWork />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;