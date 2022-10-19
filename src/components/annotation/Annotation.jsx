import { TbBuilding } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Annotation = (country) => {
  const [countryData, setCountryData] = useState();

  async function getResponse() {
    const res = await fetch(
      "https://restcountries.com/v3.1/alpha/" + country.country
    );
    const data = await res.json();
    setCountryData(data[0]);
  }

  useEffect(() => {
    getResponse();
  }, [country]);

  return (
    <>
      <div className="absolute bg-white flex w-fit flex-col justify-center p-6 shadow-lg gap-2 rounded-md border border-greyblue border-solid m-5">
        <h2 className="text-2xl text-center font-semibold mb-4">
          {countryData && countryData.name.common + " " + countryData.flag}
        </h2>
        <p className="flex items-center gap-2 text-lg">
          <TbBuilding />
          {countryData && countryData.capital
            ? `Capital: ${countryData.capital[0]}`
            : "Capital: n/a"}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <HiOutlineCurrencyDollar />
          {`Currency: ${
            countryData && Object.values(countryData.currencies)[0].name
          }`}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <IoChatbubbleEllipsesOutline />
          Languages:
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
