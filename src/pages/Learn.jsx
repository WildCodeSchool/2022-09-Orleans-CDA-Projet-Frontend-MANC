import { useEffect, useState } from "react";
import Annotation from "../components/annotation/Annotation";
import Map from "../components/map/Map";
import SearchLearn from "../components/searchLearn/SearchLearn";
import countries from "../assets/countriesData.json";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [countrySearchFound, setCountrySearchFound] = useState("");
  const [markerFoundCoordinate, setMarkerFoundCoordinate] = useState("");

  useEffect(() => {
    setClickedCountry(countrySearchFound);
  }, [countrySearchFound]);

  useEffect(() => {
    setCountrySearchFound(clickedCountry);
  }, [clickedCountry]);

  useEffect(() => {
    if (clickedCountry) {
      const foundCountryData = countries.find(
        (data) => data.id === clickedCountry
      );
      if (foundCountryData) {
        setMarkerFoundCoordinate(foundCountryData.coord);
      }
    } else {
      setMarkerFoundCoordinate("");
    }
  }, [clickedCountry]);

  return (
    <div className="height-minus-nav flex justify-center items-center bg-quiz">
      <div className="h-4/5 w-[90%] p-1 relative flex rounded-lg border-solid border-2 border-slate-300 shadow-2xl bg-slate-300">
        <SearchLearn setCountrySearchFound={setCountrySearchFound} />
        <Map
          actionOnClick={setClickedCountry}
          clickedCountry={clickedCountry ? clickedCountry : countrySearchFound}
          markerCoordinates={markerFoundCoordinate}
        />
        {clickedCountry && <Annotation country={clickedCountry} />}
      </div>
    </div>
  );
};

export default Learn;
