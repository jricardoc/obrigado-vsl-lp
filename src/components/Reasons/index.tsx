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
} from "./styles";

const reasons = [
  {
    id: "profissional",
    icon: FaUserTie,
    title: "Profissional Analista e Experiente",
    description:
      "Henzel (Hendi) é o fundador da Academia de Copy Trade e atua neste mercado há 8 anos. Já enfrentou perdas em pirâmides e em operações de alto risco, mas transformou essas experiências em aprendizados e desenvolveu um método sólido, baseado em dados concretos.",
  },
  {
    id: "tempo",
    icon: FaClock,
    title: "Economia de Tempo",
    description:
      "Não há necessidade de ficar preso(a) à tela do computador. As operações são replicadas de forma automática, seguindo os movimentos da carteira principal. Você pode continuar com suas atividades diárias enquanto seus investimentos trabalham para você.",
  },
  {
    id: "lives",
    icon: FaVideo,
    title: "Lives Exclusivas com Alunos",
    description:
      "Você terá acesso a lives exclusivas onde o Hendi apresenta atualizações, faz análises, discute os resultados dos Copys da carteira e responde perguntas ao vivo. Todo o conteúdo fica gravado, para que você possa assistir quando quiser.",
  },
  {
    id: "transparencia",
    icon: FaEye,
    title: "Transparência",
    description:
      "Todas as operações, métricas e ajustes de risco são apresentados com total clareza. A gestão é baseada em dados e você vê exatamente o que está acontecendo com sua conta, pois o dinheiro permanece na sua corretora.",
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
              Motivos para você <span>não ficar de fora</span>
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
              title="Começar jornada na Academia de Copy Trade"
            >
              Comece sua Jornada do Sucesso
            </CTAButton>
          </motion.div>
        </CTAWrapper>
      </ContentWrapper>
    </ReasonsContainer>
  );
};

export default Reasons;
