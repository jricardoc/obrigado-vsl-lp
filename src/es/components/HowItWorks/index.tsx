import { motion } from "framer-motion";
import {
  HowItWorksContainer,
  ContentWrapper,
  SectionHeader,
  Title,
  StepsGrid,
  StepCard,
  StepNumber,
  StepTitle,
  StepDescription,
  CTAWrapper,
  CTAButton,
} from "../../../components/HowItWorks/styles";

const steps = [
  {
    id: "1",
    title: "CONECTA Y DÉJALO CORRER",
    description:
      "En la academia vas a recibir todas las instrucciones y tutoriales necesarios para configurar tu cuenta en el bróker y autorizar al copy trader. El dinero sigue en tu cuenta de siempre.",
  },
  {
    id: "2",
    title: "SEGUIMIENTO",
    description:
      "Puedes seguir los resultados tanto en el panel del bróker como en las plataformas integradas. Te enseño a ver e interpretar tus resultados con reportes detallados.",
  },
  {
    id: "3",
    title: "SOPORTE",
    description:
      "Tanto yo como los demás alumnos de nuestra comunidad y nuestro equipo de soporte estaremos siempre disponibles para ayudarte a ajustar configuraciones, gestionar riesgos y resolver dudas.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <HowItWorksContainer id="como-funciona">
      <ContentWrapper>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title>
              ¿Cómo funciona el proceso para <span>seguir un copy trade?</span>
            </Title>
          </motion.div>
        </SectionHeader>

        <StepsGrid>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <StepCard>
                <StepNumber>{step.id}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepCard>
            </motion.div>
          ))}
        </StepsGrid>

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
              Quiero resultados visibles
            </CTAButton>
          </motion.div>
        </CTAWrapper>
      </ContentWrapper>
    </HowItWorksContainer>
  );
};

export default HowItWorks;
