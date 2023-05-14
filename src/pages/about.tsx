/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useRouter } from "next/router";
import { aboutContent } from "../translations/about";
import RootLayout from "./layout";

export default function MentorshipIntro() {
  const { locale } = useRouter();

  const aboutLocale = locale || "en";

  if (aboutLocale !== "en" && aboutLocale !== "pt") {
    throw new Error("Invalid language: " + aboutLocale);
  }

  const { title, subtitle, core, values1, values2, values3 } =
    aboutContent[aboutLocale];

  return (
    <RootLayout>
      <section className="relative overflow-hidden bg-cover bg-center">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            <div className="mx-auto max-w-xl text-center  md:max-w-[640px]">
              <h1
                className="h1 font-uncut-sans mb-6 text-center"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                {title}
              </h1>
              <p
                className="mb-10 text-2xl text-gray-400"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                {subtitle}
              </p>
            </div>
            <div className="m-10 p-10 text-lg">
              <p className="m-2 p-2">{core}</p>
              <ul className="list-inside list-disc">
                <li className="mb-2">{values1}</li>
                <li className="mb-2">{values2}</li>
                <li className="mb-2">{values3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
