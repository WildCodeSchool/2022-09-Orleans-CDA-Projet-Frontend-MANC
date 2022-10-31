import { useEffect } from "react";
import Chrono from "../chrono/Chrono";

const QuizTimer = ({ setTimer }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Chrono />
    </div>
  );
};

export default QuizTimer;
