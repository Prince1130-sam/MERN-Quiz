import { useState } from "react";
import API from "../services/api";

const AdminPanel = () => {

  const [unitName, setUnitName] = useState("");
  const [topicName, setTopicName] = useState("");
  const [unitId, setUnitId] = useState("");

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [topicId, setTopicId] = useState("");

  // ✅ Add Unit
  const addUnit = async () => {
    console.log("button click")
    await API.post("/api/admin/add-unit", { unitName });
    alert("Unit Added");
  };

  // ✅ Add Topic
  const addTopic = async () => {
    await API.post("/api/admin/add-topic", {
      topicName,
      unitId,
    });
    alert("Topic Added");
  };

  // ✅ Add Question
  const addQuestion = async () => {
    await API.post("/api/admin/add-question", {
      question,
      options,
      correctAnswer,
      unitId,
      topicId,
    });
    alert("Question Added");
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      {/* ADD UNIT */}
      <div>
        <h3>Add Unit</h3>
        <input placeholder="Unit Name" onChange={(e)=>setUnitName(e.target.value)} />
        <button onClick={addUnit}>Add Unit</button>
      </div>

      {/* ADD TOPIC */}
      <div>
        <h3>Add Topic</h3>
        <input placeholder="Topic Name" onChange={(e)=>setTopicName(e.target.value)} />
        <input placeholder="Unit ID" onChange={(e)=>setUnitId(e.target.value)} />
        <button onClick={addTopic}>Add Topic</button>
      </div>

      {/* ADD QUESTION */}
      <div>
        <h3>Add Question</h3>

        <input placeholder="Question" onChange={(e)=>setQuestion(e.target.value)} />

        {options.map((opt, i) => (
          <input
            key={i}
            placeholder={`Option ${i + 1}`}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[i] = e.target.value;
              setOptions(newOptions);
            }}
          />
        ))}

        <input placeholder="Correct Answer" onChange={(e)=>setCorrectAnswer(e.target.value)} />
        <input placeholder="Topic ID" onChange={(e)=>setTopicId(e.target.value)} />
        <input placeholder="Unit ID" onChange={(e)=>setUnitId(e.target.value)} />

        <button onClick={addQuestion}>Add Question</button>
      </div>

    </div>
  );
};

export default AdminPanel;