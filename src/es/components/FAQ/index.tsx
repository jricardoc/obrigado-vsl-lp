import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import {
  FAQContainer,
  ContentWrapper,
  SectionHeader,
  Title,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQAnswerInner,
  FAQAnswerContent,
} from "../../../components/FAQ/styles";

const faqItems = [
  {
    id: "1",
    question: "¿Cuándo y dónde llega mi acceso?",
    answer:
      "En cuanto se confirme tu suscripción, vas a recibir en tu correo los datos de acceso a la plataforma de la Academia de Copy Trade y podrás empezar de inmediato.",
  },
  {
    id: "2",
    question:
      "¿La cartera es recomendable para inversionistas principiantes o experimentados?",
    answer:
      "La cartera fue pensada para ambos perfiles. Los principiantes cuentan con todo el soporte para empezar desde cero, mientras que los más experimentados encuentran estrategias avanzadas y la posibilidad de personalizarla.",
  },
  {
    id: "3",
    question: "¿Es muy arriesgado invertir en CopyTrade?",
    answer:
      "Toda inversión en renta variable tiene riesgo, pero nuestro foco es justamente enseñarte a gestionar esos riesgos y a elegir buenos traders para replicar. La diversificación también ayuda a reducir la exposición.",
  },
  {
    id: "4",
    question: "¿Cómo funciona la cartera de CopyTrade de la Academia?",
    answer:
      "Es una selección de CopyTraders que cumplen criterios objetivos de desempeño y consistencia. Al entrar, aprendes a replicar exactamente lo que hago o a elegir individualmente qué Copys seguir.",
  },
  {
    id: "5",
    question: "¿Dónde queda el dinero que invierto en la cartera?",
    answer:
      "El dinero se queda en tu cuenta del bróker. Solo autorizas la replicación de las operaciones; no transfieres fondos a terceros.",
  },
  {
    id: "6",
    question: "¿Por cuánto tiempo puedo acceder al material?",
    answer:
      "Mientras dure tu suscripción, tienes acceso ilimitado a todos los contenidos, lives grabados, actualizaciones de la cartera y soporte.",
  },
  {
    id: "7",
    question: "¿Voy a ganar 20% al mes con la cartera?",
    answer:
      "No hacemos promesas de rentabilidad fija. Lo que garantizamos es un método transparente, basado en datos, y el soporte necesario para buscar consistencia a largo plazo.",
  },
  {
    id: "8",
    question: "¿Y si tengo dificultades con el contenido?",
    answer:
      "Puedes recurrir a nuestro canal de soporte 24/7, interactuar con otros alumnos en el grupo exclusivo y participar de los lives semanales para resolver cualquier duda.",
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <FAQContainer id="faq">
      <ContentWrapper>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title>
              ¿Todavía tienes <span>dudas?</span>
            </Title>
          </motion.div>
        </SectionHeader>

        <FAQList>
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <FAQItem $isOpen={openId === item.id}>
                <FAQQuestion
                  $isOpen={openId === item.id}
                  onClick={() => toggleItem(item.id)}
                  aria-label={`${openId === item.id ? "Cerrar" : "Abrir"} pregunta: ${item.question}`}
                  aria-expanded={openId === item.id}
                >
                  {item.question}
                  <FaChevronDown aria-hidden="true" />
                </FAQQuestion>
                <FAQAnswer $isOpen={openId === item.id}>
                  <FAQAnswerInner>
                    <FAQAnswerContent $isOpen={openId === item.id}>
                      {item.answer}
                    </FAQAnswerContent>
                  </FAQAnswerInner>
                </FAQAnswer>
              </FAQItem>
            </motion.div>
          ))}
        </FAQList>
      </ContentWrapper>
    </FAQContainer>
  );
};

export default FAQ;
