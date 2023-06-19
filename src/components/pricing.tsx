/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import { mentorshipContent } from "../translations/mentorship";

export default function Pricing() {
  const { locale } = useRouter();

  const mentorshipLocale = locale || "en";

  if (mentorshipLocale !== "en" && mentorshipLocale !== "pt") {
    throw new Error("Invalid language: " + mentorshipLocale);
  }

  const {
    findPlan,
    pricingDescription,
    mostPopular,
    basic,
    privateMentorship,
    experience,
  } = mentorshipContent[mentorshipLocale];

  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className=" border-gray-800 py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">{findPlan}</h2>
            <div className="mx-auto max-w-2xl">
              <p className="text-xl text-gray-400">{pricingDescription}</p>
            </div>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 pt-4 lg:max-w-none lg:grid-cols-3 lg:gap-6">
            <div className="relative flex h-full flex-col bg-gray-800 p-6">
              <div className="absolute right-0 top-0 -mt-4 mr-6">
                <div className="inline-flex items-center rounded-full bg-emerald-200 px-3 py-1 text-sm font-semibold text-emerald-600">
                  <svg
                    className="mr-2 fill-emerald-500"
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.315.068a.5.5 0 0 0-.745.347A7.31 7.31 0 0 1 3.182 3.6a7.924 7.924 0 0 1-.8.83A6.081 6.081 0 0 0 0 9.035a5.642 5.642 0 0 0 2.865 4.9.5.5 0 0 0 .746-.4 2.267 2.267 0 0 1 .912-1.67 4.067 4.067 0 0 0 1.316-1.4 4.662 4.662 0 0 1 1.819 3.1.5.5 0 0 0 .742.371c1.767-.999 2.86-2.87 2.865-4.9-.001-3.589-2.058-6.688-5.95-8.968Z" />
                  </svg>
                  <span>{mostPopular}</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="mb-1 text-lg font-semibold">{basic.text}</div>
                <div className="font-uncut-sans mb-2 inline-flex items-baseline">
                  <span className="text-3xl font-medium text-gray-400">
                    {basic.currency}
                  </span>
                  <span className="text-3xl font-bold leading-7">
                    {basic.value}
                  </span>
                  <span className="font-medium text-gray-400">
                    {basic.period}
                  </span>
                </div>
                <div className="mb-6 text-gray-400">
                  {basic.mainDescription}
                </div>
                <a
                  className="btn-sm group w-full bg-gradient-to-t from-red-600 to-red-400 text-white shadow-lg hover:to-red-500"
                  href="#0"
                >
                  {basic.status}
                </a>
              </div>
              <div className="mb-4 font-medium">{basic.features}:</div>
              <ul className="grow space-y-3 text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{basic.features1}</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    <b>{basic.features2Bold}</b> {basic.features2}
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    {basic.features3}, <b>{basic.features3Bold}</b>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{basic.features4}</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{basic.features5}</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    <b>{basic.features6Bold}</b>&nbsp;
                    {basic.features6}
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>

                  <span>
                    <b>BÔNUS: </b>
                    {basic.features7}
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative flex h-full flex-col bg-gray-800 p-6">
              <div className="mb-6">
                <div className="mb-1 text-lg font-semibold">
                  {privateMentorship.text}
                </div>
                <div className="font-uncut-sans mb-2 inline-flex items-baseline">
                  <span className="text-3xl font-medium text-gray-400">
                    {privateMentorship.currency}
                  </span>
                  <span className="text-3xl font-bold leading-7">
                    {privateMentorship.value}
                  </span>
                  <span className="font-medium text-gray-400">
                    {privateMentorship.period}
                  </span>
                </div>
                <div className="mb-6 text-gray-400">
                  {privateMentorship.mainDescription}
                </div>
                <a
                  className="btn-sm group w-full bg-gradient-to-t from-red-600 to-red-400 text-white shadow-lg hover:to-red-500"
                  href="#0"
                >
                  {privateMentorship.status}
                </a>
              </div>
              <div className="mb-4 font-medium">
                {privateMentorship.features}:
              </div>
              <ul className="grow space-y-3 text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{privateMentorship.features1}</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    <b>{privateMentorship.features2Bold}</b>
                    {privateMentorship.features2}
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    <b>{privateMentorship.features3Start}</b>
                    &nbsp;{privateMentorship.features3}
                    &nbsp;<b>{privateMentorship.features3BrandName}</b>&nbsp;
                    {privateMentorship.features3Continue}
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    <b>{privateMentorship.features4Start}</b>
                    {privateMentorship.features4}
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative flex h-full flex-col bg-gray-800 p-6">
              <div className="mb-6">
                <div className="mb-1 text-lg font-semibold">
                  {experience.text}
                </div>
                <div className="font-uncut-sans mb-2 inline-flex items-baseline">
                  <span className="text-3xl font-medium text-gray-400">
                    {experience.currency}
                  </span>
                  <span className="text-3xl font-bold leading-7">
                    {experience.value}
                  </span>
                  <span className="font-medium text-gray-400">
                    {experience.period}
                  </span>
                </div>
                <div className="mb-6 text-gray-400">
                  {experience.mainDescription}
                </div>
                <a
                  className="btn-sm group w-full bg-gradient-to-t from-red-600 to-red-400 text-white shadow-lg hover:to-red-500"
                  href="#0"
                >
                  {experience.status}
                </a>
              </div>
              <div className="mb-4 font-medium">{experience.features}:</div>
              <ul className="grow space-y-3 text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    <b>{experience.features1Bold}</b>
                    {experience.features1}
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    <b>{experience.features2Bold}</b>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    <b>{experience.features3Bold}</b>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
