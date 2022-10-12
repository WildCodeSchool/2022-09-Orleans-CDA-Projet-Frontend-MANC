const Answer = ({ isCorrect }) => {
  console.log(isCorrect);
  return (
    <div className="absolute bg-white border-2 border-solid border-black p-6 m-10 rounded-xl">
      <h1>{isCorrect === true ? "✔️ Good answer!" : "❌ Wrong answer!"}</h1>
    </div>
  );
};

export default Answer;
