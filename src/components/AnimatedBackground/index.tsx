import React from "react";
import {
  AnimatedBgContainer,
  ChartLine,
  CandlestickPattern,
  Candlestick,
  PercentageOrb,
  GridPattern,
  FloatingOrb,
  DiagonalLines,
  NoiseTexture,
} from "./styles";

interface TradingBackgroundProps {
  variant?: "primary" | "secondary" | "mixed";
  showGrid?: boolean;
  showNoise?: boolean;
  showChart?: boolean;
  showCandlesticks?: boolean;
  showPercentages?: boolean;
  showOrbs?: boolean;
  showDiagonals?: boolean;
}

const TradingBackground: React.FC<TradingBackgroundProps> = ({
  variant = "mixed",
  showGrid = false,
  showNoise = true,
  showChart = false,
  showCandlesticks = false,
  showPercentages = false,
  showOrbs = true,
  showDiagonals = false,
}) => {
  return (
    <AnimatedBgContainer $variant={variant}>
      {showGrid && <GridPattern />}
      {showNoise && <NoiseTexture />}

      {showChart && (
        <>
          <ChartLine $position="left" viewBox="0 0 300 150">
            <path d="M0,100 Q50,120 75,80 T150,90 T225,40 T300,60" />
          </ChartLine>
          <ChartLine $position="right" viewBox="0 0 300 150">
            <path d="M0,80 Q75,30 100,70 T175,50 T250,90 T300,40" />
          </ChartLine>
        </>
      )}

      {showCandlesticks && (
        <>
          <CandlestickPattern $top="15%" $left="8%">
            <Candlestick $height={40} $color="green" />
            <Candlestick $height={60} $color="red" />
            <Candlestick $height={35} $color="green" />
            <Candlestick $height={55} $color="green" />
            <Candlestick $height={45} $color="red" />
          </CandlestickPattern>
          <CandlestickPattern $bottom="20%" $right="10%">
            <Candlestick $height={50} $color="green" />
            <Candlestick $height={35} $color="green" />
            <Candlestick $height={65} $color="red" />
            <Candlestick $height={40} $color="green" />
          </CandlestickPattern>
        </>
      )}

      {showPercentages && (
        <>
          <PercentageOrb $size={80} $top="10%" $left="5%" $delay={0}>
            +12%
          </PercentageOrb>
          <PercentageOrb $size={60} $top="60%" $right="8%" $delay={2}>
            +8%
          </PercentageOrb>
          <PercentageOrb $size={70} $bottom="15%" $left="12%" $delay={1}>
            +15%
          </PercentageOrb>
        </>
      )}

      {showOrbs && (
        <>
          <FloatingOrb
            $size={400}
            $color="primary"
            $top="-10%"
            $left="-10%"
            $blur={30}
          />
          <FloatingOrb
            $size={300}
            $color="secondary"
            $bottom="-5%"
            $right="-5%"
            $blur={20}
          />
        </>
      )}

      {showDiagonals && (
        <>
          <DiagonalLines $position="topLeft" />
          <DiagonalLines $position="bottomRight" />
        </>
      )}
    </AnimatedBgContainer>
  );
};

export default TradingBackground;
