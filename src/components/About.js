import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Moi, c'est Nicolas.
            <br className="hidden lg:inline-block" />Je développe des sites <span role="img" aria-label="computer">💻</span> et des histoires <span role="img" aria-label="book">📖</span> !
          </h1>
          <p className="leading-relaxed">
            Bienvenue sur ce répertoire de mon travail ! Prends une chaise, un café, et parcours-le sans te presser. <span role="img" aria-label="coffee">☕</span>
          </p>
          <p className="leading-relaxed">
            Comme tu le vois, c'est un ensemble assez hétéroclite.
          </p>
          <p className="mb-4 leading-relaxed">
            Pourquoi se limiter à un seul domaine, quand on peut adopter une approche transversale ? <span role="img" aria-label="sunglasses">😎</span>
          </p>
          <p className="mb-8 leading-relaxed">
            Si tu as un projet dont tu souhaites discuter, n'hésite plus et contacte-moi !
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-lg">
              Envoie-moi un message
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 hover:text-white rounded text-lg">
              Mon CV en 1 clic
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 hover:text-white rounded text-lg">
              Mes anciens (et actuels) travaux
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-contain rounded-t-full border-4 border-red-800"
            alt="picture of Nicolas in black&white"
            src="./cv_photo.png"
          />
        </div>
      </div>
    </section>
  );
}