import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [units, setUnits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const res = await API.get("/api/units");
        setUnits(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUnits();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Select Unit</h2>

        {units.length === 0 ? (
          <p style={{ textAlign: "center" }}>No Units Found</p>
        ) : (
          units.map((unit) => (
            <button
              key={unit._id}
              style={styles.button}
              onClick={() => navigate(`/topics/${unit._id}`)}
            >
              {unit.unitName}
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
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Dashboard;