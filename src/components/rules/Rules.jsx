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
      <div className="absolute z-30 flex justify-center items-center height-minus-nav">
        <div
          data-aos="fade-down"
          data-aos-duration="600"
          className="border border-black rounded-lg p-10 w-2/4 shadow-2xl bg-white bg-opacity-90"
        >
          <h1 className="text-6xl my-10">
            <span className="text-green-400">How</span> to
            <span className="text-lightblue"> Play</span> ?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <fieldset className=" my-10">
            <legend className="text-lg">Choose your game mode :</legend>
            <div className="flex justify-between my-4">
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
          </fieldset>

          <fieldset className=" my-10">
            <legend className="text-lg">How many questions ? :</legend>
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

          <div className="flex justify-center">
            <Link to="/play/quiz" state={{ checkedState, questionNumber }}>
              <button className="text-2xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex items-center">
                Play
                <FaPlay className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="z-10 h-full absolute w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute object-fill w-full h-full"
          poster="/img_video2.png"
        >
          <source
            src="http://37.187.90.23/mapquest/vid/video2new.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Rules;
