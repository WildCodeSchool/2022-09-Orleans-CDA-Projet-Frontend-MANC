import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdReplayCircleFilled, MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TbBuilding } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import readableTimer from "../../helpers/readableTimer";

function Result({ counterCorrect, questionNumber, allResponses, totalTimer }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex justify-items-center">
      <div className="absolute z-30 flex flex-col items-center height-minus-nav w-full overflow-scroll">
        <h1
          data-aos="fade-down"
          data-aos-duration="600"
          className="text-8xl w-fit bg-slate-800 bg-opacity-80 rounded-xl p-8 m-10 border-solid border-2 border-slate-800 shadow-2xl"
        >
          <span className="text-green-400">Quiz </span>
          <span className="text-lightblue">done!</span>
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className=" mx-10 mb-10 text-2xl text-white bg-slate-800 bg-opacity-80 rounded-lg py-5 px-8 w-1/3 text-center border-solid border-2 border-slate-800"
        >
          {`Congratulations, you scored ${counterCorrect} out of ${questionNumber} questions in ${readableTimer(
            totalTimer
          )}!`}
        </div>
        <div className="overflow-auto text-2xl bg-slate-800 bg-opacity-80 rounded-lg p-2 w-1/3 text-center border-solid border-2 border-slate-800 px-30">
          {allResponses.map((response, index) => (
            <div
              key={index}
              className={`${
                response.answerResult
                  ? "bg-green-400  border-green-700"
                  : "bg-red-400 border-red-700"
              }
            m-10 text-2xl bg-opacity-60 rounded-lg p-5 text-center border-solid border-2`}
            >
              <p>
                <span className="font-bold">{`Question ${
                  response.numQuestion
                } in ${readableTimer(response.timeToAnswer)}`}</span>{" "}
                <span
                  className={`${
                    response.answerResult ? "text-green-700" : "text-red-700"
                  } font-bold`}
                >{`${response.answerResult ? "Right" : "Wrong"}`}</span>
              </p>
              <p className="flex justify-center gap-1">
                {response.question.includes("Capital") ? (
                  <TbBuilding />
                ) : response.question.includes("Currency") ? (
                  <HiOutlineCurrencyDollar />
                ) : (
                  response.question.includes("Language") && (
                    <IoChatbubbleEllipsesOutline />
                  )
                )}
                {`${response.question}`}
              </p>
              <p>{`Country : ${response.goodAnswer}`}</p>
            </div>
          ))}
        </div>
        <NavLink to="/play" className="text-2xl flex items-center">
          <button className="my-10 text-2xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex items-center">
            Play again
            <MdReplayCircleFilled className="ml-2" />
          </button>
        </NavLink>
      </div>
      <video
        autoPlay
        loop
        muted
        className="fixed z-10 w-auto min-w-full min-h-full max-w-none bg-blend-color-dodge"
        poster="/img_video2.png"
      >
        <source
          src="http://37.187.90.23/mapquest/vid/video2new.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Result;
