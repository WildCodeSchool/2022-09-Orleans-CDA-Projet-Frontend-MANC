import { useState } from "react";
import Map from "../components/map/Map";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");

  return (
    <div>
      <Map actionOnClick={setClickedCountry} />
    </div>
  );
};

export default Learn;
