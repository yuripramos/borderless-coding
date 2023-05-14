import type { Language } from "~/i18n";

type Translations = {
  [key in Language]: {
    terms: string;
    policy: string;
    products: string;
    mentorship: string;
    courses: string;
    coaching: string;
    company: string;
    about: string;
    story: string;
  };
};

export const footerContent: Translations = {
  en: {
    terms: "Terms",
    policy: "Privacy Policy",
    products: "Products",
    mentorship: "Mentorship",
    courses: "Courses (soon)",
    coaching: "Coaching (soon)",
    company: "Company",
    about: "About Us",
    story: "Our Story",
  },
  pt: {
    terms: "Termos",
    policy: "Política de Privacidade",
    products: "Produtos",
    mentorship: "Mentoria",
    courses: "Cursos (em breve)",
    coaching: "Coaching (em breve)",
    company: "Empresa",
    about: "Sobre Nós",
    story: "História",
  },
};
