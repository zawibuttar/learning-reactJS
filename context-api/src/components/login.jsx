import React, { useState ,useContext} from "react";
import userContext from "../context/userContext";

const Login = () => {
 
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const {setUser}=useContext(userContext)

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser({ username: form.username, password: form.password });

    
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Login</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
