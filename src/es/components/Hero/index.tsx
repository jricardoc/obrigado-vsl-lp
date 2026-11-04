import { useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import {
  HeroContainer,
  BackgroundCanvas,
  ContentWrapper,
  WarningBadge,
  Headline,
  HeadlineHighlight,
  Subheadline,
  VideoWrapper,
  HotmartWidgetWrapper,
  GradientOverlay,
} from "../../../components/Hero/styles";

const ParticleBackground = memo(() => (
  <Canvas camera={{ position: [0, 0, 1] }}>
    <Stars
      radius={100}
      depth={50}
      count={3000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
    <ambientLight intensity={0.5} />
  </Canvas>
));

ParticleBackground.displayName = "ParticleBackground";

const Hero: React.FC = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load VTurb script
    const existingVturbScript = document.querySelector(
      'script[src*="converteai.net"]',
    );
    if (!existingVturbScript) {
      const script = document.createElement("script");
      script.src =
        "https://scripts.converteai.net/3f99e868-8a2c-4153-b834-85a358ba11f4/players/6ae6825c932c1d4c2396a2ff/v4/player.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Load Hotmart Checkout Elements script
    const existingHotmartScript = document.querySelector(
      'script[src*="hotmart-checkout-elements"]',
    );
    if (!existingHotmartScript) {
      const hotmartScript = document.createElement("script");
      hotmartScript.src =
        "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
      hotmartScript.async = true;
      hotmartScript.onload = () => {
        // @ts-expect-error Hotmart global
        if (window.checkoutElements) {
          // @ts-expect-error Hotmart global
          window.checkoutElements
            .init("salesFunnel")
            .mount("#hotmart-sales-funnel");
        }
      };
      document.head.appendChild(hotmartScript);
    } else {
      // Script already loaded, just mount
      // @ts-expect-error Hotmart global
      if (window.checkoutElements) {
        // @ts-expect-error Hotmart global
        window.checkoutElements
          .init("salesFunnel")
          .mount("#hotmart-sales-funnel");
      }
    }
  }, []);

  return (
    <HeroContainer id="hero">
      <BackgroundCanvas>
        <ParticleBackground />
      </BackgroundCanvas>

      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <WarningBadge>
            <span>⚠️ Aviso importante</span>
          </WarningBadge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Headline>
            <HeadlineHighlight>¡NO CIERRES ESTA PÁGINA!</HeadlineHighlight>
          </Headline>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Subheadline>
            Nunca más tendrás acceso a esta oportunidad.{" "}
            <strong>Mira el video y entiende por qué</strong>
          </Subheadline>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <VideoWrapper ref={videoContainerRef}>
            <div
              dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer id="vid-6ae6825c932c1d4c2396a2ff" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`,
              }}
            />
          </VideoWrapper>
        </motion.div>

        {/* Hotmart Sales Funnel Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ width: "100%" }}
        >
          <HotmartWidgetWrapper id="checkout">
            <div id="hotmart-sales-funnel" />
          </HotmartWidgetWrapper>
        </motion.div>
      </ContentWrapper>

      <GradientOverlay />
    </HeroContainer>
  );
};

export default Hero;
