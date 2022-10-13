import { useState, useEffect } from "react";

const SearchLearn = ({ countryFound, setCountryFound }) => {
  const [searchLearn, setSearchLearn] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [capitalSearch, setCapitalSearch] = useState("");
  // const [currenCySearch, setCurrencySearch] = useState("");
  // const [languageSearch, setLanguageSearchSearch] = useState("");

  async function getResponseCountry() {
    const res = await fetch(
      "https://restcountries.com/v3.1/name/" + searchLearn
    );
    const data = await res.json();
    setCountrySearch(data[0]);
    setCountryFound(data[0]);
    //setSearchLearn(capital.name.common);
    console.log(data[0]);
  }
  useEffect(() => {
    getResponseCountry();
  }, [searchLearn]);

  async function getResponseCapital() {
    const res = await fetch(
      "https://restcountries.com/v3.1/capital/" + searchLearn
    );
    const data = await res.json();
    setCapitalSearch(data[0]);
    setCountryFound(data[0]);
    //setSearchLearn(capital.name.common);
    console.log(data[0]);
  }

  useEffect(() => {
    {
      !countryFound && getResponseCapital();
    }
  }, [searchLearn]);

  return (
    <div className="flex justify-center absolute w-full bottom-8">
      <div className="flex items-center opacity-90 border-2 w-fit h-fit border-solid  shadow-2xl p-4 rounded-xl border-black bg-slate-100">
        <label>Search :</label>
        <input
          className="border-2 border-solid border-black rounded-md ml-4 opacity-90"
          type="name"
          placeholder="Canada"
          value={searchLearn}
          onChange={(event) => setSearchLearn(event.target.value)}
        />
        {/* <button onClick={getResponse}>Search</button> */}
      </div>
      {countrySearch &&
        "1 Country : " +
          countrySearch.name.common +
          ", search : " +
          searchLearn}
      {capitalSearch &&
        "2 Country : " +
          capitalSearch.name.common +
          ", capital : " +
          capitalSearch.capital +
          ", search : " +
          searchLearn}
    </div>
  );
};

export default SearchLearn;
