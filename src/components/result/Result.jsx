import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdReplayCircleFilled } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Result({ counterCorrect, questionNumber, gameModes }) {
  useEffect(() => {
    AOS.init();
    console.log(modePlay);
  }, []);

  const modePlay = [];
  useEffect(() => {
    if (gameModes[0]) {
      modePlay.push("capital");
    }
    if (gameModes[1]) {
      modePlay.push("currency");
    }
    if (gameModes[2]) {
      modePlay.push("language");
    }
  }, []);

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
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          className="mx-40 text-2xl bg-white bg-opacity-80 rounded-xl p-10 text-center border-solid border-2 border-greyblue"
        >
          You played using modes : {modePlay.join(" ")}
          Congratultions you score {counterCorrect} good answer on
          {questionNumber} question !
        </p>
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
