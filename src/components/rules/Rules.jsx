import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="border border-black rounded-lg p-10 w-2/4">
      <h1 className="text-6xl font-bold my-10">How To Play ?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <fieldset className=" my-10">
        <legend>Choose your game mode :</legend>
        <div className="flex justify-between my-4">
          <div className="">
            <input
              type="checkbox"
              id="capital"
              name="capital"
              className="rounded-full mx-2"
            />
            <label htmlFor="capital">Capitals</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="currency"
              name="currency"
              className="rounded-full mx-2"
            />
            <label htmlFor="currency">Currencies</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="language"
              name="language"
              className="rounded-full mx-2"
            />
            <label htmlFor="language">Languages</label>
          </div>
        </div>
      </fieldset>

      <div className="flex justify-center ">
        <Link to="/play/quiz">
          <button className="border border-black bg-lightgreen rounded-lg px-10 py-4 my-4">
            Play
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Rules;
