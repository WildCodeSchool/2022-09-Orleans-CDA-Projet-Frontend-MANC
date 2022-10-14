import { useEffect, useState } from "react";
import Annotation from "../components/annotation/Annotation";
import Map from "../components/map/Map";
import SearchLearn from "../components/searchLearn/SearchLearn";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [countrySearchFound, setCountrySearchFound] = useState("");
  const [countryFound, setCountryFound] = useState("");

  useEffect(() => {
    setClickedCountry(countryFound);
  }, [countryFound]);

  return (
    <div className="height-minus-nav flex">
      <SearchLearn setCountrySearchFound={setCountrySearchFound} />
      {countrySearchFound ? (
        <Map
          actionOnClick={setClickedCountry}
          searchCountry={countrySearchFound.name.common}
          setCountryFound={setCountryFound}
          clickedCountry={clickedCountry}
        />
      ) : (
        <Map actionOnClick={setClickedCountry} />
      )}

      {clickedCountry && <Annotation country={clickedCountry} />}
    </div>
  );
};

export default Learn;
