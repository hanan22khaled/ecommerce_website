import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shop from "../src/routes/Shop";
import Contact from "../src/routes/Contact";
import Blog from "../src/pages/about"
import About from './pages/about'
import Header from "./components/header/header"
import Footer from "./pages/footer/footer"

export default function App() {
  return (
    <Router>
      <Header/>

      {/* الراوتينج */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<h1 className="text-2xl">Welcome to Home Page</h1>} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}
