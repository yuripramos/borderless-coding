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
  features6Bold?: string;
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
  features2Bold: string;
  features3: string;
  features3Start: string;
  features3BrandName: string;
  features3Continue: string;
  features4Start: string;
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
  features1Bold: string;
  features2Bold: string;
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
      mainDescription: "For devs and non-devs (yet)",
      status: "Application on June 1st (via Instagram)",
      features: "It's included",
      features1:
        "8+ lives with the Founder explaining strategies on how he went from the favelas in Rio to Silicon Valley as a programmer.",
      features2Bold: "100+ hours of study",
      features2:
        "comprising a basket of courses through which the mentee will improve more quickly.",
      features3:
        "Access to exclusive lives with psychologist and doctor in public health João de Oliveira.",
      features3Bold:
        "a professional among the best in the country who serves artistic, business, and other personalities. All to positively change your MINDSET with regard to your goals.",
      features4:
        "Annual access to the 'Programadores Sem Pátria' (Programmers Without Borders) Community, created by the Founder with the aim of fostering mutual professional growth, sharing healthy and productive insights, companionship and fraternity, mutual assistance, and the formation of professional bonds.",
      features5:
        "Access to the future Brainers platform for personal development and continuous and direct educational improvement.",
      features6Bold: "Level 3 hierarchy of networking with the Founder",
      features6:
        "receiving jobs, projects, and opportunities that will eventually be passed on.",
      features7:
        "Recently released e-book by the Founder: 'Self-Taught Mastery: The ultimate guide to learning anything'.",
    },
    privateMentorship: {
      text: "Private",
      currency: "R$",
      value: "13.000",
      period: "/year",
      mainDescription:
        "For all developers who want to accelerate the process and have a more exclusive access to my networking",
      status: "Sold out until July/2023",
      features: "Everything from starter and more",
      features1:
        "Right to 4 private 2-hour calls with the Founder, with open agenda for the mentee",
      features2Bold: "Level 2 hierarchy of networking with the Founder",
      features2:
        "Receiving jobs, projects, and opportunities that occasionally require greater responsibility and preparation",
      features3Start:
        "Right to access ALL courses and BOOKS that are released/published",
      features3: "by the accelerator",
      features3BrandName: "borderlesscoding",
      features3Continue:
        "or directly by Founder Yuri Pereira, for the next 2 years (Jun/2025)",
      features4Start: "Personal mobile number (and WhatsApp)",
      features4: "of the Founder for direct contacts",
    },
    experience: {
      text: "Experience",
      currency: "R$",
      value: "25.000",
      period: "/year",
      mainDescription:
        "An immersion that will change your life once and for all",
      status: "Closed until August/23",
      features: "Everything from private and more",
      features1Bold: "Level 1 hierarchy of networking with the Founder",
      features1:
        ", receiving jobs, projects, and opportunities with preference over the hierarchy, with the possibility of acting as a partner in projects or applying for same-level job offers in the international market",
      features2Bold:
        "7-day full immersion in Europe with the Founder, including paid accommodation and transportation for a routine of intensive work and exchange of experiences",
      features3Bold:
        "Three private virtual meetings with psychologist and doctor in public health João de Oliveira, mentor of Yuri Pereira and a professional consulted by successful artists and entrepreneurs",
    },
  },
  pt: {
    title: "E se você pudesse programar o futuro?",
    testemonial:
      "Participe da nossa Mentoria, mas primeiro veja o que alguns de nossos mentorados estão dizendo",
    findPlan: "Veja Mais",
    pricingDescription: `Você está procurando acelerar seu aprendizado e crescimento como um
                 programador? Junte-se ao nosso programa de mentoria e obtenha orientação de
                 quem já chegou aonde você quer chegar`,
    mostPopular: "Mais Popular",
    basic: {
      text: "Starter",
      currency: "R$",
      value: "6.000",
      period: "/ano",
      mainDescription: "Para devs e quem não é dev (ainda)",
      status: "Aplicação 1 de Junho (via instagram)",
      features: "Está inluso",
      features1: `8+ lives com o Founder explicando estratégias sobre como ele
                     deixou as favelas no Rio para chegar ao Vale do Silício como
                     programador. `,
      features2Bold: "100+ horas de estudos",
      features2: `compondo uma cesta de cursos pela qual o mentorado se aprimorará mais rapidamente`,
      features3: `Acesso a lives exclusivas com o psicólogo e doutor em saúde pública João de Oliveira`,
      features3Bold: `profissional dentre os melhores do país e que atende personalidades artísticas, empresariais e de outros ramos. Tudo para mudar positivamente a sua MENTALIDADE com relação aos seus objetivos`,
      features4: `Acesso anual à Comunidade “Programadores Sem Pátria”, criada pelo Founder com o objetivo de formentar o crescimento profissional mútuo, o compartilhamento de insights saudáveis e produtivos, o companheirismo e a fraternidade, a ajuda mútua e a formação de laços profissionais`,
      features5: `Acesso à futura plataforma Brainers, de desenvolvimento pessoal e melhoria educacional contínua e direta`,
      features6Bold: `Hierarquia  nível 3 de networking do Founder`,
      features6: `recebendo trabalhos, projetos e oportunidades que eventualmente serão repassadas`,
      features7: `E-book recém-lançado pelo Founder: “Sou autodidata: Guia definitivo para aprender qualquer coisa”`,
    },
    privateMentorship: {
      text: "Private",
      currency: "R$",
      value: "13.000",
      period: "/ano",
      mainDescription:
        "Para todos os devs que querem acelerar o processo e ter um acesso mais exclusivo ao meu networking",
      status: "Esgotado",
      features: "Tudo do starter e mais",
      features1: `Direito a 4 calls privadas de 2h com o Founder, com pauta livre do mentorado`,
      features2Bold: `Hierarquia nível 2 de networking do Founder, `,
      features2: `recebendo trabalhos, projetos e oportunidades que eventualmente exigem maior responsabilidade e preparação`,
      features3Start:
        "Direito ao acesso de TODOS os cursos e LIVROS que sejam lançados/publicados",
      features3: `pela aceleradora`,
      features3BrandName: `borderlesscoding`,
      features3Continue: `ou diretamente pelo Founder Yuri Pereira, pelos próximos 2 anos (jun/2025)`,
      features4Start: `Número de celular pessoal (e WhatsApp) `,
      features4: `do Founder para contatos diretos`,
    },
    experience: {
      text: "Experience",
      currency: "R$",
      value: "25.000",
      period: "/ano",
      mainDescription:
        "Uma imersão que vai mudar sua vida de uma vez por todas",
      status: "Fechado até Agosto/23",
      features: "Tudo do private e mais",
      features1Bold: `Hierarquia nível 1 de networking do Founder`,
      features1: `, recebendo trabalhos, projetos e oportunidades em preferência ante a hierarquia, com possibilidade de atuar como sócio em projetos ou candidatar-se a ofertas de trabalho de mesmo nível no mercado internacional`,
      features2Bold: `Imersão de 7 dias inteiros na Europa com o Founder, já com acomodação e passagem pagas para uma rotina de trabalho e troca de experiências intensivas`,
      features3Bold: `Três encontros virtuais privados com o psicólogo e doutor em saúde pública João de Oliveira, mentor de Yuri Pereira e profissional consultado por artistas e empresários de sucesso`,
    },
  },
};
