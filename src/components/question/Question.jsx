import { useEffect, useState } from "react";
import countries from "../../assets/countriesData.json";

function Question({ question, setQuestion, isAnswered, gameModes }) {
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
    console.log(gameModes);
    getQuestion();
  }, []);

  const [questionType, setQuestionType] = useState(null);

  useEffect(() => {
    if (question) {
      setQuestionType([
        {
          type: "capital",
          phrase: "Which country as for capital :",
          request: question[0].capital[0],
        },
        {
          type: "currencies",
          phrase: "Which country as for monney :",
          request: Object.values(question[0].currencies)[0].name,
        },
        {
          type: "languages",
          phrase: "Which country as for primary language :",
          request: Object.values(question[0].languages)[0],
        },
      ]);
    }
  }, [question]);

  const [number, setNumber] = useState(null);

  useEffect(() => {
    let modes = [];
    if (setQuestionType) {
      gameModes.forEach((mode, index) => {
        if (mode == true) {
          modes.push(index);
        }
      });
      setNumber(modes[Math.floor(Math.random() * modes.length)]);
    }
  }, [setQuestionType]);

  useEffect(() => {
    isAnswered && getQuestion(true);
  }, [isAnswered]);

  return (
    <div className="flex justify-center absolute w-full bottom-8">
      <div className="flex items-center opacity-90 border-2 w-9/12 h-32 border-solid shadow-2xl p-4 rounded-3xl border-black bg-slate-100">
        <h2 className="text-center w-full text-3xl">
          {questionType && questionType[number].phrase}
          <b> {questionType && questionType[number].request} ?</b>
        </h2>
      </div>
    </div>
  );
}

export default Question;
