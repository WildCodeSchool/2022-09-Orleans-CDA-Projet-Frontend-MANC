import { useEffect, useState } from "react";
import Answer from "../components/answer/Answer";
import Map from "../components/map/Map";
import Question from "../components/question/Question";

const Quiz = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(false);
  const [isAnswered, setAnswered] = useState(false);

  useEffect(() => {
    clickedCountry !== "" && setAnswered(true);
  }, [clickedCountry]);

  useEffect(() => {
    question[0] && setAnswer(clickedCountry === question[0].cca3);
  }, [isAnswered]);

  return (
    <div className="height-minus-nav">
      <Map clickedCountry={clickedCountry} actionOnClick={setClickedCountry} />
      <Question
        question={question}
        setQuestion={setQuestion}
        isAnswered={isAnswered}
        setAnswered={setAnswered}
      />
      {isAnswered === true && <Answer answer={answer} />}
    </div>
  );
};

export default Quiz;
