import { useState } from "react";
import Annotation from "../components/annotation/Annotation";
import Map from "../components/map/Map";
import SearchLearn from "../components/searchLearn/SearchLearn";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [countryFound, setCountryFound] = useState("");

  return (
    <div className="height-minus-nav flex">
      <SearchLearn
        countryFound={countryFound}
        setCountryFound={setCountryFound}
      />
      {countryFound ? (
        <Map
          actionOnClick={setClickedCountry}
          searchCountry={countryFound.name.common}
        />
      ) : (
        <Map actionOnClick={setClickedCountry} />
      )}

      {clickedCountry && <Annotation country={clickedCountry} />}
    </div>
  );
};

export default Learn;
