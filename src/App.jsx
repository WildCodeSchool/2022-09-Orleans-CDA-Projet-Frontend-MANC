import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Result from "./components/result/Result";
import About from "./pages/About";
import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<HowToPlay />} />
        <Route path="/play/quiz" element={<Quiz />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
