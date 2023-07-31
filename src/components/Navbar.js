import React from "react";

export default function Navbar() {
  return (
    <header className="bg-red-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Nicolas Lemire-Mery
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white hover:text-red-300">
            Développeur
          </a>
          <a href="#screenplays" className="mr-5 text-white hover:text-red-300">
            Scénariste
          </a>
          <a href="#articles" className="mr-5 text-white hover:text-red-300">
            Rédacteur
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-white bg-red-900 border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-red-900 rounded text-base mt-4 md:mt-0">
          Discutons ! <span className="ml-2" role="img" aria-label="talk">💬</span>
        </a>
      </div>
    </header>
  );
}