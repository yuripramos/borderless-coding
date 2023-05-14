/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from "next/router";
import { homeContent } from "../translations/home";
import Image from "next/image";
import Illustration from "../public/images/cta-illustration.svg";

export default function Cta() {
  const { locale } = useRouter();

  const homeLocale = locale || "en";

  if (homeLocale !== "en" && homeLocale !== "pt") {
    throw new Error("Invalid language: " + homeLocale);
  }

  const { cta } = homeContent[homeLocale];
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded bg-gradient-to-tr from-blue-600 to-purple-500 px-8 py-10 md:px-12 md:py-16"
          data-aos="zoom-out"
        >
          <div
            className="absolute right-0 top-1/2 -z-10 mt-8 hidden -translate-y-1/2 lg:block"
            aria-hidden="true"
          >
            <Image
              src={Illustration}
              className="max-w-none"
              alt="Illustration"
            />
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-6 text-center lg:mb-0 lg:mr-16 lg:text-left">
              <h3 className="font-uncut-sans mb-2 text-4xl font-bold">
                {cta.getStarted}
              </h3>
              <p className="text-blue-200">{cta.subtitle}</p>
            </div>
            <div className="shrink-0">
              <a
                className="btn-sm group pointer-events-none w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white opacity-50 shadow-lg hover:to-blue-500"
                href="#0"
              >
                {cta.start}
                <span className="ml-1 tracking-normal text-blue-200 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                  -&gt;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
