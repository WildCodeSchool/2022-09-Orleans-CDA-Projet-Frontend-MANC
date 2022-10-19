import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Answer = ({ answer, questionType, response }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`${
        answer ? "bg-green-500" : "bg-red-500"
      } left-0 right-0 mx-auto w-fit mt-4 absolute flex flex-col border-1 shadow-xl border-top border-solid border-black p-6 rounded-xl`}
      data-aos="zoom-in"
      data-aos-duration="400"
    >
      <h1 className="text-white text-2xl text-center mb-4 font-semibold">
        {answer ? "Good!" : "Wrong!"}
      </h1>
      {questionType.type === "capital" ? (
        <p className="text-lg text-white font-semibold">
          {response} was the answer!{" "}
        </p>
      ) : (
        <p className="text-lg text-white font-semibold">
          {response} was a possible answer!
        </p>
      )}
    </div>
  );
};

export default Answer;
