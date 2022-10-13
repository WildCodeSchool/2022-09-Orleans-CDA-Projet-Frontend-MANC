import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Recap from "./components/recap/Recap";
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
        <Route path="/about" />
        <Route path="/recap" element={<Recap />} />
      </Routes>
    </div>
  );
}

export default App;
