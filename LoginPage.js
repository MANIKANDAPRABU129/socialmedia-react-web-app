import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./LoginPage.css"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Register Successful");
        navigate("/hello");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Try again later.");
    }

    setEmail("");
    setPassword("");
  };


  return (
    <div className="mkp">
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button className="mani0" type="submit" style={styles.button}>Login</button>
        <div>

        </div>
        <div class></div>
        <button onClick={() => navigate("/register")} className="mani1" type="submit" style={styles.button}>Register</button>
        
        

      

      </form>
    </div>
    </div>
    
  );
};

const styles = {

  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    backgroundColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
    color: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
  },
  // button: {
  //   padding: "10px",
  //   backgroundColor: "#007bff",
  //   color: "#fff",
  //   border: "none",
  //   cursor: "pointer",
  // },
  error: {
    color: "red",
    fontSize: "14px",
  },
  
};

export default LoginPage;
