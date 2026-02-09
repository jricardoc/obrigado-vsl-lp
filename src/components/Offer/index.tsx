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
  OldPrice,
  PriceLabel,
  InstallmentPrice,
  CashPrice,
  CTAButton,
  GlowOrb,
} from "./styles";

const benefits = [
  "Aprenda a ser um expert no mercado de copy trade",
  "Horas de conteúdo em vídeo (do básico ao avançado)",
  "Grupo exclusivo de investidores da carteira",
  "Lives semanais + gravações completas",
  "Acesso à carteira de copy traders da academia",
  "Suporte completo durante todo o processo",
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
              Relembre o que <span>irá receber</span>
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
            <OfferBadge>Oferta Exclusiva</OfferBadge>
            <OldPrice>De R$ 1.997,00 por apenas</OldPrice>
            <PriceLabel>12x de</PriceLabel>
            <InstallmentPrice>
              <span>R$</span> 97,08
            </InstallmentPrice>
            <CashPrice>ou R$ 997,00 à vista</CashPrice>
            <CTAButton
              as="button"
              type="button"
              onClick={scrollToCheckout}
              title="Garantir minha vaga na Academia de Copy Trade"
            >
              Quero Garantir Minha Vaga com Desconto
            </CTAButton>
          </OfferCard>
        </motion.div>
      </ContentWrapper>
    </OfferContainer>
  );
};

export default Offer;
