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
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Result</h2>

        <h3 style={styles.score}>
          Score: {score} / {questions.length}
        </h3>

        {questions.map((q, index) => {
          const userAns = answers[index];
          const correct = q.correctAnswer;

          return (
            <div key={index} style={styles.questionBox}>
              
              {/* Question */}
              <p style={styles.question}>
                <b>Q{index + 1}:</b> {q.question}
              </p>

              {/* Options */}
              {q.options.map((opt, i) => {
                let color = "#000";

                if (opt === correct) {
                  color = "green"; // correct answer
                }

                if (opt === userAns && userAns !== correct) {
                  color = "red"; // wrong selected
                }

                return (
                  <div key={i} style={{ color, marginBottom: "5px" }}>
                    {opt}
                  </div>
                );
              })}

              {/* Correct Answer */}
              <p style={{ color: "green", fontWeight: "bold" }}>
                Answer: {correct}
              </p>

              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "15px",
    background: "#f5f5f5",
    minHeight: "100vh",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "600px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
  },
  score: {
    textAlign: "center",
    color: "#007bff",
    marginBottom: "20px",
  },
  questionBox: {
    marginBottom: "15px",
  },
  question: {
    marginBottom: "10px",
  },
};

export default Result;