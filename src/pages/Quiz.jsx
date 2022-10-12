import { useEffect, useState } from "react";
import Answer from "../components/answer/Answer";
import Map from "../components/map/Map";
import Question from "../components/question/Question";
import countryData from "../assets/countriesData.json";

const Quiz = () => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState({ isAnswered: false, isCorrect: false });
  const [markerCoordinates, setMarkerCoordinates] = useState("");

  useEffect(() => {
    clickedCountry !== "" &&
      setAnswer({
        isAnswered: true,
        isCorrect: clickedCountry === question[0].cca3,
      });
  }, [clickedCountry]);

  useEffect(() => {
    const clickedCountryData = countryData.find((data) => {
      return data.id === clickedCountry;
    });
    if (clickedCountryData) {
      setMarkerCoordinates(clickedCountryData.coord);
    }
  }, [clickedCountry]);

  useEffect(() => {
    setAnswer({ isAnswered: false, isCorrect: false });
  }, [question]);

  useEffect(() => {
    !answer.isAnswered && setClickedCountry("");
  }, [answer]);

  return (
    <div className="height-minus-nav flex">
      <Map
        clickedCountry={clickedCountry}
        actionOnClick={setClickedCountry}
        markerCoordinates={markerCoordinates}
      />
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
