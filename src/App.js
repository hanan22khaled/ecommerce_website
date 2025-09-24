import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "../src/routes/Shop";
import Contact from "../src/routes/Contact";
import Blog from "../src/pages/blog"
import About from './pages/about'
import Header from "./components/header/header"
import Home from "./pages/home/Home"
import Footer from "./pages/footer/footer"
import Checkout from "./pages/Checkout";
import "./App.css"
export default function App() {
  return (
    <Router>
      <Header />

      {/* الراوتينج */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/Checkout" element={<Checkout />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
