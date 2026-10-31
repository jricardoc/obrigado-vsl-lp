import { motion } from "framer-motion";
import { FaUserTie, FaClock, FaVideo, FaEye } from "react-icons/fa";
import {
  ReasonsContainer,
  ContentWrapper,
  SectionHeader,
  Title,
  CardsGrid,
  ReasonCard,
  IconWrapper,
  CardContent,
  CardTitle,
  CardDescription,
  CTAWrapper,
  CTAButton,
} from "../../../components/Reasons/styles";

const reasons = [
  {
    id: "profissional",
    icon: FaUserTie,
    title: "Profesional analista y experimentado",
    description:
      "Henzel (Hendi) es el fundador de la Academia de Copy Trade y trabaja en este mercado desde hace 8 años. Ya sufrió pérdidas en pirámides y en operaciones de alto riesgo, pero convirtió esas experiencias en aprendizajes y desarrolló un método sólido, basado en datos concretos.",
  },
  {
    id: "tempo",
    icon: FaClock,
    title: "Ahorro de tiempo",
    description:
      "No necesitas estar pegado a la pantalla de la computadora. Las operaciones se replican de forma automática, siguiendo los movimientos de la cartera principal. Puedes seguir con tus actividades diarias mientras tus inversiones trabajan para ti.",
  },
  {
    id: "lives",
    icon: FaVideo,
    title: "Lives exclusivos con alumnos",
    description:
      "Vas a tener acceso a lives exclusivos donde Hendi presenta novedades, hace análisis, comenta los resultados de los Copys de la cartera y responde preguntas en vivo. Todo el contenido queda grabado para que lo veas cuando quieras.",
  },
  {
    id: "transparencia",
    icon: FaEye,
    title: "Transparencia",
    description:
      "Todas las operaciones, métricas y ajustes de riesgo se presentan con total claridad. La gestión se basa en datos y ves exactamente lo que está pasando con tu cuenta, porque el dinero se queda en tu bróker.",
  },
];

const Reasons: React.FC = () => {
  return (
    <ReasonsContainer id="motivos">
      <ContentWrapper>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title>
              Motivos para que <span>no te quedes afuera</span>
            </Title>
          </motion.div>
        </SectionHeader>

        <CardsGrid>
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ReasonCard>
                <IconWrapper>
                  <reason.icon aria-hidden="true" />
                </IconWrapper>
                <CardContent>
                  <CardTitle>{reason.title}</CardTitle>
                  <CardDescription>{reason.description}</CardDescription>
                </CardContent>
              </ReasonCard>
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
              title="Empezar el camino en la Academia de Copy Trade"
            >
              Empieza tu camino al éxito
            </CTAButton>
          </motion.div>
        </CTAWrapper>
      </ContentWrapper>
    </ReasonsContainer>
  );
};

export default Reasons;
