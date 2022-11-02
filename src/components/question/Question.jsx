import { useEffect } from "react";
import countries from "../../assets/countriesData.json";

function Question({
  question,
  setQuestion,
  isAnswered,
  questionType,
  gameModes,
  setQuestionType,
  setNumber,
  setPreventClickCountry,
}) {
  const codes = countries.map((country) => country.id);
  const randomCode = codes[Math.floor(Math.random() * codes.length)];
  const getQuestion = (timeout = false) => {
    fetch(`https://restcountries.com/v3.1/alpha/${randomCode}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (timeout) {
          setPreventClickCountry(true);
          setTimeout(() => {
            setQuestion(data);
          }, 2000);
        } else {
          setQuestion(data);
        }
      });
  };

  useEffect(() => {
    if (question) {
      const modes = [];
      gameModes.forEach((mode, index) => {
        if (mode) {
          modes.push(index);
        }
      });
      const randomNumber = modes[Math.floor(Math.random() * modes.length)];
      const questionData = [
        {
          type: "capital",
          phrase: "Which country has for capital :",
          request: question[0].capital[0],
        },
        {
          type: "currencies",
          phrase: "Which country has for money :",
          request: Object.values(question[0].currencies)[0].name,
        },
        {
          type: "languages",
          phrase: "Which country has for primary language :",
          request: Object.values(question[0].languages)[0],
        },
      ];

      setQuestionType(questionData[randomNumber]);
      setNumber(randomNumber);
    }
  }, [question]);

  useEffect(() => {
    getQuestion();
  }, []);

  useEffect(() => {
    isAnswered && getQuestion(true);
  }, [isAnswered]);

  return (
    <div className="flex justify-center absolute w-2/3 bottom-8 z-10">
      <div className="flex items-center opacity-95 w-9/12 h-32 shadow-2xl p-4 rounded-md bg-slate-800 text-white">
        <h2 className="text-center w-full xl:text-3xl">
          {questionType && questionType.phrase}
          <b> {questionType && questionType.request} ?</b>
        </h2>
      </div>
    </div>
  );
}

export default Question;
