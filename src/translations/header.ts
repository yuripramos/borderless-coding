import type { Language } from "~/i18n";

type Translations = {
  [key in Language]: {
    mentorship: string;
    about: string;
    login: string;
    story: string;
  };
};

export const headerContent: Translations = {
  en: {
    mentorship: "Mentorship",
    about: "About",
    login: `Login`,
    story: "Our Story",
  },
  pt: {
    mentorship: "Mentoria",
    about: "Sobre",
    login: `Login`,
    story: "História",
  },
};
