import { AiOutlineFieldTime } from "react-icons/ai";
import { useEffect } from "react";
import readableTimer from "../../helpers/readableTimer";

const QuizTimer = ({ timer, setTimer }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="z-50 absolute top-32 left-0 m-10">
      <div className="my-10 w-auto shadow-2xl p-6 rounded-md text-white bg-slate-800">
        <h2 className="text-center w-full text-3xl mb-1 flex gap-1 items-center">
          <AiOutlineFieldTime />
          Elapsed time:
        </h2>
        <p className="w-fit m-auto text-xl">{readableTimer(timer)}</p>
      </div>
    </div>
  );
};

export default QuizTimer;
