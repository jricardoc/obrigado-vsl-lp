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
} from "../../../components/Testimonials/styles";

const testimonials = [
  {
    id: "1",
    quote: "Encontrar un trabajo así, tan masticadito, es muy raro, hermano.",
    author: "Ricardo",
  },
  {
    id: "2",
    quote:
      "La atención en los grupos, los reportes y hasta la planilla que compartió... ¡todo excelente! Felicitaciones por la dedicación.",
    author: "Jéssica",
  },
  {
    id: "3",
    quote:
      "Después de los golpes que me llevé, me gusta mantener los pies en la tierra y no dejarme llevar por la euforia de los buenos resultados. Pero todo indica que vamos a tener buenos resultados. Diversificar es la palabra.",
    author: "Antônio",
  },
  {
    id: "4",
    quote:
      "Estoy esperando que entre un dinero para poder aumentar el aporte y seguir los otros copys de la cartera.",
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
            <SectionLabel>Alumnos</SectionLabel>
            <Title>
              Feedback de <span>usuarios</span>
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
              title="Obtener acceso a la Academia de Copy Trade"
            >
              Obtener acceso
            </CTAButton>
          </motion.div>
        </CTAWrapper>
      </ContentWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;
