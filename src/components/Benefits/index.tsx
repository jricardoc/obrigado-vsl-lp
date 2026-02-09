import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useFadeInOnScroll } from "../../hooks";
import {
  BenefitsContainer,
  ContentGrid,
  ImageWrapper,
  ContentWrapper,
  SectionLabel,
  Title,
  BenefitsList,
  BenefitItem,
  CheckIcon,
  GlowOrb,
} from "./styles";

const benefits = [
  "Aprende a selecionar as melhores corretoras",
  "Desenvolve uma carteira de copy traders personalizada para você",
  "Nunca mais cai em pirâmides, golpes ou robôs e copy traders ruins",
  "Cria uma carteira bem diversificada",
  "Aprende a gerenciar seus resultados de maneira consistente",
];

const Benefits: React.FC = () => {
  const containerRef = useFadeInOnScroll<HTMLElement>();

  return (
    <BenefitsContainer ref={containerRef}>
      <GlowOrb />
      <ContentGrid>
        <ImageWrapper>
          <motion.img
            src="https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/curva-de-capital2.webp"
            alt="Gráfico mostrando curva de capital crescente ao longo do tempo"
            width={600}
            height={400}
            loading="lazy"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </ImageWrapper>

        <ContentWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Academia de Copy Trade</SectionLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Title>
              Com a academia de copy trade, <span>você:</span>
            </Title>
          </motion.div>

          <BenefitsList>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <BenefitItem>
                  <CheckIcon>
                    <FaCheck aria-hidden="true" />
                  </CheckIcon>
                  {benefit}
                </BenefitItem>
              </motion.div>
            ))}
          </BenefitsList>
        </ContentWrapper>
      </ContentGrid>
    </BenefitsContainer>
  );
};

export default Benefits;
