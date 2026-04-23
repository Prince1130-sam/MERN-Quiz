import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/api/auth/signup", form);

      alert("Signup Successful ✅");

      // 🔥 Signup ke baad login page
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.msg || "Signup Failed");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.title}>Signup</h2>

        <input
          placeholder="Name"
          style={styles.input}
          onChange={(e)=>setForm({...form, name:e.target.value})}
        />

        <input
          placeholder="Email"
          style={styles.input}
          onChange={(e)=>setForm({...form, email:e.target.value})}
        />

        <input
          placeholder="Password"
          type="password"
          style={styles.input}
          onChange={(e)=>setForm({...form, password:e.target.value})}
        />

        <button style={styles.button}>Signup</button>

        {/* 🔥 Login option */}
        <p style={styles.text}>
          Already have an account?{" "}
          <span
            style={styles.link}
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f5f5",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  text: {
    marginTop: "15px",
    textAlign: "center",
  },
  link: {
    color: "blue",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Signup;