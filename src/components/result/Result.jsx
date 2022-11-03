import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdReplayCircleFilled, MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TbBuilding } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import readableTimer from "../../helpers/readableTimer";

function Result({
  counterCorrect,
  score,
  questionNumber,
  allResponses,
  totalTimer,
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex justify-items-center">
      <div className="fixed top-0 -z-10 h-full w-full md:h-screen">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          poster="./../img_video2.png"
        >
          <source
            src="https://destale-oracle.ddns.net/mapquest/vid/video2new.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col items-center absolute top-[80px] z-10 w-full h-[calc(100vh-80px)] overflow-scroll">
        <h1
          data-aos="fade-in"
          data-aos-duration="600"
          data-aos-offset="-200"
          className="text-7xl md:text-8xl w-fit mb-10 flex flex-center"
        >
          <span className="text-green-400">Quiz </span>
          <span className="text-lightblue">done!</span>
        </h1>
        <div
          data-aos="fade-in"
          data-aos-duration="600"
          data-aos-offset="-200"
          className=" mb-10 text-2xl w-[95%] md:w-2/3 text-white bg-slate-800 bg-opacity-80 rounded-lg py-5 px-2 md:px-8 text-center border-solid border-2 border-slate-800"
        >
          {`Congratulations, your scored ${score}.`}
          <br />
          {`You answered in ${readableTimer(
            totalTimer
          )} and ${counterCorrect} out of ${questionNumber} questions are correct.`}
        </div>
        <div className="md:w-2/3 text-2xl m-2 bg-slate-800 bg-opacity-80 rounded-lg md:px-8 text-center border-solid border-2 border-slate-800 px-30">
          {allResponses.map((response, index) => (
            <div
              key={index}
              className={`${
                response.answerResult
                  ? "bg-green-100  border-green-800"
                  : "bg-red-100 border-red-800"
              }
            my-10 mx-5 text-2xl bg-opacity-60 rounded-lg p-5 text-center border-solid border-2`}
            >
              <p className="flex justify-center items-center gap-1 font-bold">
                {`Question ${response.numQuestion}.`}
                {response.question.includes("Capital") ? (
                  <TbBuilding />
                ) : response.question.includes("Currency") ? (
                  <HiOutlineCurrencyDollar />
                ) : (
                  response.question.includes("Language") && (
                    <IoChatbubbleEllipsesOutline />
                  )
                )}
              </p>
              <p className="font-bold">
                {` ${response.questionType.phrase} ${response.questionType.request} ?`}
              </p>

              <p>
                {response.answerResult ? (
                  <span className="text-green-800">
                    {`You answered right `}
                    <span className="font-bold">{response.userResponse}</span>
                    {` in `}
                    <span className="font-bold">
                      {readableTimer(response.timeToAnswer)}
                    </span>
                    {`.`}
                  </span>
                ) : (
                  <span className="text-red-800">
                    {`You answered wrong `}
                    <span className="font-bold">{response.userResponse}</span>
                    {` in `}
                    <span className="font-bold">
                      {readableTimer(response.timeToAnswer)}
                    </span>
                    {`.`}
                  </span>
                )}
              </p>
              {response.questionType.type === "capital" ? (
                <p>
                  <span className="font-bold">{response.goodAnswer}</span>
                  {` was the answer!`}
                </p>
              ) : (
                <p>
                  <span className="font-bold">{response.goodAnswer}</span>
                  {` was a possible answer!`}
                </p>
              )}
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
    </div>
  );
}

export default Result;
