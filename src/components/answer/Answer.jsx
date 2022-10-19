const Answer = ({ answer, questionType, response }) => {
  return (
    <div
      className={`${
        answer ? "bg-green-500" : "bg-red-500"
      } top-1/2 left-1/2 absolute flex flex-col border-1 shadow-xl border-top border-solid border-black p-6 rounded-xl`}
    >
      <h1 className="text-white text-2xl text-center mb-6 font-semibold">
        {answer ? "Good!" : "Wrong!"}
      </h1>
      {questionType.type === "capital" ? (
        <p className="text-lg text-white font-semibold">
          {response} was the answer!{" "}
        </p>
      ) : (
        <p className="text-lg text-white font-semibold">
          {response} was a possible answer!
        </p>
      )}
    </div>
  );
};

export default Answer;
