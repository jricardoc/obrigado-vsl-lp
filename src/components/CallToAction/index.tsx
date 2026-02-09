import { motion } from "framer-motion";
import {
  CTAContainer,
  ContentWrapper,
  Title,
  Subtitle,
  DecorativeOrb,
} from "./styles";

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
          <Title>Chega de perder tempo!</Title>
          <Subtitle>
            Comece agora sua jornada rumo à liberdade financeira
          </Subtitle>
        </motion.div>
      </ContentWrapper>
    </CTAContainer>
  );
};

export default CallToAction;
