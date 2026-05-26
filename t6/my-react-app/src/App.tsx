import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./User";
import Products from "./Products";
import Laptop from "./Laptop";
import Phone from "./Phone";

function App() {
  return (
    <BrowserRouter>
      <h1>My React App</h1>

      <nav
        style={{
          padding: "15px",
          background: "#111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "white" }}>
          About
        </Link>

        <Link to="/contact" style={{ color: "white" }}>
          Contact
        </Link>

        <Link to="/users" style={{ color: "white" }}>
          Users
        </Link>

        <Link to="/products" style={{ color: "white" }}>
          Products
        </Link>

        <Link to="/laptop" style={{ color: "white" }}>
          Laptop
        </Link>

        <Link to="/phone" style={{ color: "white" }}>
          Phone
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />

        {/* Add these routes */}
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;