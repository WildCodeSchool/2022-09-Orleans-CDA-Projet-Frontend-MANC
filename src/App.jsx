import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";
import Learn from "./pages/Learn";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<HowToPlay />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" />
      </Routes>
    </div>
  );
}

export default App;
