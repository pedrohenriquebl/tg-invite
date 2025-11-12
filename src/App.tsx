import Hero from "./components/Hero";
import Info from "./components/Info";
import Team from "./components/Team";
import About from "./components/About";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Info />
      <Team />
      <About />
      <Location />
      <Footer />
    </div>
  );
}
