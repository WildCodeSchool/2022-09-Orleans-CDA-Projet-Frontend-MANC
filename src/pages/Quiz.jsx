import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Answer from "../components/answer/Answer";
import Map from "../components/map/Map";
import Question from "../components/question/Question";
import countryData from "../assets/countriesData.json";

const Quiz = () => {
  const location = useLocation();
  const gameModes = location.state;
  const [clickedCountry, setClickedCountry] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState({ isAnswered: false, isCorrect: false });
  const [markerCoordinates, setMarkerCoordinates] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [preventClickCountry, setPreventClickCountry] = useState(false);

  useEffect(() => {
    isConfirmed &&
      setAnswer({
        isAnswered: true,
        isCorrect: clickedCountry === question[0].cca3,
      });
  }, [isConfirmed]);

  useEffect(() => {
    const clickedCountryData = countryData.find((data) => {
      return data.id === clickedCountry;
    });
    if (clickedCountryData) {
      setMarkerCoordinates(clickedCountryData.coord);
    }
  }, [clickedCountry]);

  useEffect(() => {
    isConfirmed && setMarkerCoordinates("");
  }, [isConfirmed]);

  useEffect(() => {
    setAnswer({ isAnswered: false, isCorrect: false });
  }, [question]);

  useEffect(() => {
    setIsConfirmed(false);
  }, [question]);

  useEffect(() => {
    setPreventClickCountry(false);
  }, [question]);

  useEffect(() => {
    !answer.isAnswered && setClickedCountry("");
  }, [answer]);

  return (
    <div className="height-minus-nav flex">
      <Map
        preventClickCountry={preventClickCountry}
        clickedCountry={clickedCountry}
        actionOnClick={setClickedCountry}
        markerCoordinates={markerCoordinates}
        setIsConfirmed={setIsConfirmed}
        correctAnswer={answer.isCorrect}
        isConfirmed={isConfirmed}
      />
      <Question
        question={question}
        setQuestion={setQuestion}
        isAnswered={answer.isAnswered}
        gameModes={gameModes}
        setPreventClickCountry={setPreventClickCountry}
      />
      {answer.isAnswered && clickedCountry !== "" && (
        <Answer answer={answer.isCorrect} />
      )}
    </div>
  );
};

export default Quiz;
