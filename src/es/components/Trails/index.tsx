import { motion } from "framer-motion";
import TradingBackground from "../../../components/AnimatedBackground";
import {
  slideInLeftVariant,
  slideInRightVariant,
  staggerContainerVariant,
  staggerItemVariant,
} from "../../../hooks/useScrollAnimation";
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
} from "../../../components/Trails/styles";

const trails = [
  {
    id: "1",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/2-23.jpg",
    title: "Primeros pasos en la Academia",
    description:
      "Aquí vas a aprender a acceder a la plataforma, configurar tu cuenta y entender el paso a paso para seguir la cartera de CopyTraders de la Academia.",
  },
  {
    id: "2",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/3-21.jpg",
    title: "Mentalidad",
    description:
      "Aprende a pensar como un inversionista de largo plazo. Desarrolla la mentalidad correcta para el Copy Trade y mantén el foco en la consistencia.",
  },
  {
    id: "3",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/5-12.jpg",
    title: "Todo sobre diversificación",
    description:
      "Nunca pongas todos los huevos en la misma canasta. Aprende a armar una cartera de CopyTraders equilibrada, reduciendo riesgos.",
  },
  {
    id: "4",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/4-17.jpg",
    title: "Todo sobre Copy Trade",
    description:
      "Lo esencial para dominar la estrategia. Entiende qué es el Copy Trade y cómo funciona la tecnología de replicación automática.",
  },
  {
    id: "5",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/6-11.jpg",
    title: "Todo sobre la selección de copys",
    description:
      "Elige a los mejores para seguir. Aprende a analizar métricas reales e identificar CopyTraders con un historial consistente.",
  },
  {
    id: "6",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/8-9.jpg",
    title: "Arma tu cartera",
    description:
      "Configura y personaliza tu estrategia. Un paso a paso práctico para que armes tu propia cartera de CopyTrade.",
  },
  {
    id: "7",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/10-2.jpg",
    title: "Cartera de la Academia",
    description:
      "Ten acceso directo a la cartera recomendada. Conoce a los CopyTraders elegidos por la Academia según su desempeño.",
  },
  {
    id: "8",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/11-2.jpg",
    title: "Seguimiento de resultados",
    description:
      "Aprende cómo y dónde monitorear todo. Mira cómo seguir tus operaciones en vivo y con reportes detallados.",
  },
  {
    id: "9",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/12-1.jpg",
    title: "Gestión de ganancias",
    description:
      "Ganar es solo el comienzo; ahora aprende a mantener. Aprende estrategias de retiro, reinversión y protección de capital.",
  },
  {
    id: "10",
    image:
      "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/13-1.jpg",
    title: "Proyectos exclusivos",
    description:
      "Contenidos, estrategias y oportunidades que solo tienen los alumnos. Accede a análisis especiales y mentorías.",
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
              <span>Rutas</span>
            </Title>
          </motion.div>
          <motion.div
            variants={slideInRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Subtitle>
              Mira los contenidos a los que vas a tener acceso en la Academia:
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
              title="Acceder a la Academia de Copy Trade"
            >
              Acceder a la Academia
            </CTAButton>
          </motion.div>
        </CTAWrapper>
      </ContentWrapper>
    </TrailsContainer>
  );
};

export default Trails;
