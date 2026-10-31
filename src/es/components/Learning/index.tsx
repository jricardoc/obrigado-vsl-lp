import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/swiper-bundle.css";

import {
  LearningContainer,
  SectionHeader,
  SectionLabel,
  Title,
  SwiperWrapper,
  LearningCard,
  CardNumber,
  CardTitle,
  CardDescription,
} from "../../../components/Learning/styles";

const learningItems = [
  {
    id: "1",
    title: "¿Qué es el CopyTrade?",
    description:
      "Una forma de invertir en la que las operaciones de un trader (o de varios) se replican automáticamente en tu cuenta.",
  },
  {
    id: "2",
    title: "¿Cómo funciona el CopyTrade?",
    description:
      "Conectas tu cuenta a la de un trader experimentado, y todo lo que él hace (entrada, salida, stop) pasa a ocurrir también en tu cuenta.",
  },
  {
    id: "3",
    title: "Cómo elegir buenos brókers",
    description:
      "Conoce los criterios para identificar brókers seguros, regulados y con buen soporte para Copy Trade.",
  },
  {
    id: "4",
    title: "Mentalidad de un copy trader",
    description:
      "El mindset es esencial. Aprende a gestionar expectativas y a lidiar con las oscilaciones del mercado para mantener la consistencia.",
  },
  {
    id: "5",
    title: "Métricas para elegir buenos copys",
    description:
      'Analiza datos como drawdown, historial de operaciones, consistencia de ganancias y mucho más, evitando "trampas".',
  },
  {
    id: "6",
    title: "Mi cartera personal de CopyTrade",
    description:
      "Entiende cómo y por qué elegí cada CopyTrader para mi propia cartera y cómo puedes seguir a los mismos.",
  },
  {
    id: "7",
    title: "Paso a paso para seguir los copys",
    description:
      "Desde la apertura de la cuenta en el bróker hasta el primer día de replicación de operaciones, todo está explicado.",
  },
  {
    id: "8",
    title: "Cómo no ser liquidado nunca",
    description:
      'Técnicas de gestión de riesgo y apalancamiento para que no termines "en cero" en situaciones de alta volatilidad.',
  },
  {
    id: "9",
    title: "Cómo funciona el apalancamiento",
    description:
      "Descubre qué significa apalancar tu capital y las estrategias para usarlo a tu favor sin exponerte demasiado.",
  },
  {
    id: "10",
    title: "Cómo manejar los impuestos",
    description:
      "Simplifica tu vida fiscal: entiende cómo declarar tus ganancias y evita problemas con el fisco.",
  },
  {
    id: "11",
    title: "Cómo usar MetaTrader 4",
    description:
      "Mira cómo configurar MT4 para seguir las operaciones replicadas en tiempo real.",
  },
  {
    id: "12",
    title: "Cómo usar MyFxBook",
    description:
      "Accede a gráficos y estadísticas detalladas para evaluar el desempeño de tus Copys.",
  },
  {
    id: "13",
    title: "Cómo usar la app Mobile Trader",
    description:
      "Sigue tus resultados y haz ajustes desde la palma de tu mano, sin necesidad de estar en la computadora.",
  },
  {
    id: "14",
    title: "Acceso EN VIVO a los lives semanales",
    description:
      "Participa de las transmisiones en vivo donde analizamos las últimas operaciones y estrategias y respondemos preguntas.",
  },
  {
    id: "15",
    title: "Acceso a las grabaciones de TODOS los lives",
    description:
      "¿Te perdiste el live? ¡No hay problema! Puedes ver las grabaciones cuando quieras.",
  },
  {
    id: "16",
    title: "Acceso a todas las actualizaciones",
    description:
      "Mantente siempre al día sobre los cambios en la cartera y los nuevos contenidos.",
  },
];

const Learning: React.FC = () => {
  return (
    <LearningContainer id="aprendizado">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>
            Todo lo que necesitas para invertir con consistencia en Copy Trade
          </SectionLabel>
          <Title>
            Vas a <span>aprender a:</span>
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
            modules={[FreeMode, Mousewheel]}
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={true}
            mousewheel={{
              forceToAxis: true,
            }}
            grabCursor={true}
          >
            {learningItems.map((item, index) => (
              <SwiperSlide key={item.id}>
                <LearningCard>
                  <CardNumber>{String(index + 1).padStart(2, "0")}</CardNumber>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </LearningCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </motion.div>
    </LearningContainer>
  );
};

export default Learning;
