import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import { MdSearch } from "react-icons/md";

const SearchLearn = ({ setCountrySearchFound }) => {
  const [searchLearn, setSearchLearn] = useState("");
  const debouncedValue = useDebounce(searchLearn, 500);

  async function getResponse(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data.status && data[0]) {
        setCountrySearchFound(data[0].cca3);
      } else {
        setCountrySearchFound("");
      }
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
    <div className="flex justify-center absolute w-full -bottom-4 text-2xl">
      <div className="flex items-center opacity-90 border w-fit h-fit border-solid  shadow-2xl  rounded-md border-greyblue bg-greyblue">
        <MdSearch className="ml-2 mr-2 text-2xl" />
        <input
          className="border border-solid border-grey-800 rounded-r-md px-2 opacity-90"
          type="name"
          placeholder="Canada, Paris, etc."
          value={searchLearn}
          onChange={(event) => setSearchLearn(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchLearn;
