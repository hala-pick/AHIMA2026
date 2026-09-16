import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Spotlight from "./components/Spotlight";
import Features from "./components/Features";
import DemoForm from "./components/DemoForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Spotlight />
        <Features />
        <DemoForm />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
