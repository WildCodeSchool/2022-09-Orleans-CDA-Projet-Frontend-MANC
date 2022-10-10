import { useEffect, useState } from "react";
import Map from "../components/map/Map";
import Question from "../components/question/Question";
import countryData from "../assets/countriesData.json";

const Quiz = () => {
  const [clickedCountryCode, setClickedCountryCode] = useState("");
  const [markerCoordinates, setMarkerCoordinates] = useState("");

  useEffect(() => {
    const clickedCountryData = countryData.filter((data) => {
      return data.id === clickedCountryCode;
    });
    if (clickedCountryData[0]) {
      setMarkerCoordinates(clickedCountryData[0].coord);
    }
  }, [clickedCountryCode]);

  return (
    <div className="height-minus-nav">
      <Map
        actionOnClick={setClickedCountryCode}
        markerCoordinates={markerCoordinates}
      />
      <Question />
    </div>
  );
};

export default Quiz;
