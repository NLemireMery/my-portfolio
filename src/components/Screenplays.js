import { FilmIcon } from "@heroicons/react/solid";
import React from "react";
import { screenplays } from "../data";

export default function Screenplays() {
  return (
    <section id="screenplays">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-20">
          <FilmIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Scénarios &amp; Projets Filmiques
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-red-800 hover:text-red-500 font-semibold mb-3">
            CELTX / FINAL DRAFT
            <br></br>
            CAUSALITY
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {screenplays.map((screenplay) => (
            <a
              target="_blank"
              href={screenplay.link}
              key={screenplay.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={screenplay.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-red-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-1">
                    {screenplay.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {screenplay.title}
                  </h1>
                  <p className="leading-relaxed">{screenplay.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}