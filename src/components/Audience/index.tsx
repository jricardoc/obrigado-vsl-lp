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
} from "./styles";

const audiences = [
  {
    id: "day-traders",
    icon: FaChartBar,
    title: "Day Traders",
    description:
      "Para quem não tem mais tempo ou paciência para operar manualmente todos os dias, mas quer manter a mesma rentabilidade.",
  },
  {
    id: "vitimas",
    icon: FaShieldAlt,
    title: "Vítimas de Golpe",
    description:
      "Se você já caiu em pirâmides ou promessas milagrosas, aqui encontrará um método sólido, baseado em dados e com suporte real.",
  },
  {
    id: "investidores",
    icon: FaChartLine,
    title: "Investidores",
    description:
      "Que desejam diversificar sua renda, aproveitando o potencial do mercado de renda variável de forma passiva.",
  },
  {
    id: "iniciantes",
    icon: FaGraduationCap,
    title: "Iniciantes no Mercado",
    description:
      "Quem está começando agora e quer aprender do zero, sem tomar riscos desnecessários. O suporte e os módulos tornam a curva de aprendizado mais suave.",
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
              Para quem serve <span>a Academia?</span>
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
              title="Obter acesso à Academia de Copy Trade"
            >
              Obter Acesso
            </CTAButton>
          </motion.div>
        </CTAWrapper>
      </ContentWrapper>
    </AudienceContainer>
  );
};

export default Audience;
