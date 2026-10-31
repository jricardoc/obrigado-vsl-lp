import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useFadeInOnScroll } from "../../../hooks";
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
} from "../../../components/Benefits/styles";

const benefits = [
  "Aprendes a elegir los mejores brókers",
  "Desarrollas una cartera de copy traders personalizada para ti",
  "Nunca más caes en pirámides, estafas, robots ni copy traders malos",
  "Creas una cartera bien diversificada",
  "Aprendes a gestionar tus resultados de forma consistente",
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
            alt="Gráfico que muestra una curva de capital creciente a lo largo del tiempo"
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
              Con la academia de copy trade, <span>tú:</span>
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
