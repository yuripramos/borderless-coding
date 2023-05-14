import type { Language } from "~/i18n";

type Translations = {
  [key in Language]: {
    title: string;
    impactSpanTitle: string;
    subTitle: string;
    newsHeadline: string;
    learnMore: string;
  };
};

export const heroContent: Translations = {
  en: {
    title: "Unifying the world through",
    impactSpanTitle: " Code",
    subTitle:
      "More than just a company for developers, an accelerator to develop at their best",
    newsHeadline: "New Types of mentorship",
    learnMore: "Learn More",
  },
  pt: {
    title: "Unificando o mundo através de ",
    impactSpanTitle: "Código",
    subTitle:
      "Mais que somente uma empresa para devs, uma aceleradora para desenvolve-los.",
    newsHeadline: "Novas Mentorias",
    learnMore: "Veja Mais",
  },
};
