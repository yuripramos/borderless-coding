/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useRouter } from "next/router";
import { historyContent } from "../translations/history";
import RootLayout from "./layout";
import Image from "next/image";
import Laptop1 from "../public/images/laptop_lifestyle.jpg";
import Laptop2 from "../public/images/laptop_lifestyle2.jpg";
import Laptop3 from "../public/images/laptop_lifestyle3.jpg";
import Laptop4 from "../public/images/laptop_lifestyle4.jpg";

export default function MentorshipIntro() {
  const { locale } = useRouter();

  const historyLocale = locale || "en";

  if (historyLocale !== "en" && historyLocale !== "pt") {
    throw new Error("Invalid language: " + historyLocale);
  }

  const {
    title,
    subtitle,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6,
  } = historyContent[historyLocale];

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
                className="mb-10 text-xl text-gray-400"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                {subtitle}
              </p>
            </div>
            <div className=" text-lg">
              <p className="m-2 p-2">{paragraph1}</p>
              <p className="m-2 p-2">{paragraph2}</p>
              <p className="m-2 p-2">{paragraph3}</p>
              <p className="m-2 p-2">{paragraph4}</p>
              <p className="m-2 p-2">{paragraph5}</p>
              <p className="m-2 p-2">{paragraph6}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              <div className="col-span-1">
                <Image src={Laptop1} alt="laptop 1" width={300} height={200} />
              </div>
              <div className="col-span-1">
                <Image src={Laptop2} alt="Laptop 2" width={300} height={200} />
              </div>
              <div className="col-span-1">
                <Image src={Laptop3} alt="Laptop 3" width={300} height={200} />
              </div>
              <div className="col-span-1">
                <Image src={Laptop4} alt="Laptop 4" width={300} height={200} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
