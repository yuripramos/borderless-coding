/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { headerContent } from "../../translations/header";
import LogoUrl from "../../public/images/logo.svg";
import { useWindowSize } from "../../hooks/useWindowsSize";
import HamburgerMenu from "../hamburguerMenu";

export default function Header({ nav = true }: { nav?: boolean }) {
  const { locale } = useRouter();
  const size = useWindowSize();
  const width = size.width;

  const headerLocale = locale || "en";

  if (headerLocale !== "en" && headerLocale !== "pt") {
    throw new Error("Invalid language: " + headerLocale);
  }

  const { mentorship, story, login } = headerContent[headerLocale];

  const menuItems = [
    {
      label: mentorship,
      href: `/${headerLocale}/mentorship`,
    },
    {
      label: story,
      href: `/${headerLocale}/history`,
    },
    {
      label: login,
      href: "#",
    },
  ];

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
          {width && width < 345 && <HamburgerMenu menuItems={menuItems} />}
          {nav && width && width > 346 && (
            <nav className="flex grow">
              <ul className="flex grow flex-wrap items-center justify-end">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 font-medium text-gray-400 transition duration-150 ease-in-out hover:text-blue-500 lg:px-5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
