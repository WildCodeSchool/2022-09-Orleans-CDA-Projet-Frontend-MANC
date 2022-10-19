const RecapGame = ({ counterCorrect, response }) => {
  return (
    <div className="absolute h-3/4 right-0 m-10">
      <div className=" opacity-90 border-2 w-64 border-solid shadow-2xl p-4 rounded-3xl border-black bg-slate-100">
        <h2 className="text-center w-full text-3xl">Detail</h2>
        <p>Question : 0/10 </p>
        <p>Score : {counterCorrect}</p>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default RecapGame;
