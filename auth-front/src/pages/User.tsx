import React from "react";
import "./User.css";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const userDataString = localStorage.getItem("userData");

  // Check if userDataString is not null before parsing
  const userData = userDataString ? JSON.parse(userDataString) : null;

  console.log(userData);

  const token = userData.token;

  const logoutHandler = async () => {
    try {
      const response = await fetch("http://localhost:5000/users/logout", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
      localStorage.clear();
      navigate("/");
    } catch (err) {
      throw new Error("Internal server error");
    }
  };

  return (
    <>
      <h2>User Data</h2>
      <div className="userContainer">
        <div className="userItem">
          <p>Name</p>
          <p>{userData.user.username}</p>
        </div>
        <div className="userItem">
          <p>email</p>
          <p>{userData.user.email}</p>
        </div>
        <div className="userItem">
          <p>id</p>
          <p>{userData.user._id}</p>
        </div>
      </div>
      <button className="logout" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
}

export default User;
