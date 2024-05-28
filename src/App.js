import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Services from "./Pages/Services";
import BookNow from "./Pages/BookNow";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<BookNow/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
