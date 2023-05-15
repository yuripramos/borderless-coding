/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";

import { useRouter } from "next/router";
import { homeContent } from "../translations/home";
import { useState } from "react";

export default function Resources() {
  const [category, setCategory] = useState<string>("1");

  const { locale } = useRouter();

  const homeLocale = locale || "en";

  if (homeLocale !== "en" && homeLocale !== "pt") {
    throw new Error("Invalid language: " + homeLocale);
  }

  const { resources } = homeContent[homeLocale];

  return (
    <section className="flex justify-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 font-uncut-sans">{resources.title}</h2>
          </div>
          <div>
            <div className="mb-16">
              <div className="-m-2.5 flex flex-wrap justify-center">
                <div className={`${category === "1" && "rotate-2"}`}>
                  <button
                    className={`group relative m-2.5 inline-flex rounded-full bg-gray-800 px-3 py-1.5 font-medium before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-full before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:content-[''] ${
                      category === "1"
                        ? "shadow-lg shadow-blue-500/25 before:via-gray-300"
                        : "before:via-gray-600"
                    }`}
                    onClick={() => setCategory("1")}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        className={`mr-2 h-3 w-3 shrink-0 fill-gray-400 ${
                          category === "1" && "fill-white"
                        }`}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.999 9.012a.999.999 0 0 1-.706-1.707l3.496-3.5a.998.998 0 0 1 1.413 0l2.29 2.293 2.79-2.793a.998.998 0 1 1 1.413 1.414l-3.496 3.5a.998.998 0 0 1-1.413 0l-2.29-2.293-2.79 2.793a.998.998 0 0 1-.707.293Z"
                          fillRule="nonzero"
                        />
                      </svg>
                      <span
                        className={`transition duration-150 ease-in-out ${
                          category === "1"
                            ? "text-blue-500"
                            : "text-gray-400 group-hover:text-gray-300"
                        }`}
                      >
                        {resources.feBe}
                      </span>
                    </div>
                  </button>
                </div>
                <div className={`${category === "2" && "rotate-2"}`}>
                  <button
                    className={`group relative m-2.5 inline-flex rounded-full bg-gray-800 px-3 py-1.5 font-medium before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-full before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:content-[''] ${
                      category === "2"
                        ? "shadow-lg shadow-blue-500/25 before:via-gray-300"
                        : "before:via-gray-600"
                    }`}
                    onClick={() => setCategory("2")}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        className={`mr-2 h-3 w-3 shrink-0 fill-gray-400 ${
                          category === "2" && "fill-white"
                        }`}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                          fillRule="nonzero"
                        />
                      </svg>
                      <span
                        className={`transition duration-150 ease-in-out ${
                          category === "2"
                            ? "text-blue-500"
                            : "text-gray-400 group-hover:text-gray-300"
                        }`}
                      >
                        {resources.fullstack}
                      </span>
                    </div>
                  </button>
                </div>
                <div className={`${category === "3" && "rotate-2"}`}>
                  <button
                    className={`group relative m-2.5 inline-flex rounded-full bg-gray-800 px-3 py-1.5 font-medium before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-full before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:content-[''] ${
                      category === "3"
                        ? "shadow-lg shadow-blue-500/25 before:via-gray-300"
                        : "before:via-gray-600"
                    }`}
                    onClick={() => setCategory("3")}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        className={`mr-2 h-3 w-3 shrink-0 fill-gray-400 ${
                          category === "3" && "fill-white"
                        }`}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.334 8.06a.5.5 0 0 0-.421-.237 6.023 6.023 0 0 1-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 0 0-.614-.586 6 6 0 1 0 6.832 8.529.5.5 0 0 0-.017-.485Z"
                          fillRule="nonzero"
                        />
                      </svg>
                      <span
                        className={`transition duration-150 ease-in-out ${
                          category === "3"
                            ? "text-blue-500"
                            : "text-gray-400 group-hover:text-gray-300"
                        }`}
                      >
                        {resources.devops}
                      </span>
                    </div>
                  </button>
                </div>
                <div className={`${category === "4" && "rotate-2"}`}>
                  <button
                    className={`group relative m-2.5 inline-flex rounded-full bg-gray-800 px-3 py-1.5 font-medium before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-full before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:content-[''] ${
                      category === "4"
                        ? "shadow-lg shadow-blue-500/25 before:via-gray-300"
                        : "before:via-gray-600"
                    }`}
                    onClick={() => setCategory("4")}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        className={`mr-2 h-3 w-3 shrink-0 fill-gray-400 ${
                          category === "4" && "fill-white"
                        }`}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z"
                          fillRule="nonzero"
                        />
                      </svg>
                      <span
                        className={`transition duration-150 ease-in-out ${
                          category === "4"
                            ? "text-blue-500"
                            : "text-gray-400 group-hover:text-gray-300"
                        }`}
                      >
                        {resources.de}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className=" mx-auto grid  hidden max-w-sm items-start gap-12 sm:max-w-none sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:grid-cols-4">
              <a
                className={`group relative block p-6 before:absolute before:inset-0 before:-z-10 before:bg-gray-800 before:content-[''] `}
                href="#0"
              >
                <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-t from-gray-800 to-gray-700 shadow-lg before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-full before:bg-gradient-to-t before:from-gray-800 before:via-gray-600 before:to-gray-800 before:content-['']">
                  <svg
                    className="fill-blue-500 transition duration-150 ease-in-out group-hover:fill-gray-200"
                    width="24"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.317 1.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.565 18.565 0 0 0-5.487 0C9.095.88 8.852.406 8.641.037A.077.077 0 0 0 8.562 0c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 6.093-.32 10.555.099 14.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .078.009c.12.097.246.195.373.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.964 19.964 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.839-9.52-3.549-13.442a.06.06 0 0 0-.031-.028ZM8.02 12.278c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38Zm7.975 0c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38Z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl font-semibold text-gray-100">
                  {resources.discord}
                </div>
              </a>
              <a
                className={`group relative block p-6 before:absolute before:inset-0 before:-z-10 before:bg-gray-800 before:content-['']
                `}
                href="#0"
              >
                <div className="relative mb-3 flex h-12 w-12  items-center justify-center rounded-full bg-gradient-to-t from-gray-800 to-gray-700 shadow-lg before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-full before:bg-gradient-to-t before:from-gray-800 before:via-gray-600 before:to-gray-800 before:content-['']">
                  <svg
                    className="translate-x-1 fill-blue-500 transition duration-150 ease-in-out group-hover:fill-gray-200"
                    width="32"
                    height="26"
                    viewBox="0 0 256 190"
                    enableBackground="new 0 0 256 190"
                  >
                    <path
                      d="M48.12,27.903C48.12,13.564,59.592,2,74.023,2c14.339,0,25.903,11.564,25.903,25.903
	C99.834,42.335,88.27,53.806,74.023,53.806C59.684,53.806,48.12,42.242,48.12,27.903z M191,139h-47V97c0-20.461-17.881-37-38-37H43
	C20.912,60,1.99,79.14,2,98v77c-0.026,8.533,6.001,12.989,12,13c6.014,0.011,12-4.445,12-13v-75h8v88h78v-88h8l0.081,50.37
	c-0.053,8.729,5.342,12.446,10.919,12.63h60C207.363,163,207.363,139,191,139z M254,79.761c0,26.94-21.918,48.858-48.858,48.858
	s-48.858-21.918-48.858-48.858c0-25.024,18.912-45.711,43.193-48.528v-6.184h-6.755V13.34h25.667v11.708h-7.205v6.228
	c5.431,0.673,10.588,2.24,15.319,4.55l4.113-6.524l9.904,6.243l-4.186,6.639C247.121,51.154,254,64.669,254,79.761z M242.301,79.761
	c0-20.489-16.669-37.159-37.159-37.159s-37.159,16.669-37.159,37.159s16.669,37.159,37.159,37.159S242.301,100.25,242.301,79.761z
	 M205.331,49.365v30.17h30.17C235.322,62.93,221.959,49.444,205.331,49.365z"
                    />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl font-semibold text-gray-100">
                  {resources.coaching}
                </div>
              </a>
              <a
                className={`group relative block p-6 before:absolute before:inset-0 before:-z-10 before:bg-gray-800 before:content-['']`}
                href="#0"
              >
                <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-t from-gray-800 to-gray-700 shadow-lg before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-full before:bg-gradient-to-t before:from-gray-800 before:via-gray-600 before:to-gray-800 before:content-['']">
                  <svg
                    className="fill-blue-500 transition duration-150 ease-in-out group-hover:fill-gray-200"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl font-semibold text-gray-100">
                  {resources.github}
                </div>
              </a>
              <a
                className={`group relative block p-6 before:absolute before:inset-0 before:-z-10 before:bg-gray-800 before:content-['']`}
                href="#0"
              >
                <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-t from-gray-800 to-gray-700 shadow-lg before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-full before:bg-gradient-to-t before:from-gray-800 before:via-gray-600 before:to-gray-800 before:content-['']">
                  <svg
                    className="fill-blue-500 transition duration-150 ease-in-out group-hover:fill-gray-200"
                    width="22"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.083 0H.917C.41 0 0 .448 0 1v16c0 .552.41 1 .917 1h20.166c.507 0 .917-.448.917-1V1c0-.552-.41-1-.917-1ZM9 13V5l6 4-6 4Z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl font-semibold text-gray-100">
                  {resources.tutorials}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
