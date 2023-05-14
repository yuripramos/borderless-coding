/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useRouter } from "next/router";
import Image from "next/image";
import testemonial1 from "../public/images/depoimento_1.png";
import testemonial2 from "../public/images/depoimento_2.png";
import testemonial3 from "../public/images/depoimento_3.png";
import { mentorshipContent } from "../translations/mentorship";

export default function MentorshipIntro() {
  const { locale } = useRouter();

  const mentorshipLocale = locale || "en";

  if (mentorshipLocale !== "en" && mentorshipLocale !== "pt") {
    throw new Error("Invalid language: " + mentorshipLocale);
  }

  const { title, testemonial } = mentorshipContent[mentorshipLocale];

  return (
    <section className="relative overflow-hidden bg-cover bg-center">
      <div
        className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2"
        aria-hidden="true"
      ></div>
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
              className="mb-10 text-xl text-gray-400"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              {testemonial}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
              <div className="rounded-md border border-gray-400">
                <Image src={testemonial1} alt="testemonial1" />
              </div>
            </div>
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
              <div className="rounded-md border border-gray-400">
                <Image src={testemonial2} alt="testemonial2" />
              </div>
            </div>
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
              <div className="rounded-md border-2 border-gray-400">
                <Image src={testemonial3} alt="testemonial3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
