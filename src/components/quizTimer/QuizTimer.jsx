import { AiOutlineFieldTime } from "react-icons/ai";
import { useEffect, useState } from "react";

const QuizTimer = ({ readableTimer, setReadableTimer }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeLeftAfterOperation = timer;
    let hour = 0;
    let minute = 0;
    let seconde = 0;

    if (timer >= 3600) {
      hour = Math.floor(timer / 3600);
      timeLeftAfterOperation = timeLeftAfterOperation % (3600 * hour);
    }

    if (timeLeftAfterOperation >= 60) {
      minute = Math.floor(timeLeftAfterOperation / 60);
      timeLeftAfterOperation = timeLeftAfterOperation % (60 * minute);
    }

    seconde = timeLeftAfterOperation;

    const readableTimerString = `${hour >= 10 ? hour : "0" + hour}:${
      minute >= 10 ? minute : "0" + minute
    }:${seconde >= 10 ? seconde : "0" + seconde}`;

    setReadableTimer(readableTimerString);
  }, [timer]);

  return (
    <div className="z-50 absolute top-32 left-0 m-10">
      <div className="my-10 w-auto shadow-2xl p-6 rounded-md text-white bg-slate-800">
        <h2 className="text-center w-full text-3xl mb-1 flex gap-1 items-center">
          <AiOutlineFieldTime />
          Elapsed time:
        </h2>
        <p className="w-fit m-auto text-xl">{readableTimer}</p>
      </div>
    </div>
  );
};

export default QuizTimer;
