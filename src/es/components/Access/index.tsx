import { motion } from "framer-motion";
import { FaPlay, FaUsers, FaChartLine, FaStar } from "react-icons/fa";
import {
  AccessContainer,
  ContentWrapper,
  SectionHeader,
  Title,
  CardsGrid,
  Card,
  IconWrapper,
  CardTitle,
  CardDescription,
  CTAWrapper,
  CTAButton,
  BackgroundOrb,
} from "../../../components/Access/styles";

const accessCards = [
  {
    id: "aulas",
    icon: FaPlay,
    title: "Clases, lives y contenidos grabados",
    description:
      "¡Son más de 90 contenidos siempre actualizados que te explican literalmente TODO sobre el mercado de copy trade, desde lo básico de los brókers hasta los impuestos!",
  },
  {
    id: "grupo",
    icon: FaUsers,
    title: "Grupo exclusivo de inversionistas",
    description:
      "Conéctate con una comunidad de inversionistas que realmente invierten y viven del copy trade. Desde personas con $100 hasta personas con $1.000.000. Todos juntos, enseñándose unos a otros.",
  },
  {
    id: "carteira",
    icon: FaChartLine,
    title: "Cartera de Copy Traders de la Academia",
    description:
      "¡Explicaciones, tutoriales y enlaces de acceso a los mejores copy traders del mercado, en los que invertimos mis alumnos y yo! Sí, tú puedes tener el mismo resultado que yo.",
  },
  {
    id: "projetos",
    icon: FaStar,
    title: "Proyectos exclusivos",
    description:
      "¡Accede a cuentas PAMM, ETF y copy traders cerrados al público minorista, disponibles solo para los alumnos de la academia!",
  },
];

const Access: React.FC = () => {
  return (
    <AccessContainer id="acesso">
      <BackgroundOrb $position="left" />
      <BackgroundOrb $position="right" />
      <ContentWrapper>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title>
              ¿A qué vas a <span>tener acceso?</span>
            </Title>
          </motion.div>
        </SectionHeader>

        <CardsGrid>
          {accessCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ height: "100%" }}
            >
              <Card>
                <IconWrapper>
                  <card.icon aria-hidden="true" />
                </IconWrapper>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </CardsGrid>

        <CTAWrapper>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
    </AccessContainer>
  );
};

export default Access;
