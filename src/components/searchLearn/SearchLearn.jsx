import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

const SearchLearn = ({ setCountrySearchFound }) => {
  const [searchLearn, setSearchLearn] = useState("");
  const debouncedValue = useDebounce(searchLearn, 500);

  async function getResponse(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountrySearchFound(data[0]);
      return data[0];
    } catch (error) {
      console.error("The promise is rejected !", error);
    }
  }

  useEffect(() => {
    const run = async () => {
      const res = await getResponse(
        "https://restcountries.com/v3.1/name/" + searchLearn
      );
      if (!res) {
        await getResponse(
          "https://restcountries.com/v3.1/capital/" + searchLearn
        );
      }
    };
    run();
  }, [debouncedValue]);

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
      </div>
    </div>
  );
};

export default SearchLearn;
