import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdReplayCircleFilled, MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Result({ counterCorrect, questionNumber, gameModes }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-items-center">
      <div className="absolute z-30 flex flex-col items-center height-minus-nav w-full">
        <h1
          data-aos="fade-down"
          data-aos-duration="600"
          className="text-8xl w-fit bg-white bg-opacity-80 rounded-xl p-8 m-20 border-solid border-2 border-greyblue shadow-2xl"
        >
          <span className="text-green-400">Quiz </span>
          <span className="text-greyblue">done!</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          className="mx-40 text-2xl bg-white bg-opacity-80 rounded-xl p-10 text-center border-solid border-2 border-greyblue drop-shadow-2xl"
        >
          {`Congratulations, you scored ${counterCorrect} good answers out of 
          ${questionNumber} questions!`}
        </p>
        <div className="flex justify-evenly w-full mt-14">
          <NavLink
            to="/play"
            className="text-2xl flex items-center drop-shadow-2xl"
          >
            <button
              className="border border-black bg-lightgreen rounded-lg px-10 py-4 my-10 flex items-center"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Replay
              <MdReplayCircleFilled className="text-4xl ml-2" />
            </button>
          </NavLink>
          <NavLink
            to="/"
            className="text-2xl flex items-center drop-shadow-2xl"
          >
            <button
              className="border border-black bg-lightgreen rounded-lg px-10 py-4 my-10 flex items-center"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Home
              <MdHome className="text-4xl ml-2" />
            </button>
          </NavLink>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-blend-color-dodge"
        poster="/img_video2.png"
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/projet-manc.appspot.com/o/video2new.mp4?alt=media&token=e11f640c-441c-4787-917b-612ccc5cc915"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Result;
