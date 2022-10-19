import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const [questionNumber, setQuestionNumber] = useState("10");

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

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
          <div>
            <input
              value={0}
              type="checkbox"
              id="capital"
              name="capital"
              className="rounded-full mx-2"
              onChange={() => handleOnChange(0)}
            />
            <label htmlFor="capital">Capitals</label>
          </div>
          <div>
            <input
              value={1}
              type="checkbox"
              id="currency"
              name="currency"
              className="rounded-full mx-2"
              onChange={() => handleOnChange(1)}
            />
            <label htmlFor="currency">Currencies</label>
          </div>
          <div>
            <input
              value={2}
              type="checkbox"
              id="language"
              name="language"
              className="rounded-full mx-2"
              onChange={() => handleOnChange(2)}
            />
            <label htmlFor="language">Languages</label>
          </div>
        </div>
      </fieldset>

      <fieldset className=" my-10">
        <legend>How many questions ? :</legend>
        <div className="flex justify-between my-4">
          <div>
            <input
              checked={questionNumber === "10" ? true : false}
              value="10"
              type="radio"
              id="10"
              name="number"
              className="rounded-full mx-2"
              onChange={(e) => setQuestionNumber(e.target.value)}
            />
            <label htmlFor="10">10</label>
          </div>
          <div>
            <input
              value={20}
              type="radio"
              id="20"
              name="number"
              className="rounded-full mx-2"
              onChange={(e) => setQuestionNumber(e.target.value)}
            />
            <label htmlFor="20">20</label>
          </div>
          <div>
            <input
              value={30}
              type="radio"
              id="30"
              name="number"
              className="rounded-full mx-2"
              onChange={(e) => setQuestionNumber(e.target.value)}
            />
            <label htmlFor="30">30</label>
          </div>
        </div>
      </fieldset>

      <div className="flex justify-center ">
        <Link to="/play/quiz" state={{ checkedState, questionNumber }}>
          <button className="border border-black bg-lightgreen rounded-lg px-10 py-4 my-4">
            Play
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Rules;
