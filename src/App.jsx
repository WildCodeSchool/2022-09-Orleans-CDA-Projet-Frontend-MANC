import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import HowToPlay from "./pages/HowToPlay";
import Learn from "./pages/Learn";
import Quizz from "./pages/Quizz";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/play" element={<HowToPlay />} />
        <Route path="/play/quizz" element={<Quizz />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" />
      </Routes>
    </div>
  );
}

export default App;
