import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

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
    </div>
  );
}

export default App;
