import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import Answer from "../components/answer/Answer";
import Map from "../components/map/Map";
import Question from "../components/question/Question";
import Result from "../components/result/Result";
import countryData from "../assets/countriesData.json";
import RecapGame from "../components/recapGame/RecapGame";
import AOS from "aos";
import "aos/dist/aos.css";

const Quiz = () => {
  const location = useLocation();
  const { checkedState: gameModes, questionNumber } = location.state;
  const [questionType, setQuestionType] = useState(null);
  const [countryAnswer, setCountryAnswer] = useState(null);
  const [response, setResponse] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const getAnswer = (clickedCountry) => {
    if (clickedCountry !== "") {
      fetch(`https://restcountries.com/v3.1/alpha/${clickedCountry}`)
        .then((resp) => resp.json())
        .then((data) => {
          if (questionType.type === "currencies") {
            setCountryAnswer(data[0].currencies);
          }
          if (questionType.type === "languages") {
            setCountryAnswer(data[0].languages);
          }
        });
    }
  };

  const [clickedCountry, setClickedCountry] = useState("");
  const [preventClickCountry, setPreventClickCountry] = useState(false);

  useEffect(() => {
    getAnswer(clickedCountry);
    const clickedCountryData = countryData.find((data) => {
      return data.id === clickedCountry;
    });
    if (clickedCountryData) {
      setMarkerCoordinates(clickedCountryData.coord);
    }
  }, [clickedCountry]);

  const [question, setQuestion] = useState("");
  const [markerCoordinates, setMarkerCoordinates] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [counterCorrect, setCounterCorrect] = useState(0);
  const [counterQuestion, setCounterQuestion] = useState(1);

  useEffect(() => {
    isConfirmed &&
      setAnswer({
        isAnswered: true,
        isCorrect: clickedCountry === question[0].cca3,
      });
  }, [isConfirmed]);

  useEffect(() => {
    if (isConfirmed) {
      if (number === 0) {
        setAnswer({
          isAnswered: true,
          isCorrect: clickedCountry === question[0].cca3,
        });
        setResponse(question[0].name.common);
      }
      if (number === 1) {
        setAnswer({
          isAnswered: true,
          isCorrect: Object.values(Object.values(countryAnswer)[0]).includes(
            Object.values(Object.values(question[0].currencies)[0])[0]
          ),
        });

        setResponse(question[0].name.common);
      }
      if (number === 2) {
        setAnswer({
          isAnswered: true,
          isCorrect: Object.values(countryAnswer).includes(
            Object.values(question[0].languages)[0]
          ),
        });
        setResponse(question[0].name.common);
      }
    }
    isConfirmed && setMarkerCoordinates("");
  }, [isConfirmed]);

  useEffect(() => {
    if (response !== "") {
      const responseCountryData = countryData.find((data) => {
        return data.name === response;
      });
      if (responseCountryData) {
        setMarkerCoordinates(responseCountryData.coord);
      }
    }
  }, [response]);

  const [number, setNumber] = useState(null);

  useEffect(() => {
    setIsConfirmed(false);
    setPreventClickCountry(false);
    setAnswer({ isAnswered: false, isCorrect: false });
    setMarkerCoordinates("");
  }, [question]);

  const [answer, setAnswer] = useState({ isAnswered: false, isCorrect: false });

  useEffect(() => {
    !answer.isAnswered && setClickedCountry("");
    if (answer.isCorrect) {
      setCounterCorrect((prevCounter) => prevCounter + 1);
    }
    if (answer.isAnswered) {
      setCounterQuestion((prevCounter) => prevCounter + 1);
    }
  }, [answer]);

  if (counterQuestion > questionNumber) {
    return (
      <Result
        counterCorrect={counterCorrect}
        questionNumber={questionNumber}
        gameModes={gameModes}
      />
    );
  }

  return (
    <div className="height-minus-nav flex justify-center items-center bg-quiz">
      <Question
        question={question}
        setQuestion={setQuestion}
        isAnswered={answer.isAnswered}
        questionType={questionType}
        gameModes={gameModes}
        number={number}
        setQuestionType={setQuestionType}
        setNumber={setNumber}
        setPreventClickCountry={setPreventClickCountry}
      />
      <div className="h-4/5 w-[90%] p-1 relative flex rounded-lg border-solid border-2 border-cyan-900 shadow-2xl bg-cyan-900">
        <Map
          preventClickCountry={preventClickCountry}
          clickedCountry={clickedCountry}
          actionOnClick={setClickedCountry}
          markerCoordinates={markerCoordinates}
          setIsConfirmed={setIsConfirmed}
          correctAnswer={answer.isCorrect}
          isConfirmed={isConfirmed}
        />
        {answer.isAnswered && clickedCountry !== "" && (
          <Answer
            answer={answer.isCorrect}
            questionType={questionType}
            response={response}
          />
        )}
        {markerCoordinates && !isConfirmed && (
          <div className="absolute left-0 right-0 mx-auto w-fit -top-10">
            <button
              className="flex gap-2 items-center text-white text-[25px] font-semibold p-5 bg-green-600 hover:bg-green-700 hover:text-gray-200 border shadow-xl border-top border-solid border-white rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="200"
              onClick={() => setIsConfirmed(true)}
            >
              <GiCheckMark /> Confirm
            </button>
          </div>
        )}
      </div>
      <RecapGame
        counterCorrect={counterCorrect}
        counterQuestion={counterQuestion}
        questionNumber={questionNumber}
        response={response}
      />
    </div>
  );
};

export default Quiz;
