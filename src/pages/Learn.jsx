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
    <div className="height-minus-nav flex justify-center items-center bg-quiz">
      <div className="h-4/5 w-4/5 p-1 relative flex rounded-lg border-solid border-2 border-cyan-900 shadow-2xl bg-cyan-900">
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
    </div>
  );
};

export default Learn;
