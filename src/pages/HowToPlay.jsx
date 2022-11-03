import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { TbBuilding } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const HowToPlay = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const [questionNumber, setQuestionNumber] = useState("10");
  const [canPlay, setCanPlay] = useState(false);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    const oneOrMoreIsChecked = checkedState.indexOf(true) !== -1;
    setCanPlay(oneOrMoreIsChecked && parseInt(questionNumber, 10) >= 10);
  }, [checkedState, questionNumber]);

  return (
    <div>
      <div className="fixed top-0 -z-10 h-full w-full md:h-screen">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          poster="./img_video2.png"
        >
          <source
            src="https://destale-oracle.ddns.net/mapquest/vid/video2new.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute top-[80px] w-full md:h-[calc(100vh-80px)] flex flex-col justify-center items-center">
        <div
          data-aos="fade-in"
          data-aos-duration="400"
          className="rounded-lg p-6 w-[98%] my-5 lg:w-2/4 shadow-2xl bg-slate-800 bg-opacity-90 overflow-auto"
        >
          <h1 className="text-center text-6xl px-3 mb-6 mt-2 text-white">
            How to Play?
          </h1>
          <p className="px-3 m-2 text-white">
            You can select up to 3 game modes.
            <br />
            Questions are randomly generated according to the game mode(s)
            you've picked.
            <br />
            Each correct answer will award you 100 points, you can also gain a
            bonus based on the time it took you to answer!
            <br />
            Your goal is to score a maximum of points out of these 10, 20 or 30
            questions.
            <br />
          </p>
          <p className="px-3 mt-6 mb-4 text-white text-center text-lg font-semibold">
            Best of luck!
          </p>
          <div className="flex flex-col items-center lg:items-start md:flex-row justify-evenly ">
            <fieldset className="w-[90%] md:w-1/3 my-4 flex flex-col bg-white rounded-md ">
              <div className="hover:shadow-2xl shadow-xl flex flex-col ">
                <div className="h-36 rounded-t-md bg-[url('/gamemode.png')] bg-[#76C2AF] bg-no-repeat bg-contain bg-center"></div>
                <legend className="text-lg whitespace-nowrap text-center p-2 ">
                  Choose your game mode
                </legend>
                <div className="flex w-1/2 mx-auto border-b border-solid border-slate-500"></div>
                <div className="flex flex-col px-5 justify-between mb-4 mt-4 gap-2 ">
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
            <fieldset className="w-[90%] md:w-1/3 my-4 flex flex-col bg-white rounded-md">
              <div className="hover:shadow-2xl shadow-xl flex flex-col">
                <div className="h-36 rounded-t-md bg-[url('/nbquestions.png')] bg-[#76C2AF] bg-no-repeat bg-contain bg-center"></div>
                <legend className="text-lg whitespace-nowrap text-center p-2">
                  Number of questions
                </legend>
                <div className="flex w-1/2 mx-auto border-b border-solid border-slate-500"></div>
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
          <div className="flex justify-center items-center h-12 m-4">
            {canPlay ? (
              <Link to="/play/quiz" state={{ checkedState, questionNumber }}>
                <button
                  data-aos="fade-in"
                  data-aos-duration="700"
                  data-aos-offset="-200"
                  className=" w-40 justify-center text-2xl bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border-b-4 border-green-600 hover:border-green-400 rounded flex items-center"
                >
                  Play
                  <FaPlay className="ml-2" />
                </button>
              </Link>
            ) : (
              <div
                className="text-red-500 text-xl text-center"
                data-aos="fade-in"
                data-aos-duration="700"
                data-aos-offset="-500"
              >
                Please select a game mode and a number of questions.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
