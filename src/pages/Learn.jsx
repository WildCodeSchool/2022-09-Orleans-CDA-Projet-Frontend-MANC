import { useEffect, useState } from "react";
import Annotation from "../components/annotation/Annotation";
import Map from "../components/map/Map";
import SearchLearn from "../components/searchLearn/SearchLearn";
import countries from "../assets/countriesData.json";

const Learn = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [countrySearchFound, setCountrySearchFound] = useState("");
  const [markerFoundCoordinate, setMarkerFoundCoordinate] = useState("");
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    countrySearchFound
      ? setClickedCountry(countrySearchFound)
      : setCountryData();
  }, [countrySearchFound]);

  useEffect(() => {
    setCountrySearchFound(clickedCountry);
  }, [clickedCountry]);

  useEffect(() => {
    if (clickedCountry) {
      const getResponse = async () => {
        const res = await fetch(
          "https://restcountries.com/v3.1/alpha/" + clickedCountry
        );
        const data = await res.json();
        setCountryData(data[0]);
      };
      getResponse();

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
      <div className="fixed top-0 -z-10 h-full w-full">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          poster="./img_video4.png"
        >
          <source
            src="https://destale-oracle.ddns.net/mapquest/vid/home4new.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute z-30 top-[80px] flex flex-col items-center height-minus-nav w-full">
        <div className="height-minus-nav flex justify-center items-center w-full">
          <div className="h-4/5 w-[90%] p-1 relative flex flex-col items-center rounded-lg border-solid shadow-2xl bg-slate-300">
            <Map
              actionOnClick={setClickedCountry}
              clickedCountry={
                clickedCountry ? clickedCountry : countrySearchFound
              }
              markerCoordinates={markerFoundCoordinate}
            />
            {countryData && <Annotation countryData={countryData} />}
            <SearchLearn setCountrySearchFound={setCountrySearchFound} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
