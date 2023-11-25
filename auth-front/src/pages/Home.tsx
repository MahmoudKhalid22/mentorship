import React from "react";
import Form from "../components/Form";
import "./Home.css";
import bg from "../assets/bg.png";

function Home() {
  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <img src={bg} alt="background" />
        </div>
        <div className="formContainer">
        <Form />
        </div>
      </div>
    </>
  );
}

export default Home;
