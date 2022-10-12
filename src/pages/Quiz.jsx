import { useEffect, useState } from "react";
import Answer from "../components/answer/Answer";
import Map from "../components/map/Map";
import Question from "../components/question/Question";

const Quiz = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [question, setQuestion] = useState("");
  const [isCorrect, setCorrect] = useState(false);
  const [isAnswered, setAnswered] = useState(false);

  useEffect(() => {
    clickedCountry !== "" && setAnswered(true);
  }, [clickedCountry]);

  useEffect(() => {
    question[0] && setCorrect(clickedCountry === question[0].cca3);
    setClickedCountry("");
  }, [isAnswered]);

  return (
    <div className="height-minus-nav flex">
      <Map clickedCountry={clickedCountry} actionOnClick={setClickedCountry} />
      <Question
        question={question}
        setQuestion={setQuestion}
        isAnswered={isAnswered}
        setAnswered={setAnswered}
      />
      <Answer isCorrect={isCorrect} />
    </div>
  );
};

export default Quiz;
