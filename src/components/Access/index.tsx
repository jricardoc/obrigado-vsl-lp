import { motion } from "framer-motion";
import { FaPlay, FaUsers, FaChartLine, FaStar } from "react-icons/fa";
import {
  AccessContainer,
  ContentWrapper,
  SectionHeader,
  Title,
  CardsGrid,
  Card,
  IconWrapper,
  CardTitle,
  CardDescription,
  CTAWrapper,
  CTAButton,
  BackgroundOrb,
} from "./styles";

const accessCards = [
  {
    id: "aulas",
    icon: FaPlay,
    title: "Aulas, lives e conteúdos gravados",
    description:
      "São mais de 90 conteúdos sempre atualizados lhe explicando literalmente TUDO sobre o mercado de copy trade, desde o básico de corretoras até imposto de renda!",
  },
  {
    id: "grupo",
    icon: FaUsers,
    title: "Grupo exclusivo de investidores",
    description:
      "Conecte-se com uma comunidade de investidores que realmente investem e vivem de copy trade. Desde pessoas com $100 a pessoas com $1.000.000. Todos juntos ensinando um ao outro.",
  },
  {
    id: "carteira",
    icon: FaChartLine,
    title: "Carteira de Copy Traders da Academia",
    description:
      "Explicação, tutoriais e links de acesso para os melhores copy traders do mercado que eu e meus alunos investimos! Sim, você pode ter o mesmo resultado que eu tenho.",
  },
  {
    id: "projetos",
    icon: FaStar,
    title: "Projetos Exclusivos",
    description:
      "Tenha acesso a contas PAMM, ETF's e copy traders fechados ao público varejo, disponível somente para alunos da academia!",
  },
];

const Access: React.FC = () => {
  return (
    <AccessContainer id="acesso">
      <BackgroundOrb $position="left" />
      <BackgroundOrb $position="right" />
      <ContentWrapper>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title>
              O que você <span>terá acesso?</span>
            </Title>
          </motion.div>
        </SectionHeader>

        <CardsGrid>
          {accessCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ height: "100%" }}
            >
              <Card>
                <IconWrapper>
                  <card.icon aria-hidden="true" />
                </IconWrapper>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </CardsGrid>

        <CTAWrapper>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CTAButton
              href="#checkout"
              title="Acessar a Academia de Copy Trade"
            >
              Acessar a Academia
            </CTAButton>
          </motion.div>
        </CTAWrapper>
      </ContentWrapper>
    </AccessContainer>
  );
};

export default Access;
