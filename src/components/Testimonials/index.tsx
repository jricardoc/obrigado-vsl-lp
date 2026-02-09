import { motion } from "framer-motion";
import {
  TestimonialsContainer,
  ContentWrapper,
  SectionHeader,
  SectionLabel,
  Title,
  TestimonialsGrid,
  TestimonialCard,
  QuoteIcon,
  QuoteText,
  AuthorName,
  CTAWrapper,
  CTAButton,
} from "./styles";

const testimonials = [
  {
    id: "1",
    quote: "Pegar um trabalho assim mastigadinho é muito raro mano.",
    author: "Ricardo",
  },
  {
    id: "2",
    quote:
      "A atenção nos grupos, os relatórios e até a planilha que disponibilizou... tudo top! Parabéns pela dedicação.",
    author: "Jéssica",
  },
  {
    id: "3",
    quote:
      "Depois das porradas que levei, gosto de manter o pé no chão e não me deixar levar pela euforia geral de bons resultados. Mas tudo leva a crer que teremos bons resultados. Diversificar é a palavra.",
    author: "Antônio",
  },
  {
    id: "4",
    quote:
      "Estou esperando entrar um dinheiro para poder aumentar o aporte e seguir os outros copys da carteira.",
    author: "William",
  },
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsContainer id="depoimentos">
      <ContentWrapper>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Alunos</SectionLabel>
            <Title>
              Feedback de <span>usuários</span>
            </Title>
          </motion.div>
        </SectionHeader>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ height: "100%" }}
            >
              <TestimonialCard>
                <QuoteIcon>"</QuoteIcon>
                <QuoteText>{testimonial.quote}</QuoteText>
                <AuthorName>{testimonial.author}</AuthorName>
              </TestimonialCard>
            </motion.div>
          ))}
        </TestimonialsGrid>

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
    </TestimonialsContainer>
  );
};

export default Testimonials;
