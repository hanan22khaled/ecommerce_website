import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shop from "../src/routes/Shop";
import Contact from "../src/routes/Contact";

export default function App() {
  return (
    <Router>
      {/* الهيدر */}
      <nav className="bg-gray-800 text-white p-4 flex space-x-6">
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      {/* الراوتينج */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<h1 className="text-2xl">Welcome to Home Page</h1>} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />

          
        </Routes>
      </div>
    </Router>
  );
}
