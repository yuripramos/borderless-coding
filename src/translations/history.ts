import type { Language } from "~/i18n";

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    paragraph5: string;
    paragraph6: string;
  };
};

export const historyContent: Translations = {
  en: {
    title: "Our Story",
    subtitle: "Discipline equals freedom",
    paragraph1: `This story begins with Yuri Pereira, our founder who is traveling the world
                  non-stop since 2020. In 2022, he traveled to 24 countries and lived in
                  7 different countries while working as a software engineer in
                  Silicon Valley, California. He loved sharing his travels and his
                  lifestyle on Instagram, which caught the attention of many.
                  However, he never revealed the details about his work.`,
    paragraph2: `One day in October of 2022, Yuri posted a story asking if people were
                interested in mentorship on how to land remote software
                engineering jobs without a college degree. The response was
                overwhelming, and it led to the creation of the mentorship
                program called Programmers Without Nation.`,
    paragraph3: `During his journey, Yuri realized that what he missed the most
                was a community of people who shared the same aspirations.
                Despite facing skepticism from colleagues who believed it was
                impossible for a Brazilian to achieve such success, Yuri
                remained determined.`,
    paragraph4: `In January 2023, the mentorship officially launched, along with
                the idea of borderlesscoding.com. This innovative approach connects
                developers with employers worldwide, utilizing Yuri's network to
                help mentees secure interviews and even get raises in Brazil
                until they're ready for international clients.`,
    paragraph5: `By joining the mentorship program, you gain access to Yuri's
                knowledge, experiences, and industry connections. Imagine
                embarking on your own journey to a rewarding remote career,
                supported by a vibrant community of like-minded individuals. To finally reach your contract in USD or Euros.`,
    paragraph6: `Don't let geography or background limit your aspirations. Take
                this opportunity to unlock your potential and be part of a
                global movement that redefines possibilities in the tech world.`,
  },
  pt: {
    title: "História",
    subtitle: "Disciplina = Liberdade",
    paragraph1: `Essa história começa com Yuri Pereira, o nosso fundador que está viajando pelo mundo
                 sem parar desde 2020. Em 2022, viajou por 24 países e morou em
                 7 países diferentes enquanto trabalhava como engenheiro de software no
                 Vale do Silício, Califórnia. Ele adorava compartilhar suas viagens e seu
                 lifestyle no Instagram, que chamou a atenção de muitos.
                 No entanto, ele nunca revelou os detalhes sobre seu trabalho.`,
    paragraph2: `Um dia, em outubro de 2022, Yuri postou um story perguntando se as pessoas estavam
                 interessadas em orientação sobre como conseguir um job remoto de programador sem um diploma universitário. A resposta foi
                 esmagadora, e isso levou à criação da mentoria
                 programa chamado Programadores Sem Pátria.`,
    paragraph3: `Durante sua jornada, Yuri percebeu que o que mais sentia falta
                 era uma comunidade de pessoas que compartilhavam as mesmas aspirações.
                 Apesar de enfrentar o ceticismo de colegas que acreditavam que era
                 impossível para um brasileiro alcançar tanto sucesso, Yuri
                 permaneceu determinado.`,
    paragraph4: `Em janeiro de 2023, a mentoria foi lançada oficialmente, juntamente com
                 a ideia do borderlesscoding.com. Essa abordagem inovadora conecta
                 desenvolvedores com empregadores em todo o mundo, utilizando a rede de Yuri para
                 ajudar os pupilos a conseguir entrevistas e até conseguir aumentos no Brasil
                 até que estejam prontos para clientes internacionais.`,
    paragraph5: `Ao ingressar no programa de mentoria, você ganha acesso ao networking do Yuri, experiências e conexões com a indústria. Imagine
                 embarcando em sua própria jornada para uma carreira remota gratificante,
                 apoiado por uma comunidade vibrante de indivíduos afins. Para finalmente chegar ao seu contrato em USD ou Euros.`,
    paragraph6: `Não deixe sua localização ou seu histórico limitem seus resultados. Pegue
                 esta oportunidade para liberar seu potencial e fazer parte de um
                 movimento global que redefine possibilidades no mundo tech.`,
  },
};
