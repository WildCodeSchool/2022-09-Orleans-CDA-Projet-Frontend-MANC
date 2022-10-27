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
    <div>
      <div className="absolute z-30 top-[80px] flex flex-col items-center height-minus-nav w-full">
        <div className="height-minus-nav flex justify-center items-center w-full">
          <div className="h-4/5 w-[90%] p-1 relative flex rounded-lg border-solid border-2 border-cyan-900 shadow-2xl bg-cyan-900">
            <SearchLearn setCountrySearchFound={setCountrySearchFound} />
            <Map
              actionOnClick={setClickedCountry}
              clickedCountry={
                clickedCountry ? clickedCountry : countrySearchFound
              }
              markerCoordinates={markerFoundCoordinate}
            />
            {clickedCountry && <Annotation country={clickedCountry} />}
          </div>
        </div>
      </div>
      <div className="z-10 h-full absolute w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute object-fill w-full h-full"
          poster="./img_video4.png"
        >
          <source
            src="http://37.187.90.23/mapquest/vid/home4new.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Learn;
