import { motion } from "framer-motion";
import {
  AboutContainer,
  ContentGrid,
  ImageWrapper,
  MainImage,
  ImageDecoration,
  ContentCard,
  CardTitle,
  CardText,
  CTAButton,
  GlowOrb,
} from "./styles";

const About: React.FC = () => {
  return (
    <AboutContainer id="sobre">
      <GlowOrb />

      <ContentGrid>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ImageWrapper>
            <ImageDecoration />
            <MainImage
              src="https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/bannerImg.png.webp"
              alt="Henzel (Hendi) - Criador da Academia de Copy Trade"
              width={500}
              height={600}
              loading="lazy"
            />
          </ImageWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ContentCard>
            <CardTitle>
              O que é <span>Copy Trade?</span>
            </CardTitle>
            <CardText>
              Imagine poder lucrar com o mercado financeiro sem precisar operar
              por conta própria. Essa é a graça do copy trade, mas isso não é
              simples como todo mundo lhe vende, senão, todos nós estaríamos
              ricos! Aqui eu lhe trago a verdadeira realidade de como investir
              para ter resultados consistentes do mercado de copy trade, sabendo
              escolher os traders (e aqui já temos uma lista garimpada com os
              melhores), configurar sua conta, montar uma boa carteira e aí sim:
              seu dinheiro vai trabalhar para você, por muuuuito tempo.
            </CardText>
            <CTAButton
              href="#checkout"
              title="Garantir minha vaga na Academia de Copy Trade"
            >
              Quero garantir minha vaga!
            </CTAButton>
          </ContentCard>
        </motion.div>
      </ContentGrid>
    </AboutContainer>
  );
};

export default About;
