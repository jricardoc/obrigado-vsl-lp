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
} from "./styles";

const faqItems = [
  {
    id: "1",
    question: "Quando e onde vai chegar meu acesso?",
    answer:
      "Assim que a sua assinatura for confirmada, você receberá no seu e-mail os dados de acesso para a plataforma da Academia de Copy Trade e poderá começar imediatamente.",
  },
  {
    id: "2",
    question:
      "A carteira é recomendada para investidores iniciantes ou experientes?",
    answer:
      "A carteira foi pensada para atender ambos os perfis. Os iniciantes contam com todo o suporte para começar do zero, enquanto os mais experientes encontram estratégias avançadas e possibilidade de personalização.",
  },
  {
    id: "3",
    question: "É muito arriscado investir em CopyTrade?",
    answer:
      "Todo investimento em renda variável tem risco, mas nosso foco é justamente ensinar como gerenciar esses riscos e como escolher bons traders para replicar. A diversificação também ajuda a reduzir a exposição.",
  },
  {
    id: "4",
    question: "Como funciona a carteira de CopyTrade da Academia?",
    answer:
      "É uma seleção de CopyTraders que seguem critérios objetivos de performance e consistência. Ao entrar, você aprende a replicar exatamente o que faço, ou escolher individualmente quais Copys seguir.",
  },
  {
    id: "5",
    question: "Onde fica o dinheiro que invisto na carteira?",
    answer:
      "O dinheiro permanece na sua conta da corretora. Você só autoriza a replicação das operações, mas não transfere fundos para terceiros.",
  },
  {
    id: "6",
    question: "Posso acessar o material por quanto tempo?",
    answer:
      "Enquanto durar a sua assinatura, você tem acesso ilimitado a todos os conteúdos, lives gravadas, atualizações de carteira e suporte.",
  },
  {
    id: "7",
    question: "Vou lucrar 20% ao mês com a carteira?",
    answer:
      "Não fazemos promessas de rentabilidade fixa. O que garantimos é um método transparente, baseado em dados, e o suporte necessário para buscar consistência no longo prazo.",
  },
  {
    id: "8",
    question: "E se eu tiver dificuldade com o conteúdo?",
    answer:
      "Você pode recorrer ao nosso canal de suporte 24/7, interagir com outros alunos no grupo exclusivo e participar das lives semanais para esclarecer qualquer dúvida.",
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
              Ainda está com <span>dúvidas?</span>
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
                  aria-label={`${openId === item.id ? "Fechar" : "Abrir"} pergunta: ${item.question}`}
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
