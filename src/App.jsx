import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWork from "./components/MyWork";

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <About />

        <MyWork />
        {/* Digital Marketing */}
        {/* E-commerce */}
        {/* Contact */}
      </main>
    </div>
  );
}

export default App;