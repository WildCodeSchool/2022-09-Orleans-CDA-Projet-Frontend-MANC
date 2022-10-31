import readableTimer from "../../helpers/readableTimer";

const RecapGame = ({
  score,
  counterQuestion,
  questionNumber,
  response,
  timeToAnswer,
}) => {
  return (
    <div className="z-50 absolute top-32 right-0 m-10">
      <div className="my-10 w-auto shadow-2xl p-4 rounded-md border-black bg-slate-800 text-white">
        <h2 className="text-center w-full text-3xl mb-4">Details</h2>
        <p>{`Question : ${counterQuestion}/${questionNumber}`}</p>
        {timeToAnswer && (
          <p>{`You responded in ${readableTimer(timeToAnswer)}`}</p>
        )}
        <p>Score : {score}</p>
        <p>
          {response !== "" && "Previous correct answer :"} {response}
        </p>
      </div>
    </div>
  );
};

export default RecapGame;
