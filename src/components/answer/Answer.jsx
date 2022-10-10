const Answer = ({ answer }) => {
  return (
    <div>
      <h1>{answer === true ? "✔️ Good answer!" : "❌ Wrong answer!"}</h1>
    </div>
  );
};

export default Answer;
