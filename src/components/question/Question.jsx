import { useEffect, useState } from "react";
import countries from "../../assets/countriesData.json";

function Question({
  question,
  setQuestion,
  isAnswered,
  questionType,
  gameModes,
  number,
  setQuestionType,
  setNumber,
}) {
  const codes = countries.map((country) => country.id);
  const randomCode = codes[Math.floor(Math.random() * codes.length)];
  const getQuestion = (timeout = false) => {
    fetch(`https://restcountries.com/v3.1/alpha/${randomCode}`)
      .then((resp) => resp.json())
      .then((data) =>
        timeout
          ? setTimeout(() => {
              setQuestion(data);
            }, 2000)
          : setQuestion(data)
      );
  };

  useEffect(() => {
    if (question) {
      let modes = [];
      gameModes.forEach((mode, index) => {
        if (mode === true) {
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

  useEffect(() => {}, [questionType]);

  useEffect(() => {
    isAnswered && getQuestion(true);
  }, [isAnswered]);

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="flex justify-center absolute w-full bottom-8">
      <div className="flex items-center opacity-90 border-2 w-9/12 h-32 border-solid shadow-2xl p-4 rounded-3xl border-black bg-slate-100">
        <h2 className="text-center w-full text-3xl">
          {questionType && questionType.phrase}
          <b> {questionType && questionType.request} ?</b>
        </h2>
      </div>
    </div>
  );
}

export default Question;
