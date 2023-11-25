import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState("");

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

  return (
    <form onSubmit={createUser}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={user.username}
          onChange={(e: any) => setUser({ ...user, username: e.target.value })}
        />
      </div>
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
      <input type="submit" className="submit" value="sign up" />
      {loading && <p>loading</p>}
      {err && <p>Error</p>}
      {msg && <p>{msg}</p>}
    </form>
  );
}

export default Form;
