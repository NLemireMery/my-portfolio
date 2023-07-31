import React from "react";
import { PencilIcon, NewspaperIcon } from "@heroicons/react/solid";
import { articles } from "../data";

export default function Articles() {
  return (
    <section id="articles">
      <div className="container px-5 py-10 mx-auto text-center">
        <NewspaperIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Articles &amp; Critiques
        </h1>
        <div className="flex flex-wrap m-4">
          {articles.map((article) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <PencilIcon className="block w-8 text-gray-500 mb-4" />
                <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-5">
                  <a
                    target="_blank"
                    href={article.link}>
                    {article.title}
                  </a>
                </h2>
                <p className="leading-relaxed mb-6">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}