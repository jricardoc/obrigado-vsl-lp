import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import {
  OfferContainer,
  ContentWrapper,
  BenefitsList,
  SectionTitle,
  BenefitItem,
  CheckIcon,
  BenefitText,
  OfferCard,
  OfferBadge,
  CashPrice,
  CTAButton,
  GlowOrb,
} from "../../../components/Offer/styles";

const benefits = [
  "Aprende a ser un experto en el mercado de copy trade",
  "Horas de contenido en video (de lo básico a lo avanzado)",
  "Grupo exclusivo de inversionistas de la cartera",
  "Lives semanales + grabaciones completas",
  "Acceso a la cartera de copy traders de la academia",
  "Soporte completo durante todo el proceso",
];

const scrollToCheckout = () => {
  const checkoutElement = document.getElementById("checkout");
  if (checkoutElement) {
    checkoutElement.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const Offer: React.FC = () => {
  return (
    <OfferContainer id="oferta">
      <GlowOrb position="left" />
      <GlowOrb position="right" />

      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BenefitsList>
            <SectionTitle>
              Recuerda lo que <span>vas a recibir</span>
            </SectionTitle>

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <BenefitItem>
                  <CheckIcon>
                    <FaCheck aria-hidden="true" />
                  </CheckIcon>
                  <BenefitText>{benefit}</BenefitText>
                </BenefitItem>
              </motion.div>
            ))}
          </BenefitsList>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <OfferCard>
            <OfferBadge>Oferta exclusiva</OfferBadge>
            <CashPrice>Precio especial, solo en esta página</CashPrice>
            <CTAButton
              as="button"
              type="button"
              onClick={scrollToCheckout}
              title="Asegurar mi lugar en la Academia de Copy Trade"
            >
              Quiero asegurar mi lugar con descuento
            </CTAButton>
          </OfferCard>
        </motion.div>
      </ContentWrapper>
    </OfferContainer>
  );
};

export default Offer;
