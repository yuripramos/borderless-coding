import type { Language } from "~/i18n";

type BasicPlan = {
  text: string;
  currency: string;
  value: string;
  period: string;
  mainDescription: string;
  status: string;
  features: string;
  features1: string;
  features2Bold: string;
  features2: string;
  features3: string;
  features3Bold: string;
  features3Ending?: string;
  features4: string;
  features5?: string;
  features6?: string;
  features7?: string;
};

type PrivatePlan = {
  text: string;
  currency: string;
  value: string;
  period: string;
  mainDescription: string;
  status: string;
  features: string;
  features1: string;
  features2: string;
  features3: string;
  features4: string;
};

type ExperiencePlan = {
  text: string;
  currency: string;
  value: string;
  period: string;
  mainDescription: string;
  status: string;
  features: string;
  features1: string;
  features2: string;
  features2Bold: string;
  features2Ending: string;
  features3: string;
  features3Bold: string;
};

type Translations = {
  [key in Language]: {
    title: string;
    testemonial: string;
    findPlan: string;
    pricingDescription: string;
    mostPopular: string;
    basic: BasicPlan;
    privateMentorship: PrivatePlan;
    experience: ExperiencePlan;
  };
};

export const mentorshipContent: Translations = {
  en: {
    title: "Become a Mentee",
    testemonial:
      "Join our Mentorship Program, but first see what some of our mentees are saying",
    findPlan: "Find a plan that's right for you",
    pricingDescription: `Are you looking to accelerate your learning and growth as a
                programmer? Join our mentorship program and get guidance from
                industry experts.`,
    mostPopular: "Most Popular",
    basic: {
      text: "Basic",
      currency: "R$",
      value: "6000",
      period: "/year",
      mainDescription: "for developers and non-developers",
      status: "Open Soon",
      features: "Features include",
      features1: `8+ lives with the Founder explaining strategies on how he
                    left the favelas in Brazil to reach Silicon Valley as a
                    programmer`,
      features2Bold: "100+ hours of content",
      features2: `to craft your skills as a programmer`,
      features3: `Lives with Dr. Joao Oliveira`,
      features3Bold: `one of the best psychologists in Brazil`,
      features4: `Discord Community with other mentees for questions,
                    networking and emotional support`,
      features5: `The Founder's eBook Self-Taught Mastery: The Ultimate Guide
                    to Learning Anything`,
      features6: `The Founder networking for future businesses and job offers`,
      features7: `Platform Brainers to help you dissect your goals according
                    to your routine using AI (in development)`,
    },
    privateMentorship: {
      text: "Private",
      currency: "R$",
      value: "13.000",
      period: "/year",
      mainDescription: "For any developer who wants to speed up things",
      status: "Sold-out until July/2023",
      features: "All from Basic plus",
      features1: `4 private calls of 1h30 with the Founder, specifically for
                    your needs`,
      features2: `Priority over basic members on job offers and business
                    partnerships`,
      features3: `All the future books launches and courses for free for the
                    next 2 years`,
      features4: `Personal Founder's Cellphone number`,
    },
    experience: {
      text: "Experience",
      currency: "R$",
      value: "25.000",
      period: "/year",
      mainDescription: "Immersion that will abruptally change your life",
      status: "Closed until August/23",
      features: `All from Private plus`,
      features1: `Priority over basic members on job offers and business
                    partnerships`,
      features2: `Immersion of`,
      features2Bold: `1 week in Europe  `,
      features2Ending: `accomodation and air
                    tickets covered`,
      features3: ` with Dr. Joao Oliveira, one of the best
                    psychologists in Brazil`,
      features3Bold: `3 private calls `,
    },
  },
  pt: {
    title: "Se torne um mentorado",
    testemonial:
      "Participe do nossa Mentoria, mas primeiro veja o que alguns de nossos mentorados estão dizendo",
    findPlan: "Veja Mais",
    pricingDescription: `Você está procurando acelerar seu aprendizado e crescimento como um
                 programador? Junte-se ao nosso programa de mentoria e obtenha orientação de
                 quem já chegou aonde você quer chegar`,
    mostPopular: "Mais Popular",
    basic: {
      text: "Básico",
      currency: "R$",
      value: "6.000",
      period: "/ano",
      mainDescription: "Para devs e quem não é dev (ainda)",
      status: "Incrições 20 de Maio (via instagram)",
      features: "Está inluso",
      features1: `8+ lives com o Founder explicando estratégias sobre como ele
                     deixou as favelas no Brasil para chegar ao Vale do Silício como
                     programador`,
      features2Bold: "100+ horas de estudos",
      features2: `para melhorar suas habilidades como programador`,
      features3: `Lives com o Dr. Joao Oliveira`,
      features3Bold: `um dos melhores psicólogos do Brasil`,
      features4: `Comunidade no Discord com outros mentorados para perguntas,
                     networking e apoio emocional`,
      features5: `O eBook do Founder "Sou autodidata: o guia definitivo
                     aprender qualquer coisa"`,
      features6: `Networking do fundador para futuros negócios e ofertas de emprego`,
      features7: `Plataforma Brainers para ajudá-lo a dissecar seus objetivos de acordo
                     à sua rotina usando IA (em desenvolvimento)`,
    },
    privateMentorship: {
      text: "Privado",
      currency: "R$",
      value: "13.000",
      period: "/ano",
      mainDescription: "Para todos os devs que querem acelerar o processo",
      status: "Esgotado",
      features: "Tudo do básico e mais",
      features1: `4 calls privadas de 1h30 com o Founder, específicamente para a sua necessidade`,
      features2: `Prioridade sobre o básico para ofertas de trabalho e negócios`,
      features3: `Todos os futuros lançamentos de livros e cursos para os próximos 2 anos`,
      features4: `WhatsApp Pessoal do Founder`,
    },
    experience: {
      text: "Experience",
      currency: "R$",
      value: "25.000",
      period: "/ano",
      mainDescription:
        "Uma imersão que vai mudar sua vida de uma vez por todas",
      status: "Fechado até Agosto/23",
      features: "Tudo do Privado e mais",
      features1: `Prioridade sobre o privado para ofertas de trabalho e negócios`,
      features2: `Imersão de`,
      features2Bold: `1 Semana na europa `,
      features2Ending: `acomodação e passagem aérea inclusa`,
      features3Bold: `3 ligações privadas `,
      features3: `com Dr. João Oliveira, um dos melhores psicólogos do Brasil`,
    },
  },
};
