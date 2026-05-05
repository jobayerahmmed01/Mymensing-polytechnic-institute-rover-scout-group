import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Activities from "./pages/Activities";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members" element={<Members />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
