const SearchLearn = ({ searchLearn, setSearchLearn }) => {
  return (
    <div className="flex justify-center absolute w-full bottom-8">
      <div className="flex items-center opacity-90 border-2 w-fit h-fit border-solid mt-20 shadow-2xl p-4 rounded-xl border-black bg-slate-100">
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
