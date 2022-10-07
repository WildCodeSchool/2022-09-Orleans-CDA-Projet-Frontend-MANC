import "./annotation.css";
import { TbBuilding } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Annotation = () => {
  const [countryData, setCountryData] = useState();

  async function getResponse() {
    const res = await fetch("https://restcountries.com/v3.1/name/uae");
    const data = await res.json();
    setCountryData(data[0]);
  }

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <>
      <div className="flex w-fit flex-col justify-center p-6 shadow-lg gap-2 rounded-md border border-greyblue border-solid m-5">
        <h2 className="text-2xl text-center font-semibold mb-4">
          {countryData && countryData.name.common}
        </h2>
        <p className="flex items-center gap-2 text-lg">
          <TbBuilding />
          Capital: {countryData && countryData.capital[0]}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <HiOutlineCurrencyDollar />
          Currency:{" "}
          {countryData && Object.values(countryData.currencies)[0].name}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <IoChatbubbleEllipsesOutline />
          Languages:{" "}
          {countryData &&
            Object.values(countryData.languages).map((language, index) => (
              <span key={index}>{language}</span>
            ))}
        </p>
      </div>
    </>
  );
};

export default Annotation;
