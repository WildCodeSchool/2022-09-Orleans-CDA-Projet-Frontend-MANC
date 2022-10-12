import { useEffect, useState } from "react";
import countries from "../../../public/mapGeometry.json";

function Question() {
  const [question, setQuestion] = useState(null);

  const codes = countries.objects.world.geometries.map((country) => country.id);
  useEffect(() => {
    const randomCode = codes[Math.floor(Math.random() * codes.length)];
    fetch(`https://restcountries.com/v3.1/alpha/${randomCode}`)
      .then((resp) => resp.json())
      .then((data) => setQuestion(data));
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

  return (
    <div className="flex justify-center absolute w-full bottom-8">
      <div className="flex items-center opacity-90 border-2 w-9/12 h-32 border-solid mt-20 shadow-2xl p-4 rounded-3xl border-black bg-slate-100">
        <h2 className="text-center w-full text-3xl">
          {questionType && questionType[2].phrase}
          <b> {questionType && questionType[2].request} ?</b>
        </h2>
      </div>
    </div>
  );
}

export default Question;
