import { useEffect } from "react";
import Chrono from "../chrono/Chrono";

const QuizTimer = ({ timer, setTimer }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Chrono timer={timer} />
    </div>
  );
};

export default QuizTimer;
