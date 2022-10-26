import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { TbBuilding } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Rules = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const [questionNumber, setQuestionNumber] = useState("10");

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      <div className="absolute z-10 flex flex-col gap-4 justify-center items-center height-minus-nav">
        <div
          data-aos="fade-down"
          data-aos-duration="600"
          className="rounded-lg p-6 w-2/4 shadow-2xl bg-white bg-opacity-90"
        >
          <h1 className="text-center text-6xl px-3 mb-6">How to Play?</h1>
          <p className="px-3 m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex justify-around">
            <fieldset className="w-1/3 my-10 flex flex-col">
              <div className="card hover:shadow-2xl shadow-xl rounded-md flex flex-col bg-slate-100">
                <div className="image h-36 object-cover rounded-t-md bg-[url('./city.jpg')] bg-no-repeat bg-cover"></div>
                <legend className="text-lg text-center p-2">
                  Choose your game mode
                </legend>
                <div className="flex w-1/2 self-center border-b border-solid border-slate-500"></div>
                <div className="flex flex-col px-5 justify-between mb-4 mt-4 gap-2">
                  <div className="flex items-center">
                    <input
                      value={0}
                      type="checkbox"
                      id="capital"
                      name="capital"
                      className="mx-2"
                      onChange={() => handleOnChange(0)}
                    />
                    <label htmlFor="capital">Capitals </label>
                    <TbBuilding className="ml-1 text-xl" />
                  </div>
                  <div className="flex items-center">
                    <input
                      value={1}
                      type="checkbox"
                      id="currency"
                      name="currency"
                      className="mx-2"
                      onChange={() => handleOnChange(1)}
                    />
                    <label htmlFor="currency">Currencies </label>
                    <HiOutlineCurrencyDollar className="ml-1 text-xl" />
                  </div>
                  <div className="flex items-center">
                    <input
                      value={2}
                      type="checkbox"
                      id="language"
                      name="language"
                      className="mx-2"
                      onChange={() => handleOnChange(2)}
                    />
                    <label htmlFor="language">Languages </label>
                    <IoChatbubbleEllipsesOutline className="ml-1 text-xl" />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="w-1/3 my-10 flex flex-col">
              <div className="card hover:shadow-2xl shadow-xl rounded-md flex flex-col bg-slate-100">
                <div className="image h-36 object-cover rounded-t-md bg-[url('./city.jpg')] bg-no-repeat bg-cover"></div>
                <legend className="text-lg text-center p-2">
                  Number of questions
                </legend>
                <div className="flex w-1/2 self-center border-b border-solid border-slate-500"></div>
                <div className="flex flex-col px-5 justify-between mb-4 mt-4 gap-2">
                  <div className="flex items-center">
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
              </div>
            </fieldset>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/play/quiz" state={{ checkedState, questionNumber }}>
            <button className="w-40 justify-center text-2xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex items-center">
              Play
              <FaPlay className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[url('./assets/images/blurred-map.jpg')] contrast-75 bg-no-repeat bg-cover height-minus-nav w-screen"></div>
    </div>
  );
};

export default Rules;
