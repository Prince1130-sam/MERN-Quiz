import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

const Topics = () => {
  const { unitId } = useParams();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await API.get(`/api/topics/${unitId}`);
        setTopics(res.data);
      } catch (err) {
        console.log("Error:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, [unitId]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Select Topic</h2>

        {loading ? (
          <p style={styles.centerText}>Loading...</p>
        ) : topics.length === 0 ? (
          <p style={styles.centerText}>No Topics Found</p>
        ) : (
          topics.map((topic) => (
            <button
              key={topic._id}
              style={styles.button}
              onClick={() => navigate(`/quiz/${topic._id}`)}
            >
              {topic.topicName}
            </button>
          ))
        )}
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
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  button: {
    padding: "12px",
    marginBottom: "10px",
    background: "#6f42c1", // 🔥 different color for variation
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
  centerText: {
    textAlign: "center",
    marginTop: "10px",
  },
};

export default Topics;