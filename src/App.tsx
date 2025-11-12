import Hero from "./components/Hero";
import Info from "./components/Info";
import Team from "./components/Team";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TOC from "./components/TOC";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <TOC />
      <Info />
      <Team />
      <Location />
      <Footer />
    </div>
  );
}
