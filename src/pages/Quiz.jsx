import { useLocation, useNavigate } from "react-router-dom";
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
import QuizTimer from "../components/quizTimer/QuizTimer";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkedState: gameModes, questionNumber } = location.state
    ? location.state
    : {};
  const [questionType, setQuestionType] = useState(null);
  const [answer, setAnswer] = useState({ isAnswered: false, isCorrect: false });
  const [countryAnswer, setCountryAnswer] = useState(null);
  const [response, setResponse] = useState("");
  const [responseDone, setResponseDone] = useState("");
  const [numberResponseDone, setNumberResponseDone] = useState(null);
  const [clickedCountry, setClickedCountry] = useState("");
  const [preventClickCountry, setPreventClickCountry] = useState(false);
  const [number, setNumber] = useState(null);
  const [question, setQuestion] = useState("");
  const [markerCoordinates, setMarkerCoordinates] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [counterCorrect, setCounterCorrect] = useState(0);
  const [counterQuestion, setCounterQuestion] = useState(1);
  const [allResponses, setAllResponses] = useState([]);
  const [timer, setTimer] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (!location.state) {
      navigate("/play");
    }
  }, []);

  useEffect(() => {
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
    getAnswer(clickedCountry);
    const clickedCountryData = countryData.find((data) => {
      return data.id === clickedCountry;
    });
    if (clickedCountryData) {
      setMarkerCoordinates(clickedCountryData.coord);
    }
  }, [clickedCountry]);

  useEffect(() => {
    isConfirmed &&
      setAnswer({
        isAnswered: true,
        isCorrect: clickedCountry === question[0].cca3,
      });
  }, [isConfirmed]);

  useEffect(() => {
    if (isConfirmed) {
      const clickedCountryData = countryData.find((data) => {
        return data.id === clickedCountry;
      });
      clickedCountryData
        ? setResponseDone(clickedCountryData.name)
        : setResponseDone("not found");
      let timeToAnswer = timer;

      if (allResponses[allResponses.length - 1]) {
        timeToAnswer =
          timer - allResponses[allResponses.length - 1].totalTimeToThisQuestion;
      }

      if (number === 0) {
        setAnswer({
          isAnswered: true,
          isCorrect: clickedCountry === question[0].cca3,
        });
        setResponse(question[0].name.common);
        setAllResponses((previous) => {
          return [
            ...previous,
            {
              numQuestion: counterQuestion,
              question: `Capital : ${question[0].capital[0]}`,
              answerResult: clickedCountry === question[0].cca3,
              goodAnswer: question[0].name.common + " " + question[0].flag,
              totalTimeToThisQuestion: timer,
              timeToAnswer: timeToAnswer,
              questionType: questionType,
              userResponse: clickedCountryData.name,
            },
          ];
        });
        setNumberResponseDone(number);
      }
      if (number === 1) {
        setAnswer({
          isAnswered: true,
          isCorrect: Object.values(Object.values(countryAnswer)[0]).includes(
            Object.values(Object.values(question[0].currencies)[0])[0]
          ),
        });
        setResponse(question[0].name.common);
        setAllResponses((previous) => {
          return [
            ...previous,
            {
              numQuestion: counterQuestion,
              question: `Currency : ${
                Object.values(Object.values(question[0].currencies)[0])[0]
              }`,
              answerResult: Object.values(
                Object.values(countryAnswer)[0]
              ).includes(
                Object.values(Object.values(question[0].currencies)[0])[0]
              ),
              goodAnswer: question[0].name.common + " " + question[0].flag,
              totalTimeToThisQuestion: timer,
              timeToAnswer: timeToAnswer,
              questionType: questionType,
              userResponse: clickedCountryData.name,
            },
          ];
        });
        setNumberResponseDone(number);
      }
      if (number === 2) {
        setAnswer({
          isAnswered: true,
          isCorrect: Object.values(countryAnswer).includes(
            Object.values(question[0].languages)[0]
          ),
        });
        setResponse(question[0].name.common);
        setAllResponses((previous) => {
          return [
            ...previous,
            {
              numQuestion: counterQuestion,
              question: `Language : ${Object.values(question[0].languages)[0]}`,
              answerResult: Object.values(countryAnswer).includes(
                Object.values(question[0].languages)[0]
              ),
              goodAnswer: question[0].name.common + " " + question[0].flag,
              totalTimeToThisQuestion: timer,
              timeToAnswer: timeToAnswer,
              questionType: questionType,
              userResponse: clickedCountryData.name,
            },
          ];
        });
        setNumberResponseDone(number);
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

  useEffect(() => {
    setIsConfirmed(false);
    setPreventClickCountry(false);
    setAnswer({ isAnswered: false, isCorrect: false });
    setMarkerCoordinates("");
  }, [question]);

  useEffect(() => {
    if (answer.isCorrect) {
      setCounterCorrect((prevCounter) => prevCounter + 1);
    }
    if (answer.isAnswered) {
      setCounterQuestion((prevCounter) => prevCounter + 1);
    }
  }, [question]);

  useEffect(() => {
    !answer.isAnswered && setClickedCountry("");
  }, [answer]);

  useEffect(() => {
    if (allResponses[allResponses.length - 1] && answer.isCorrect) {
      setScore((prev) =>
        Math.round(
          prev +
            (100 + 100 / allResponses[allResponses.length - 1].timeToAnswer)
        )
      );
    }
  }, [allResponses]);

  if (counterQuestion > questionNumber) {
    return (
      <Result
        counterCorrect={counterCorrect}
        score={score}
        questionNumber={questionNumber}
        totalTimer={timer}
        allResponses={allResponses}
      />
    );
  }

  return (
    <div>
      <div className="fixed h-full lg:absolute top-0 -z-10 w-full">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          poster="/img_video2.png"
        >
          <source
            src="http://37.187.90.23/mapquest/vid/video2new.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute z-30 top-[60px] flex flex-col items-center height-minus-nav w-full">
        <div className="height-minus-nav flex justify-center items-center w-full">
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
          <div className="h-4/5 w-[90%] p-1 relative flex rounded-lg border-solid border-2 border-slate-300 shadow-2xl bg-slate-300">
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
        </div>
      </div>

      <div className="hidden xl:block">
        <RecapGame
          score={score}
          counterQuestion={counterQuestion}
          questionNumber={questionNumber}
          response={response}
          timeToAnswer={
            allResponses[allResponses.length - 1] &&
            allResponses[allResponses.length - 1].timeToAnswer
          }
          responseDone={responseDone}
          numberResponseDone={numberResponseDone}
        />
      </div>
      <div className="hidden xl:block">
        <QuizTimer timer={timer} setTimer={setTimer} />
      </div>
    </div>
  );
};

export default Quiz;
