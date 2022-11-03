import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import { MdSearch } from "react-icons/md";

const SearchLearn = ({ setCountrySearchFound }) => {
  const [searchLearn, setSearchLearn] = useState("");
  const debouncedValue = useDebounce(searchLearn, 500);

  useEffect(() => {
    const getResponse = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data[0]) {
          setCountrySearchFound(data[0].cca3);
        } else {
          setCountrySearchFound("");
        }
        return data[0];
      } catch (error) {
        // console.error("The promise is rejected !", error);
      }
    };
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
    if (debouncedValue) {
      run();
    }
  }, [debouncedValue]);

  return (
    <div className="flex w-full md:w-96 absolute -bottom-9 md:-bottom-4 text-2xl">
      <div className="flex items-center opacity-90 border w-full h-fit border-solid shadow-2xl rounded-md border-greyblue bg-greyblue">
        <MdSearch className="ml-2 mr-2 text-2xl w-1/8" />
        <input
          className="border border-solid w-full border-grey-800 rounded-r-md px-2 opacity-90"
          type="name"
          placeholder="Country name or capital"
          value={searchLearn}
          onChange={(event) => setSearchLearn(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchLearn;
