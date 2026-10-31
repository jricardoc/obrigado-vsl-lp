import { motion } from "framer-motion";
import {
  FaChartBar,
  FaShieldAlt,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";
import {
  AudienceContainer,
  ContentWrapper,
  SectionHeader,
  Title,
  CardsGrid,
  AudienceCard,
  IconWrapper,
  CardContent,
  CardTitle,
  CardDescription,
  CTAWrapper,
  CTAButton,
} from "../../../components/Audience/styles";

const audiences = [
  {
    id: "day-traders",
    icon: FaChartBar,
    title: "Day Traders",
    description:
      "Para quienes ya no tienen tiempo ni paciencia para operar manualmente todos los días, pero quieren mantener la misma rentabilidad.",
  },
  {
    id: "vitimas",
    icon: FaShieldAlt,
    title: "Víctimas de estafas",
    description:
      "Si ya caíste en pirámides o promesas milagrosas, aquí vas a encontrar un método sólido, basado en datos y con soporte real.",
  },
  {
    id: "investidores",
    icon: FaChartLine,
    title: "Inversionistas",
    description:
      "Que quieren diversificar sus ingresos aprovechando el potencial del mercado de renta variable de forma pasiva.",
  },
  {
    id: "iniciantes",
    icon: FaGraduationCap,
    title: "Principiantes en el mercado",
    description:
      "Quienes están empezando ahora y quieren aprender desde cero, sin correr riesgos innecesarios. El soporte y los módulos hacen que la curva de aprendizaje sea más suave.",
  },
];

const Audience: React.FC = () => {
  return (
    <AudienceContainer id="para-quem">
      <ContentWrapper>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title>
              ¿Para quién es <span>la Academia?</span>
            </Title>
          </motion.div>
        </SectionHeader>

        <CardsGrid>
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ height: "100%" }}
            >
              <AudienceCard>
                <IconWrapper>
                  <audience.icon aria-hidden="true" />
                </IconWrapper>
                <CardContent>
                  <CardTitle>{audience.title}</CardTitle>
                  <CardDescription>{audience.description}</CardDescription>
                </CardContent>
              </AudienceCard>
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
              title="Obtener acceso a la Academia de Copy Trade"
            >
              Obtener acceso
            </CTAButton>
          </motion.div>
        </CTAWrapper>
      </ContentWrapper>
    </AudienceContainer>
  );
};

export default Audience;
