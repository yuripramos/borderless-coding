/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LogoUrl from "../../public/images/logo.svg";
import { footerContent } from "../../translations/footer";

export default function Footer() {
  const { locale } = useRouter();

  const footerLocale = locale || "en";

  if (footerLocale !== "en" && footerLocale !== "pt") {
    throw new Error("Invalid language: " + footerLocale);
  }

  const {
    terms,
    policy,
    products,
    mentorship,
    courses,
    coaching,
    company,
    about,
    story,
  } = footerContent[footerLocale];

  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 py-8 sm:grid-cols-12 md:py-12">
          <div className="sm:col-span-12 lg:col-span-8 lg:max-w-xs">
            <div className="mb-2">
              <Image
                src={LogoUrl}
                className="h-7 w-7"
                priority
                alt="borderless coding logo"
              />
            </div>
            <div className="text-sm text-gray-600">
              <a
                className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-500"
                href="#0"
              >
                {terms} &nbsp;
              </a>
              <a
                className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-500"
                href="#0"
              >
                {policy}
              </a>
            </div>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 text-xs font-semibold uppercase text-gray-200">
              {products}
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="/mentorship"
                >
                  {mentorship}
                </Link>
              </li>
              <li>
                <a
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  {courses}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="#0"
                >
                  {coaching}
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 text-xs font-semibold uppercase text-gray-200">
              {company}
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="/about"
                >
                  {about}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-500"
                  href="/history"
                >
                  {story}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
