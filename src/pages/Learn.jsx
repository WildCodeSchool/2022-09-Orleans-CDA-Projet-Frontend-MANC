import { useState } from "react";
import Map from "../components/map/Map";
import "./learn.css";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");

  return (
    <div className="height-minus-nav">
      <Map actionOnClick={setClickedCountry} />
    </div>
  );
};

export default Learn;
