import { useState } from "react";
import API from "../services/api";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", form);
      alert("Signup Successful");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>

      <input placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={(e)=>setForm({...form, password:e.target.value})}/>

      <button>Signup</button>
    </form>
  );
};

export default Signup;