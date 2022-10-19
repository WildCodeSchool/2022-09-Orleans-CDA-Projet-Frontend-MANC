import { useEffect, useState } from "react";
import Annotation from "../components/annotation/Annotation";
import Map from "../components/map/Map";
import SearchLearn from "../components/searchLearn/SearchLearn";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [countrySearchFound, setCountrySearchFound] = useState("");

  useEffect(() => {
    setClickedCountry(countrySearchFound);
  }, [countrySearchFound]);

  useEffect(() => {
    setCountrySearchFound(clickedCountry);
  }, [clickedCountry]);

  return (
    <div className="height-minus-nav flex">
      <SearchLearn setCountrySearchFound={setCountrySearchFound} />
      <Map
        actionOnClick={setClickedCountry}
        clickedCountry={clickedCountry ? clickedCountry : countrySearchFound}
      />
      {clickedCountry && <Annotation country={clickedCountry} />}
    </div>
  );
};

export default Learn;
