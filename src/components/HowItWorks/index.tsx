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
} from "./styles";

const steps = [
  {
    id: "1",
    title: "CONECTE E DEIXE ROLAR",
    description:
      "Na academia você receberá todas as instruções e tutoriais necessários para configurar sua conta na corretora e autorizar o copy trader. O dinheiro continua na sua conta normal.",
  },
  {
    id: "2",
    title: "ACOMPANHAMENTO",
    description:
      "Você pode acompanhar os resultados tanto no painel da corretora quanto pelas plataformas integradas. Eu lhe ensino a visualizar e interpretar seus resultados com relatórios detalhados.",
  },
  {
    id: "3",
    title: "SUPORTE",
    description:
      "Tanto eu, quanto os outros alunos em nossa comunidade e nossa equipe de suporte estará sempre disponível para ajudá-lo(a) a ajustar configurações, gerenciar riscos e tirar dúvidas.",
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
              Como funciona o processo para <span>seguir um copy trade?</span>
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
              title="Acessar a Academia de Copy Trade"
            >
              Quero resultados visíveis
            </CTAButton>
          </motion.div>
        </CTAWrapper>
      </ContentWrapper>
    </HowItWorksContainer>
  );
};

export default HowItWorks;
