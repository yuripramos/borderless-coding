/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Link from "next/link";
import { useRouter } from "next/router";
import { heroContent } from "../translations/hero";

export default function Hero() {
  const { locale } = useRouter();

  const heroLocale = locale || "en";

  if (heroLocale !== "en" && heroLocale !== "pt") {
    throw new Error("Invalid language: " + heroLocale);
  }

  const { title, impactSpanTitle, subTitle, newsHeadline, learnMore } =
    heroContent[heroLocale];

  return (
    <section className="hero-bg relative overflow-hidden bg-cover bg-center">
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-[10rem] bg-gradient-to-t from-gray-800 to-gray-900 opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2"
        aria-hidden="true"
      ></div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-xl text-center md:mx-0 md:max-w-[640px] md:text-left">
            <div data-aos="zoom-out">
              <div className="relative mb-6 inline-block rounded-full bg-gray-800 px-4 py-1 text-sm text-gray-300 before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-full before:bg-gradient-to-t before:from-gray-800 before:via-gray-600 before:to-gray-800 before:content-['']">
                <div className="text-gray-400">
                  {newsHeadline}.{" "}
                  <Link
                    className="group inline-flex items-center font-medium text-blue-500 transition duration-150 ease-in-out"
                    href="/mentorship"
                  >
                    {learnMore}{" "}
                    <span className="ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <h1
              className="h1 font-uncut-sans mb-6"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              {title}
              <em className="font-italic"> {impactSpanTitle}</em>
            </h1>
            <p
              className="mb-10 text-xl text-gray-400"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
