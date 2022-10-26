const RecapGame = ({
  counterCorrect,
  counterQuestion,
  questionNumber,
  response,
}) => {
  return (
    <div className="z-50 absolute top-32 right-0 m-10">
      <div className="my-10 border-2 w-auto border-solid shadow-2xl p-4 rounded-2xl border-black bg-slate-100">
        <h2 className="text-center w-full text-3xl mb-4">Details</h2>
        <p>{`Question : ${counterQuestion}/${questionNumber}`}</p>
        <p>Score : {counterCorrect}</p>
        <p>
          {response !== "" && "Previous correct answer :"} {response}
        </p>
      </div>
    </div>
  );
};

export default RecapGame;
