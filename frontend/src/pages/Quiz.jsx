import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

const Quiz = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await API.get(`/api/questions/${topicId}`);
        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [topicId]);

  const handleAnswer = (option) => {
    setAnswers({
      ...answers,
      [currentIndex]: option,
    });
  };

  const handleSubmit = () => {
    navigate("/result", { state: { questions, answers } });
  };

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  const currentQ = questions[currentIndex];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.questionNo}>
          Question {currentIndex + 1} / {questions.length}
        </h3>

        <p style={styles.question}>{currentQ.question}</p>

        {/* 🔥 Options */}
        {currentQ.options.map((opt, i) => (
          <label
            key={i}
            style={{
              ...styles.option,
              background:
                answers[currentIndex] === opt ? "#d1e7dd" : "#f8f9fa",
            }}
          >
            <input
              type="radio"
              name={`question-${currentIndex}`}
              value={opt}
              checked={answers[currentIndex] === opt}
              onChange={() => handleAnswer(opt)}
              style={{ marginRight: "10px" }}
            />
            {opt}
          </label>
        ))}

        {/* 🔥 Buttons */}
        <div style={styles.buttonContainer}>
          {currentIndex > 0 && (
            <button
              style={styles.prevBtn}
              onClick={() => setCurrentIndex(currentIndex - 1)}
            >
              Previous
            </button>
          )}

          {currentIndex < questions.length - 1 ? (
            <button
              style={styles.nextBtn}
              onClick={() => setCurrentIndex(currentIndex + 1)}
            >
              Next
            </button>
          ) : (
            <button style={styles.submitBtn} onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "15px",
    background: "#f5f5f5",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
  },
  questionNo: {
    textAlign: "center",
    marginBottom: "10px",
  },
  question: {
    fontSize: "18px",
    marginBottom: "20px",
    textAlign: "center",
  },
  option: {
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "1px solid #ccc",
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  prevBtn: {
    padding: "10px",
    background: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  nextBtn: {
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  submitBtn: {
    padding: "10px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Quiz;