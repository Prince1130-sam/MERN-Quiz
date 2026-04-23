import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      alert(err.response?.data?.msg || "Login Failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e)=>setForm({...form, email:e.target.value})}
        />
        <br /><br />

        <input
          placeholder="Password"
          type="password"
          onChange={(e)=>setForm({...form, password:e.target.value})}
        />
        <br /><br />

        <button>Login</button>
      </form>

      {/* 🔥 Signup Option */}
      <p style={{ marginTop: "15px" }}>
        Don’t have an account?{" "}
        <span 
          onClick={() => navigate("/signup")} 
          style={{ color: "blue", cursor: "pointer" }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;