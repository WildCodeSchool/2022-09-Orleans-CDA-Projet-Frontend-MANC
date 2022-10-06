import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Learn from "./pages/Learn";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/play" />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" />
      </Routes>
    </div>
  );
}

export default App;
