import { useLocation } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const { questions, answers } = state;

  let score = 0;

  questions.forEach((q, index) => {
    if (answers[index] === q.correctAnswer) {
      score++;
    }
  });

  return (
    <div>
      <h2>Result</h2>
      <h3>Score: {score} / {questions.length}</h3>

      <h3>Preview:</h3>

      {questions.map((q, index) => {
  const userAns = answers[index];
  const correct = q.correctAnswer;

  return (
    <div key={index} style={{ marginBottom: "20px" }}>
      
      {/* ✅ Question Number */}
      <p><b>Q {index + 1}:</b> {q.question}</p>

      {/* ✅ Options (normal) */}
      {q.options.map((opt, i) => (
        <div key={i}>
          <span
            style={{
              color: opt === userAns ? "red" : "black",
            }}
          >
            {opt}
          </span>
        </div>
      ))}

      {/* ✅ Correct Answer */}
      <p style={{ color: "green", fontWeight: "bold" }}>
        Answer: {correct}
      </p>

      <hr />
    </div>
  );
})}
    </div>
  );
};

export default Result;