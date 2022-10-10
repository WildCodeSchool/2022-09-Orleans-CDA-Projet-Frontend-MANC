import { useEffect, useState } from "react";
import countries from "../../../public/mapGeometry.json";

function Question() {
  const [question, setQuestion] = useState("");

  const codes = countries.objects.world.geometries.map((country) => country.id);
  useEffect(() => {
    const randomCode = codes[Math.floor(Math.random() * codes.length)];
    fetch(`https://restcountries.com/v3.1/alpha/${randomCode}`)
      .then((resp) => resp.json())
      .then((data) => setQuestion(data));
  }, []);

  return (
    <div className="flex justify-center absolute w-full bottom-8">
      <div className="flex items-center opacity-90 border-2 w-9/12 h-32 border-solid mt-20 shadow-2xl p-4 rounded-3xl border-black bg-slate-100">
        <h2 className="text-center w-full text-3xl">
          Quel pays a pour capital :
          <b> {question ? question[0].capital[0] : ""} ?</b>
        </h2>
      </div>
    </div>
  );
}

export default Question;
