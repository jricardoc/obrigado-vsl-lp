import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/swiper-bundle.css";

import {
  LearningContainer,
  SectionHeader,
  SectionLabel,
  Title,
  SwiperWrapper,
  LearningCard,
  CardNumber,
  CardTitle,
  CardDescription,
} from "./styles";

const learningItems = [
  {
    id: "1",
    title: "O que é CopyTrade?",
    description:
      "Uma forma de investir em que as operações feitas por um trader (ou vários) são automaticamente replicadas na sua conta.",
  },
  {
    id: "2",
    title: "Como funciona o CopyTrade?",
    description:
      "Você conecta sua conta à de um trader experiente, e tudo que ele faz (entrada, saída, stop) passa a ocorrer na sua conta também.",
  },
  {
    id: "3",
    title: "Como escolher boas corretoras",
    description:
      "Conheça os critérios para identificar corretoras seguras, regulamentadas e que tenham um bom suporte para Copy Trade.",
  },
  {
    id: "4",
    title: "Mentalidade para um copy trader",
    description:
      "O mindset é essencial. Saiba como gerenciar expectativas e lidar com oscilações de mercado para manter a consistência.",
  },
  {
    id: "5",
    title: "Métricas para selecionar bons copys",
    description:
      'Analise dados como drawdown, histórico de operações, consistência de ganhos e muito mais, evitando "furadas".',
  },
  {
    id: "6",
    title: "Minha carteira pessoal de CopyTrade",
    description:
      "Entenda como e por que eu selecionei cada CopyTrader para minha própria carteira e como você pode seguir os mesmos.",
  },
  {
    id: "7",
    title: "Passo a passo de como seguir os copys",
    description:
      "Desde a abertura de conta na corretora até o primeiro dia de replicação de operações, tudo é explicado.",
  },
  {
    id: "8",
    title: "Como nunca ser liquidado",
    description:
      'Técnicas de gerenciamento de risco e alavancagem para que você não acabe "zerado" em situações de alta volatilidade.',
  },
  {
    id: "9",
    title: "Como funciona alavancagem",
    description:
      "Descubra o que significa alavancar seu capital e as estratégias para usar isso a seu favor sem se expor demais.",
  },
  {
    id: "10",
    title: "Como lidar com Imposto de Renda",
    description:
      "Simplifique sua vida fiscal, entendendo como declarar seus ganhos e evitando problemas com o Leão.",
  },
  {
    id: "11",
    title: "Como utilizar o MetaTrader 4",
    description:
      "Veja como configurar o MT4 para acompanhar as operações replicadas em tempo real.",
  },
  {
    id: "12",
    title: "Como utilizar o MyFxBook",
    description:
      "Acesse gráficos e estatísticas detalhadas para avaliar a performance dos seus Copys.",
  },
  {
    id: "13",
    title: "Como usar o aplicativo Mobile Trader",
    description:
      "Acompanhe seus resultados e faça ajustes na palma da mão, sem precisar ficar no computador.",
  },
  {
    id: "14",
    title: "Acesso AO VIVO às lives semanais",
    description:
      "Participe das transmissões ao vivo onde discutimos as últimas operações, estratégias e respondemos perguntas.",
  },
  {
    id: "15",
    title: "Acesso às gravações de TODAS lives",
    description:
      "Perdeu a live? Sem problemas! Você pode assistir às gravações sempre que quiser.",
  },
  {
    id: "16",
    title: "Acesso a todas as atualizações",
    description:
      "Esteja sempre atualizado(a) sobre mudanças na carteira e novos conteúdos adicionados.",
  },
];

const Learning: React.FC = () => {
  return (
    <LearningContainer id="aprendizado">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>
            Tudo que você precisa para investir com consistência em Copy Trade
          </SectionLabel>
          <Title>
            Você <span>aprenderá a:</span>
          </Title>
        </motion.div>
      </SectionHeader>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SwiperWrapper>
          <Swiper
            modules={[FreeMode, Mousewheel]}
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={true}
            mousewheel={{
              forceToAxis: true,
            }}
            grabCursor={true}
          >
            {learningItems.map((item, index) => (
              <SwiperSlide key={item.id}>
                <LearningCard>
                  <CardNumber>{String(index + 1).padStart(2, "0")}</CardNumber>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </LearningCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </motion.div>
    </LearningContainer>
  );
};

export default Learning;
