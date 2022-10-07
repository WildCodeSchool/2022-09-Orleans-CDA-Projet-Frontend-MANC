import { useState } from "react";
import Annotation from "../components/annotation/Annotation";
import Map from "../components/map/Map";
import "./learn.css";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");

  return (
    <div className="height-minus-nav flex">
      <Map actionOnClick={setClickedCountry} />
      {clickedCountry && <Annotation country={clickedCountry} />}
    </div>
  );
};

export default Learn;
