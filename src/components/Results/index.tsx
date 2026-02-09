import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";

import {
  ResultsContainer,
  SectionHeader,
  Title,
  SwiperWrapper,
  ResultCard,
  CTAWrapper,
  CTAButton,
} from "./styles";

const resultImages = [
  {
    id: "1",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2543-1.jpg",
    alt: "Resultado de aluno 1",
  },
  {
    id: "2",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2548.jpg",
    alt: "Resultado de aluno 2",
  },
  {
    id: "3",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2549.jpg",
    alt: "Resultado de aluno 3",
  },
  {
    id: "4",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2551.jpg",
    alt: "Resultado de aluno 4",
  },
  {
    id: "5",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2553.jpg",
    alt: "Resultado de aluno 5",
  },
  {
    id: "6",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2557.jpg",
    alt: "Resultado de aluno 6",
  },
  {
    id: "7",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2567.jpg",
    alt: "Resultado de aluno 7",
  },
  {
    id: "8",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/AA62058B-20DE-4083-9AE9-C658C3EE156D.jpg",
    alt: "Resultado de aluno 8",
  },
  {
    id: "9",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2597-1.jpg",
    alt: "Resultado de aluno 9",
  },
  {
    id: "10",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2598.jpg",
    alt: "Resultado de aluno 10",
  },
  {
    id: "11",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2600-1.jpg",
    alt: "Resultado de aluno 11",
  },
  {
    id: "12",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2601.jpg",
    alt: "Resultado de aluno 12",
  },
  {
    id: "13",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2607.jpg",
    alt: "Resultado de aluno 13",
  },
  {
    id: "14",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2778.jpg",
    alt: "Resultado de aluno 14",
  },
  {
    id: "15",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2826.jpg",
    alt: "Resultado de aluno 15",
  },
  {
    id: "16",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2836.jpg",
    alt: "Resultado de aluno 16",
  },
  {
    id: "17",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2855.jpg",
    alt: "Resultado de aluno 17",
  },
  {
    id: "18",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/IMG_2865.jpg",
    alt: "Resultado de aluno 18",
  },
];

const Results: React.FC = () => {
  return (
    <ResultsContainer id="resultados">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>
            Resultados de <span>quem utiliza</span>
          </Title>
        </motion.div>
      </SectionHeader>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SwiperWrapper>
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            grabCursor={true}
          >
            {resultImages.map((image) => (
              <SwiperSlide key={image.id}>
                <ResultCard>
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={400}
                    loading="lazy"
                  />
                </ResultCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </motion.div>

      <CTAWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CTAButton href="#checkout" title="Acessar a Academia de Copy Trade">
            Acessar a Academia
          </CTAButton>
        </motion.div>
      </CTAWrapper>
    </ResultsContainer>
  );
};

export default Results;
