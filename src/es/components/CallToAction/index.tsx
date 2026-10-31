import { motion } from "framer-motion";
import {
  CTAContainer,
  ContentWrapper,
  Title,
  Subtitle,
  DecorativeOrb,
} from "../../../components/CallToAction/styles";

const CallToAction: React.FC = () => {
  return (
    <CTAContainer>
      <DecorativeOrb position="left" />
      <DecorativeOrb position="right" />

      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Title>¡Basta de perder tiempo!</Title>
          <Subtitle>
            Empieza ahora tu camino hacia la libertad financiera
          </Subtitle>
        </motion.div>
      </ContentWrapper>
    </CTAContainer>
  );
};

export default CallToAction;
