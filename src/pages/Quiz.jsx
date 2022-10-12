import { useEffect, useState } from "react";
import Answer from "../components/answer/Answer";
import Map from "../components/map/Map";
import Question from "../components/question/Question";

const Quiz = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState({ isAnswered: false, isCorrect: false });

  useEffect(() => {
    clickedCountry !== "" &&
      setAnswer({
        isAnswered: true,
        isCorrect: clickedCountry === question[0].cca3,
      });
  }, [clickedCountry]);

  useEffect(() => {
    setAnswer({ isAnswered: false, isCorrect: false });
  }, [question]);

  useEffect(() => {
    !answer.isAnswered && setClickedCountry("");
  }, [answer]);

  return (
    <div className="height-minus-nav flex">
      <Map clickedCountry={clickedCountry} actionOnClick={setClickedCountry} />
      <Question
        question={question}
        setQuestion={setQuestion}
        isAnswered={answer.isAnswered}
      />
      {answer.isAnswered && clickedCountry !== "" && (
        <Answer answer={answer.isCorrect} />
      )}
    </div>
  );
};

export default Quiz;
