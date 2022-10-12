import { useState } from "react";
import Annotation from "../components/annotation/Annotation";
import Map from "../components/map/Map";
import SearchLearn from "../components/searchLearn/SearchLearn";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [searchLearn, setSearchLearn] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  return (
    <div className="height-minus-nav flex">
      <SearchLearn
        searchLearn={searchLearn}
        setSearchLearn={setSearchLearn}
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
      />
      {countrySearch ? (
        <Map
          actionOnClick={setClickedCountry}
          searchCountry={countrySearch.name.common}
        />
      ) : (
        <Map actionOnClick={setClickedCountry} searchCountry={searchLearn} />
      )}

      {clickedCountry && <Annotation country={clickedCountry} />}
    </div>
  );
};

export default Learn;
