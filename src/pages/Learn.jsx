import { useState } from "react";
import Map from "../components/map/Map";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");

  return (
    <div className="h-screen">
      <Map actionOnClick={setClickedCountry} />
    </div>
  );
};

export default Learn;
