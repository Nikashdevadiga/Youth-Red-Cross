import './index.css'; // or './App.css' depending on your setup
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Coordinators from "./components/Coordinators";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Home />
      <About />
      <Coordinators/>
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
