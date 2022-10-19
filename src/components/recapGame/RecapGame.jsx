const RecapGame = ({ counterCorrect }) => {
  return (
    <div className="absolute h-3/4 right-0">
      <div className=" opacity-90 border-2 w-64 border-solid shadow-2xl p-4 rounded-3xl border-black bg-slate-100">
        <h2 className="text-center w-full text-3xl">Detail</h2>
        <p>Question : 0/10 </p>
        <p>Good answers : {counterCorrect}</p>
      </div>
    </div>
  );
};

export default RecapGame;
