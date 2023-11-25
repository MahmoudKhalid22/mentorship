import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState("");
  const [data, setData] = useState("");

  const createUser = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      if (!response.ok) {
        setErr(true);
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
      const message = await response.json();
      setMsg(message.message);
      setUser({
        ...user,
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const loginHandler = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      if (!response.ok) {
        setErr(true);
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
      const userData = await response.json();
      setData(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("iam from login page");

      navigate("/me");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={login ? loginHandler : createUser}>
      {!login && (
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={user.username}
            onChange={(e: any) =>
              setUser({ ...user, username: e.target.value })
            }
          />
        </div>
      )}
      <div>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(e: any) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e: any) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <input
        type="submit"
        className="submit"
        value={login ? "Login" : "Sign up"}
      />
      <p>
        {login ? "create a new account" : "Already have an account"}
        <span onClick={() => setLogin((prev) => !prev)} className="signin">
          {login ? "Sign up" : "login"}
        </span>
      </p>
      {loading && <p>loading</p>}
      {err && <p>Error</p>}
      {msg && <p>{msg}</p>}
    </form>
  );
}

export default Form;
