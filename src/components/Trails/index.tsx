import { motion } from "framer-motion";
import TradingBackground from "../AnimatedBackground";
import {
  slideInLeftVariant,
  slideInRightVariant,
  staggerContainerVariant,
  staggerItemVariant,
} from "../../hooks/useScrollAnimation";
import {
  TrailsContainer,
  ContentWrapper,
  SectionHeader,
  Title,
  Subtitle,
  CardsGrid,
  TrailCard,
  TrailImageWrapper,
  TrailImage,
  TrailOverlay,
  TrailContent,
  TrailTitle,
  TrailDescription,
  CTAWrapper,
  CTAButton,
  BackgroundOrb,
} from "./styles";

const trails = [
  {
    id: "1",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/2-23.jpg",
    title: "Primeiros Passos na Academia",
    description:
      "Aqui você vai aprender como acessar a plataforma, configurar sua conta e entender o passo a passo para seguir a carteira de CopyTraders da Academia.",
  },
  {
    id: "2",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/3-21.jpg",
    title: "Mentalidade",
    description:
      "Aprenda a pensar como um investidor de longo prazo. Desenvolva a mentalidade certa para o Copy Trade e mantenha o foco na consistência.",
  },
  {
    id: "3",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/5-12.jpg",
    title: "Tudo sobre Diversificação",
    description:
      "Nunca coloque todos os ovos na mesma cesta. Saiba como montar uma carteira de CopyTraders equilibrada, reduzindo riscos.",
  },
  {
    id: "4",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/4-17.jpg",
    title: "Tudo sobre Copy Trade",
    description:
      "O essencial para dominar a estratégia. Entenda o que é Copy Trade e como funciona a tecnologia de replicação automática.",
  },
  {
    id: "5",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/6-11.jpg",
    title: "Tudo sobre Seleção de Copys",
    description:
      "Escolha os melhores para seguir. Aprenda a analisar métricas reais e identificar CopyTraders com histórico consistente.",
  },
  {
    id: "6",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/8-9.jpg",
    title: "Monte a Sua Carteira",
    description:
      "Configure e personalize sua estratégia. Passo a passo prático para você montar sua própria carteira de CopyTrade.",
  },
  {
    id: "7",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/10-2.jpg",
    title: "Carteira da Academia",
    description:
      "Tenha acesso direto à carteira recomendada. Conheça os CopyTraders escolhidos pela Academia com base em performance.",
  },
  {
    id: "8",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/11-2.jpg",
    title: "Acompanhando os Resultados",
    description:
      "Saiba como e onde monitorar tudo. Veja como acompanhar suas operações ao vivo e por relatórios detalhados.",
  },
  {
    id: "9",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/12-1.jpg",
    title: "Gerenciamento de Lucros",
    description:
      "Ganhar é só o começo, agora aprenda a manter. Aprenda estratégias de saque, reinvestimento e proteção de capital.",
  },
  {
    id: "10",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/13-1.jpg",
    title: "Projetos Exclusivos",
    description:
      "Conteúdos, estratégias e oportunidades que só os alunos têm. Tenha acesso a análises especiais e mentorias.",
  },
];

const Trails: React.FC = () => {
  return (
    <TrailsContainer id="trilhas">
      <TradingBackground
        variant="secondary"
        showOrbs={true}
        showPercentages={true}
        showChart={true}
      />
      <BackgroundOrb $position="left" />
      <BackgroundOrb $position="right" />

      <ContentWrapper>
        <SectionHeader>
          <motion.div
            variants={slideInLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Title>
              <span>Trilhas</span>
            </Title>
          </motion.div>
          <motion.div
            variants={slideInRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Subtitle>
              Confira os conteúdos que você vai ter acesso na Academia:
            </Subtitle>
          </motion.div>
        </SectionHeader>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CardsGrid>
            {trails.map((trail) => (
              <motion.div key={trail.id} variants={staggerItemVariant}>
                <TrailCard>
                  <TrailImageWrapper>
                    <TrailImage
                      className="trail-image"
                      src={trail.image}
                      alt={trail.title}
                      width={720}
                      height={1040}
                      loading="lazy"
                    />
                  </TrailImageWrapper>

                  {/* Desktop: Overlay com apenas descrição */}
                  <TrailOverlay className="trail-overlay">
                    <TrailDescription className="trail-description">
                      {trail.description}
                    </TrailDescription>
                  </TrailOverlay>

                  {/* Mobile: Content abaixo da imagem */}
                  <TrailContent>
                    <TrailTitle>{trail.title}</TrailTitle>
                    <TrailDescription style={{ opacity: 1 }}>
                      {trail.description}
                    </TrailDescription>
                  </TrailContent>
                </TrailCard>
              </motion.div>
            ))}
          </CardsGrid>
        </motion.div>

        <CTAWrapper>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CTAButton
              href="#checkout"
              title="Acessar a Academia de Copy Trade"
            >
              Acessar a Academia
            </CTAButton>
          </motion.div>
        </CTAWrapper>
      </ContentWrapper>
    </TrailsContainer>
  );
};

export default Trails;
