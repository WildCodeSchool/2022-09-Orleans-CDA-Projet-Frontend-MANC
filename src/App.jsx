import { Route, Routes } from "react-router-dom";
import "./App.css";
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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
