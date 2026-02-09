import {
  FaChartLine,
  FaShieldAlt,
  FaUserTie,
  FaWallet,
  FaChartPie,
} from "react-icons/fa";
import {
  MarqueeContainer,
  MarqueeTrack,
  MarqueeContent,
  MarqueeItem,
  Separator,
  GradientEdge,
} from "./styles";

const items = [
  {
    icon: FaChartLine,
    text: "Aprende a selecionar as melhores corretoras",
  },
  {
    icon: FaUserTie,
    text: "Desenvolve uma carteira personalizada para você",
  },
  {
    icon: FaShieldAlt,
    text: "Nunca mais cai em pirâmides e golpes",
  },
  {
    icon: FaChartPie,
    text: "Cria uma carteira bem diversificada",
  },
  {
    icon: FaWallet,
    text: "Gerencia seus resultados de maneira consistente",
  },
];

const MarqueeBanner: React.FC = () => {
  const renderItems = () => (
    <>
      {items.map((item, index) => (
        <MarqueeContent key={index}>
          <MarqueeItem>
            <item.icon aria-hidden="true" />
            <span>{item.text}</span>
          </MarqueeItem>
          <Separator />
        </MarqueeContent>
      ))}
    </>
  );

  return (
    <MarqueeContainer aria-label="Benefícios da Academia de Copy Trade">
      <GradientEdge position="left" />
      <MarqueeTrack>
        {renderItems()}
        {renderItems()}
      </MarqueeTrack>
      <GradientEdge position="right" />
    </MarqueeContainer>
  );
};

export default MarqueeBanner;
