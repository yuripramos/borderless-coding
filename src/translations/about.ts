import type { Language } from "~/i18n";

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    core: string;
    values1: string;
    values2: string;
    values3: string;
  };
};

export const aboutContent: Translations = {
  en: {
    title: "About us",
    subtitle: "Discipline equals freedom",
    core: `Our three core values as a tech accelerator business, with
                developers spread out across the globe, are simple:`,
    values1: `Freedom: Be wherever you want to be, as long as you are
                  disciplined enough to do your job.`,
    values2: `Health: Your well-being should never come second to work.`,
    values3: `Prosperity: Making money is essential for living your best
                  life. It's that simple.`,
  },
  pt: {
    title: "Sobre Nós",
    subtitle: "Disciplina = Liberdade",
    core: `Nossos três valores principais como uma aceleradora de tech, com
                 desenvolvedores espalhados pelo mundo, são simples:`,
    values1: `Liberdade: Esteja onde quiser, desde que esteja
                   disciplinado o suficiente para fazer o seu trabalho.`,
    values2: `Saúde: Seu bem-estar nunca deve vir em segundo lugar, depois do trabalho.`,
    values3: `Prosperidade: Ganhar dinheiro é essencial para viver a sua melhor
     vida. É simples assim.`,
  },
};
