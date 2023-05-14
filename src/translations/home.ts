import type { Language } from "~/i18n";

type Translations = {
  [key in Language]: {
    pressTitle: string;
    featuresTitle: string;
    textFeatures1: string;
    textFeatures2: string;
    textFeatures3: string;
    textFeatures4: string;
    textFeatures5: string;
    textFeatures6: string;
    textFeatures7: string;
    textFeatures8: string;
    textFeatures9: string;
    textFeatures10: string;
    textFeatures11: string;
    textFeatures12: string;
    textFeatures13: string;
    resources: {
      title: string;
      feBe: string;
      fullstack: string;
      devops: string;
      de: string;
      discord: string;
      coaching: string;
      github: string;
      tutorials: string;
    };
    cta: {
      getStarted: string;
      subtitle: string;
      start: string;
    };
  };
};

export const homeContent: Translations = {
  en: {
    pressTitle: ` Experience our proven track record with a portfolio of successful
        collaborations with top companies`,
    featuresTitle: `Focus on solving bigger problems`,
    textFeatures1: `Expertise Across Industries`,
    textFeatures2: `Our team consists of seasoned professionals with deep domain
                knowledge across various industries. This enables us to
                understand your specific needs and design software that helps
                you achieve your business goals effectively.`,
    textFeatures3: `Scalable Solutions`,
    textFeatures4: `We offer software solutions that are designed to scale and
                evolve with your business, ensuring that you're always at the
                forefront of innovation.`,
    textFeatures5: `Customer-Centric Approach`,
    textFeatures6: `We believe in putting our clients at the center of everything we
                do. Our software solutions are not just technically sound, but
                also user-friendly and designed to deliver the best customer
                experience.`,
    textFeatures7: "Engineer essentials, not extravagance",
    textFeatures8:
      "because impactful innovation stems from substance, not show",
    textFeatures9: "Standardized dev environments",
    textFeatures10: `Default Developer Experience for every project, making easy to
                  grasp new projects or change projects easily`,
    textFeatures11: `100% focused on the power of GitHub`,
    textFeatures12: `Objectives and goal setting`,
    textFeatures13: `Feedback Often`,
    resources: {
      title: `Helping you do your job better, no matter what your role is`,
      feBe: `For Front/Back Devs`,
      fullstack: `For Full-Stack Devs`,
      devops: `QA/SRE`,
      de: `For Data Engineers`,
      discord: `Discord`,
      coaching: `Coaching`,
      github: `Github`,
      tutorials: `Tutorials`,
    },
    cta: {
      getStarted: "Get started with Borderless Coding",
      subtitle: "It only takes a few minutes to get started. Available soon.",
      start: "Start Now",
    },
  },
  pt: {
    pressTitle: ` um portfólio de sucesso
         de colaborações com as principais empresas`,
    featuresTitle: `Foco em resolver os maiores problemas`,
    textFeatures1: `Excelência dentro de várias Indústrias`,
    textFeatures2: `Nossa equipe é formada por profissionais experientes com profundo domínio
                 conhecimento em vários setores. Isso nos permite
                 entender suas necessidades específicas e projetar um software que ajuda
                 você atingir seus objetivos de negócios de forma eficaz.`,
    textFeatures3: `Soluções Escaláveis`,
    textFeatures4: `Oferecemos soluções de software projetadas para dimensionar e
                 evoluir com o seu negócio, garantindo que você esteja sempre na
                 vanguarda da inovação.`,
    textFeatures5: `Abordagem Centrada no Cliente`,
    textFeatures6: `Acreditamos em colocar nossos clientes no centro de tudo o que
                 fazer. Nossas soluções de software não são apenas tecnicamente sólidas, mas
                 também fácil de usar e projetado para oferecer o melhor cliente
                 experiência.`,
    textFeatures7: "Foco em resultado, não extravagância",
    textFeatures8:
      "Porque a inovação impactante decorre de resultado, não exibicionismo",
    textFeatures9: "Ambientes de dev padronizados",
    textFeatures10: `Experiência padrão do desenvolvedor para cada projeto, facilitando a
                   compreender novos projetos ou alterar projetos facilmente`,
    textFeatures11: `100% focado no poder do GitHub`,
    textFeatures12: `Objetivos e estabelecimento de metas`,
    textFeatures13: `Feedback Frequente`,
    resources: {
      title: `Ajudando você a fazer um trabalho melhor, independente do papel`,
      feBe: `Para Front/Back Devs`,
      fullstack: `Para Full-Stack Devs`,
      devops: `QA/SRE`,
      de: `Para Data Engineers`,
      discord: `Discord`,
      coaching: `Coaching`,
      github: `Github`,
      tutorials: `Tutoriais`,
    },
    cta: {
      getStarted: "Comece hoje na Borderless Coding",
      subtitle: "Somente alguns minutos para iniciar. Em breve",
      start: "Comece Agora",
    },
  },
};
