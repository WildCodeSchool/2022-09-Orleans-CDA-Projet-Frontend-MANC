import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdReplayCircleFilled } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TbBuilding } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function Result({ counterCorrect, questionNumber, allResponses }) {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    console.log(allResponses);
  }, [allResponses]);
  return (
    <div className="flex justify-items-center">
      <div className="absolute z-10 flex flex-col items-center height-minus-nav w-full">
        <h1
          data-aos="fade-down"
          data-aos-duration="600"
          className="text-8xl w-fit bg-white bg-opacity-80 rounded-xl p-8 m-20 border-solid border-2 border-greyblue shadow-2xl"
        >
          <span className="text-green-400">Quizz </span>
          <span className="text-greyblue">done !</span>
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="mx-40 text-2xl bg-white bg-opacity-80 rounded-lg p-10 text-center border-solid border-2 border-greyblue"
        >
          {`Congratulations ! Your have ${counterCorrect} good answer on ${questionNumber} questions !`}

          {allResponses.map((response) => (
            <div
              className={`${
                response.answerResult
                  ? "bg-green-400  border-green-700"
                  : "bg-red-400 border-red-700"
              }
          mx-40  mt-10 text-2xl bg-opacity-80 rounded-lg p-10 m-5 text-center border-solid border-2`}
            >
              <p>
                <span className="font-bold">{`Question ${response.numQuestion}`}</span>{" "}
                <span
                  className={`${
                    response.answerResult ? "text-green-700" : "text-red-700"
                  } font-bold`}
                >{`${response.answerResult ? "Right" : "Wrong"}`}</span>
              </p>
              <div className="flex gap-1">
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
              </div>
              <p>{`Country : ${response.goodAnswer}`}</p>
            </div>
          ))}
        </div>
        <NavLink to="/play" className="text-2xl flex items-center">
          <button
            className="border border-black bg-lightgreen rounded-lg px-10 py-4 my-10 flex items-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Replay
            <MdReplayCircleFilled className="text-4xl ml-2" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Result;
