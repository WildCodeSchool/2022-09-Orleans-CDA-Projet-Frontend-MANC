import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Question from "./components/question/Question";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/play" />
        <Route path="/learn" />
        <Route path="/about" />
      </Routes>
      <Navbar />
      <Question />
    </div>
  );
}

export default App;
