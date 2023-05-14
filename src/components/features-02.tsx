/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import { useRouter } from "next/router";
import { homeContent } from "../translations/home";
import Illustration from "../public/images/features-illustration.svg";
import FeaturesImage from "../public/images/features-02.png";

export default function Features02() {
  const { locale } = useRouter();

  const homeLocale = locale || "en";

  if (homeLocale !== "en" && homeLocale !== "pt") {
    throw new Error("Invalid language: " + homeLocale);
  }

  const {
    textFeatures7,
    textFeatures8,
    textFeatures9,
    textFeatures10,
    textFeatures11,
    textFeatures12,
    textFeatures13,
  } = homeContent[homeLocale];

  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 -z-10 h-[10rem] bg-gradient-to-b from-gray-800 to-gray-900 opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 -z-10 ml-[390px]"
        aria-hidden="true"
      >
        <Image src={Illustration} className="max-w-none" alt="Illustration" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">{textFeatures7}</h2>
            <div className="mx-auto max-w-2xl">
              <p className="text-xl text-gray-400">{textFeatures8}</p>
            </div>
          </div>
          <div className="xl:space-x-18 mx-auto flex max-w-xl flex-col space-y-8 space-y-reverse md:max-w-none md:flex-row md:items-center md:space-x-8 md:space-y-0 lg:space-x-16">
            <div
              className="order-1 md:order-none md:w-7/12 lg:w-1/2"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="text-center md:text-left">
                <h3 className="h3 font-uncut-sans mb-4 text-4xl">
                  {textFeatures9}
                </h3>
                <p className="mb-6 text-xl text-gray-400">{textFeatures10}</p>
                <ul className="inline-flex flex-col space-y-3 text-lg text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{textFeatures11}</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{textFeatures12}</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{textFeatures13}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-5/12 lg:w-1/2" data-aos="zoom-out">
              <Image
                className="mx-auto md:max-w-none"
                src={FeaturesImage}
                width={540}
                height={581}
                alt="Features"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
