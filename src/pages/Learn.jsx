import { useEffect, useState } from "react";
import Annotation from "../components/annotation/Annotation";
import Map from "../components/map/Map";
import SearchLearn from "../components/searchLearn/SearchLearn";
import countries from "../assets/countriesData.json";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [countrySearchFound, setCountrySearchFound] = useState("");
  const [countryFound, setCountryFound] = useState("");
  const [markerFoundCoordinate, setMarkerFoundCoordinate] = useState("");

  useEffect(() => {
    setClickedCountry(countryFound);
  }, [countryFound]);

  useEffect(() => {
    if (countrySearchFound) {
      console.log(countrySearchFound);
      const foundCountryData = countries.find((data) => {
        return data.id === countrySearchFound.cca3;
      });
      if (foundCountryData) {
        setMarkerFoundCoordinate(foundCountryData.coord);
      }
    } else {
      setMarkerFoundCoordinate("");
    }
  }, [countrySearchFound]);

  return (
    <div className="height-minus-nav flex">
      <SearchLearn setCountrySearchFound={setCountrySearchFound} />
      {countrySearchFound ? (
        <Map
          actionOnClick={setClickedCountry}
          searchCountry={countrySearchFound.name.common}
          setCountryFound={setCountryFound}
          clickedCountry={clickedCountry}
          markerFoundCoordinate={markerFoundCoordinate}
        />
      ) : (
        <Map actionOnClick={setClickedCountry} />
      )}

      {clickedCountry && <Annotation country={clickedCountry} />}
    </div>
  );
};

export default Learn;
