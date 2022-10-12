import { useEffect, useState } from "react";
import countries from "../../../public/mapGeometry.json";

function Question({ question, setQuestion, isAnswered, setAnswered }) {
  const codes = countries.objects.world.geometries.map((country) => country.id);
  const randomCode = codes[Math.floor(Math.random() * codes.length)];
  const getQuestion = () => {
    fetch(`https://restcountries.com/v3.1/alpha/${randomCode}`)
      .then((resp) => resp.json())
      .then((data) => setQuestion(data));
  };

  useEffect(() => {
    getQuestion();
    setAnswered(false);
  }, []);

  useEffect(() => {
    if (isAnswered) {
      getQuestion();
    }
    setAnswered(false);
  }, [isAnswered]);

  return (
    <div className="flex justify-center absolute w-full bottom-8">
      <div className="flex items-center opacity-90 border-2 w-9/12 h-32 border-solid mt-20 shadow-2xl p-4 rounded-3xl border-black bg-slate-100">
        <h2 className="text-center w-full text-3xl">
          Quel pays a pour capitale :
          <b> {question ? question[0].capital[0] : ""} ?</b>
        </h2>
      </div>
    </div>
  );
}

export default Question;
