import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import {
  slideInLeftVariant,
  slideInRightVariant,
} from "../../hooks/useScrollAnimation";
import {
  SpecialistContainer,
  ContentWrapper,
  SectionHeader,
  Title,
  Subtitle,
  SliderFullWidth,
  SpecialistSlide,
  SpecialistImage,
  BackgroundOrb,
} from "./styles";

const specialistImages = [
  {
    id: "1",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/12/p-1.webp",
    alt: "Hendi - Foto 1",
  },
  {
    id: "2",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/12/p-2.webp",
    alt: "Hendi - Foto 2",
  },
  {
    id: "3",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/12/p-3.webp",
    alt: "Hendi - Foto 3",
  },
  {
    id: "4",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/12/p-4.webp",
    alt: "Hendi - Foto 4",
  },
  {
    id: "5",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/12/p-5.webp",
    alt: "Hendi - Foto 5",
  },
  {
    id: "6",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/12/p-6.webp",
    alt: "Hendi - Foto 6",
  },
  {
    id: "7",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/12/p-7.webp",
    alt: "Hendi - Foto 7",
  },
  {
    id: "8",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/12/p-8.webp",
    alt: "Hendi - Foto 8",
  },
  {
    id: "9",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/12/p-9.webp",
    alt: "Hendi - Foto 9",
  },
  {
    id: "10",
    src: "https://www.ocaradocopytrade.com/wp-content/uploads/2025/12/p-10.webp",
    alt: "Hendi - Foto 10",
  },
];

const Specialist: React.FC = () => {
  return (
    <SpecialistContainer id="especialista">
      <BackgroundOrb $position="left" />
      <BackgroundOrb $position="right" />

      <ContentWrapper>
        <SectionHeader>
          <motion.div
            variants={slideInLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Title>
              Quem é o <span>Especialista</span>?
            </Title>
          </motion.div>
          <motion.div
            variants={slideInRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Subtitle>
              Conheça um pouco mais sobre quem está por trás do Protocolo
            </Subtitle>
          </motion.div>
        </SectionHeader>
      </ContentWrapper>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SliderFullWidth>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            breakpoints={{
              768: { slidesPerView: 3, spaceBetween: 12 },
              1024: { slidesPerView: 4, spaceBetween: 16 },
            }}
          >
            {specialistImages.map((image) => (
              <SwiperSlide key={image.id}>
                <SpecialistSlide>
                  <SpecialistImage
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={400}
                    loading="lazy"
                  />
                </SpecialistSlide>
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderFullWidth>
      </motion.div>
    </SpecialistContainer>
  );
};

export default Specialist;
