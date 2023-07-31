import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Screenplays from "./components/Screenplays";
import Articles from "./components/Articles";

export default function App() {
  return (
    <main className="text-gray-400 bg-black body-font">
      <Navbar />
      <About />
      <Projects />
      <Screenplays />
      <Articles />
      <Contact />
    </main>
  );
}
