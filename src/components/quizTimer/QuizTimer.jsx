import { useEffect, useState } from "react";

const QuizTimer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="z-50 absolute top-32 left-0 m-10">
      <div className="my-10 border-2 w-auto border-solid shadow-2xl p-4 rounded-2xl border-black bg-slate-100">
        <h2 className="text-center w-full text-3xl mb-4">Timer</h2>
        {timer}
      </div>
    </div>
  );
};

export default QuizTimer;
