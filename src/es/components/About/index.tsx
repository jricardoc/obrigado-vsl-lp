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
} from "../../../components/About/styles";

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
              alt="Henzel (Hendi) - Creador de la Academia de Copy Trade"
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
              ¿Qué es el <span>Copy Trade?</span>
            </CardTitle>
            <CardText>
              Imagina poder ganar con el mercado financiero sin tener que operar por tu cuenta. Esa es la gracia del copy trade, pero no es tan simple como todos te lo venden; si no, ¡todos seríamos ricos! Aquí te muestro la verdadera realidad de cómo invertir para tener resultados consistentes en el mercado de copy trade: sabiendo elegir a los traders (y aquí ya tenemos una lista depurada con los mejores), configurar tu cuenta, armar una buena cartera y ahí sí: tu dinero va a trabajar para ti, por muuuucho tiempo.
            </CardText>
            <CTAButton
              href="#checkout"
              title="Asegurar mi lugar en la Academia de Copy Trade"
            >
              ¡Quiero asegurar mi lugar!
            </CTAButton>
          </ContentCard>
        </motion.div>
      </ContentGrid>
    </AboutContainer>
  );
};

export default About;
