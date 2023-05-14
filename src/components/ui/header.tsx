/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { headerContent } from "../../translations/header";
import LogoUrl from "../../public/images/logo.svg";

export default function Header({ nav = true }: { nav?: boolean }) {
  const { locale } = useRouter();

  const headerLocale = locale || "en";

  if (headerLocale !== "en" && headerLocale !== "pt") {
    throw new Error("Invalid language: " + headerLocale);
  }

  const { mentorship, story, login } = headerContent[headerLocale];
  return (
    <header className="absolute z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="mr-4 shrink-0">
            <Link className="block" href="/" aria-label="Cruip">
              <Image
                src={LogoUrl}
                className="h-10 w-10"
                priority
                alt="borderless coding logo"
              />
            </Link>
          </div>
          {nav && (
            <nav className="flex grow">
              <ul className="flex grow flex-wrap items-center justify-end">
                <li>
                  <Link
                    className="flex items-center px-3 py-2 font-medium text-gray-400 transition duration-150 ease-in-out hover:text-blue-500 lg:px-5"
                    href="/mentorship"
                  >
                    {mentorship}
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center px-3 py-2 font-medium text-gray-400 transition duration-150 ease-in-out hover:text-blue-500 lg:px-5"
                    href="/history"
                  >
                    {story}
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn group w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white shadow-lg hover:to-blue-500"
                    href="#"
                  >
                    {login}
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
