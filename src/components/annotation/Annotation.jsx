import { TbBuilding } from "react-icons/tb";
import { GrCurrency } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Annotation = (country) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [countryData, setCountryData] = useState();
  const [countryPopulation, setCountryPopulation] = useState();

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

  useEffect(() => {
    countryData &&
      (countryData.population
        ? setCountryPopulation((countryData.population / 1000000).toFixed(1))
        : setCountryPopulation("n/a"));
  }, [countryData]);

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="400"
        className="absolute md:-left-16 md:right-0 md:-top-16 md:w-fit w-80 -top-16 bg-white flex flex-col justify-center p-6 shadow-lg gap-2 rounded-md border border-greyblue border-solid md:mx-8 md:my-6"
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
          <GrCurrency />
          {`Currency: ${
            countryData && countryData.currencies
              ? Object.values(countryData.currencies)[0].name
              : "n/a"
          }`}
        </p>
        <p className="flex  items-start md:items-center gap-2 text-lg">
          <IoChatbubbleEllipsesOutline />
          Languages:
          <div className="flex flex-col md:gap-2 md:flex-row">
            {countryData && countryData.languages
              ? Object.values(countryData.languages).map((language, index) => (
                  <span key={index}>{language}</span>
                ))
              : "n/a"}
          </div>
        </p>
        <p className="flex items-center gap-2 text-lg">
          <HiOutlineUsers />
          {` Population: ${countryPopulation} millions`}
        </p>
      </div>
    </>
  );
};

export default Annotation;
