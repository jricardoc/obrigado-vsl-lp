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
} from "../../../components/MarqueeBanner/styles";

const items = [
  {
    icon: FaChartLine,
    text: "Aprende a elegir los mejores brókers",
  },
  {
    icon: FaUserTie,
    text: "Desarrolla una cartera personalizada para ti",
  },
  {
    icon: FaShieldAlt,
    text: "Nunca más caes en pirámides ni estafas",
  },
  {
    icon: FaChartPie,
    text: "Crea una cartera bien diversificada",
  },
  {
    icon: FaWallet,
    text: "Gestiona tus resultados de forma consistente",
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
    <MarqueeContainer aria-label="Beneficios de la Academia de Copy Trade">
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
