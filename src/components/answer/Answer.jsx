const Answer = ({ answer }) => {
  return (
    <div className="absolute justify-self-center bg-white border-2 border-solid border-black p-6 m-10 rounded-xl">
      <h1>{answer === true ? "✔️ Good answer!" : "❌ Wrong answer!"}</h1>
    </div>
  );
};

export default Answer;
