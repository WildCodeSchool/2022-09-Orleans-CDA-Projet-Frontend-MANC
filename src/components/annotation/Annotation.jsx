import { TbBuilding } from "react-icons/tb";
import { GrCurrency } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Annotation = ({ countryData }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [countryPopulation, setCountryPopulation] = useState();

  useEffect(() => {
    countryData &&
      (countryData.population
        ? countryData.population > 1000000
          ? setCountryPopulation((countryData.population / 1000000).toFixed(1))
          : setCountryPopulation(countryData.population)
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
          {countryData?.name?.common &&
            countryData.name.common + " " + countryData.flag}
        </h2>
        <p className="flex items-center gap-2 text-lg">
          <TbBuilding />
          {countryData?.capital
            ? `Capital: ${countryData.capital[0]}`
            : "Capital: n/a"}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <GrCurrency />
          {`Currency: ${
            countryData?.currencies
              ? Object.values(countryData.currencies)[0].name
              : "n/a"
          }`}
        </p>
        <div className="flex items-start md:items-center gap-2 text-lg">
          <IoChatbubbleEllipsesOutline />
          Languages:
          <div className="flex flex-col md:gap-2 md:flex-row">
            {countryData?.languages
              ? Object.values(countryData.languages).map((language, index) => (
                  <span key={index}>{language}</span>
                ))
              : "n/a"}
          </div>
        </div>
        <p className="flex items-center gap-2 text-lg">
          <HiOutlineUsers />
          {`Population: ${countryPopulation} ${
            countryData?.population > 1000000
              ? "millions"
              : countryData?.population
              ? "inhabitants"
              : ""
          } `}
        </p>
      </div>
    </>
  );
};

export default Annotation;
