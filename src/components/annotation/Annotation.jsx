import { TbBuilding } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Annotation = (country) => {
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const getResponse = async () => {
      const res = await fetch(
        "https://restcountries.com/v3.1/alpha/" + country.country
      );
      const data = await res.json();
      setCountryData(data[0]);
    };
    getResponse();
  }, [country]);

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="400"
        className="absolute -left-16 right-0 -top-16 w-fit bg-white flex flex-col justify-center p-6 shadow-lg gap-2 rounded-md border border-greyblue border-solid m-5"
      >
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
            countryData && countryData.currencies
              ? Object.values(countryData.currencies)[0].name
              : "n/a"
          }`}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <IoChatbubbleEllipsesOutline />
          Languages:
          {countryData && countryData.languages
            ? Object.values(countryData.languages).map((language, index) => (
                <span key={index}>{language}</span>
              ))
            : "n/a"}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <HiOutlineUsers />
          {` Population: 
            ${
              countryData && countryData.population
                ? `${(countryData.population / 1000000).toFixed(1)} millions`
                : "n/a"
            }`}
        </p>
      </div>
    </>
  );
};

export default Annotation;
