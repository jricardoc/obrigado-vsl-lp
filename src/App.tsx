import { GlobalStyles } from "./styles";
import {
  Hero,
  MarqueeBanner,
  Benefits,
  Access,
  Results,
  Trails,
  Learning,
  Offer,
  About,
  HowItWorks,
  Specialist,
  Audience,
  CallToAction,
  Reasons,
  Testimonials,
  FAQ,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Hero />
        <MarqueeBanner />
        <Benefits />
        <Access />
        <Results />
        <Trails />
        <Learning />
        <Offer />
        <About />
        <HowItWorks />
        <Specialist />
        <Audience />
        <CallToAction />
        <Reasons />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

export default App;
