import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

const Topics = () => {
  const { unitId } = useParams();
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchTopics = async () => {
    try {
      console.log("Unit Id:", unitId);

      const res = await API.get(`/api/topics/${unitId}`);
      console.log("API Response:", res.data);

      setTopics(res.data);
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
    }
  };

  fetchTopics();
}, [unitId]);

  return (
    <div>
      <h2>Select Topic</h2>

      {topics.map((topic) => (
        <div key={topic._id}>
          <button onClick={() => navigate(`/quiz/${topic._id}`)}>
            {topic.topicName}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Topics;