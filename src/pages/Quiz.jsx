import { useEffect, useState } from "react";
import Answer from "../components/answer/Answer";
import Map from "../components/map/Map";
import Question from "../components/question/Question";

const Quiz = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(false);
  const [isAnswered, setAnswered] = useState();

  useEffect(() => {
    setAnswer(question[0] && clickedCountry === question[0].cca3);
  }, [clickedCountry]);

  useEffect(() => {
    setAnswered(true);
  }, [answer]);

  return (
    <div className="height-minus-nav">
      <Map clickedCountry={clickedCountry} actionOnClick={setClickedCountry} />
      <Question
        question={question}
        setQuestion={setQuestion}
        isAnswered={isAnswered}
      />
      {isAnswered === true && <Answer answer={answer} />}
    </div>
  );
};

export default Quiz;
