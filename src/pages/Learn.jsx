import { useState } from "react";
import Map from "../components/map/Map";
import SearchLearn from "../components/searchLearn/SearchLearn";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [searchLearn, setSearchLearn] = useState("");

  return (
    <div className="height-minus-nav">
      <SearchLearn searchLearn={searchLearn} setSearchLearn={setSearchLearn} />
      <Map actionOnClick={setClickedCountry} searchCountry={searchLearn} />
    </div>
  );
};

export default Learn;
