import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./components/notFound/NotFound";
import Result from "./components/result/Result";
import About from "./pages/About";
import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<HowToPlay />} />
        <Route path="/play/quiz" element={<Quiz />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
