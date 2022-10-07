import "./annotation.css";
import { TbBuilding } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Annotation = () => {
  const [countryName, setCountryName] = useState("");
  const [countryCurrency, setCountryCurrency] = useState("");
  const [countryLanguage, setCountryLanguage] = useState({});

  async function getResponse() {
    const res = await fetch("https://restcountries.com/v3.1/name/peru");
    const data = await res.json();
    setCountryName(data[0].name.common);
    // setCountryCurrency(data[0].languages);
    // setCountryLanguage(data[0].languages);
    // console.log(data[0].languages);
    // console.log(countryLanguage);
  }

  useEffect(() => {
    getResponse();
  });

  return (
    <>
      <div className="flex flex-col w-96 justify-center p-6 shadow-lg gap-2 rounded-md border border-greyblue border-solid m-5">
        <h2 className="text-2xl text-center font-semibold mb-4">France</h2>
        <p className="flex items-center gap-2 text-lg">
          <TbBuilding />
          {countryName}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <HiOutlineCurrencyDollar />
          Currency:{" "}
        </p>
        {/* <p className="flex items-center gap-2 text-lg"><IoChatbubbleEllipsesOutline />Language: {countryLanguage.map(language => <span>{language}</span>)}</p> */}
      </div>
    </>
  );
};

export default Annotation;
