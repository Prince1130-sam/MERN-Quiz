import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

const Quiz = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await API.get(`/questions/${topicId}`);
      setQuestions(res.data);
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

  if (questions.length === 0) return <h2>Loading...</h2>;

  const currentQ = questions[currentIndex];

  return (
    <div>
      <h3>Question {currentIndex + 1}</h3>
      <p>{currentQ.question}</p>

      {currentQ.options.map((opt, i) => (
  <div key={i}>
    <label>
      <input
        type="radio"
        name={`question-${currentIndex}`}
        value={opt}
        checked={answers[currentIndex] === opt}
        onChange={() => handleAnswer(opt)}
      />
      {opt}
    </label>
  </div>
))}

      <br />

      {currentIndex > 0 && (
        <button onClick={() => setCurrentIndex(currentIndex - 1)}>
          Previous
        </button>
      )}

      {currentIndex < questions.length - 1 ? (
        <button onClick={() => setCurrentIndex(currentIndex + 1)}>
          Next
        </button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default Quiz;