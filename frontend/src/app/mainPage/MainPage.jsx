import React from "react";
import "./mainPage.css";
import pizza from "../../images/pizza.png";
import Login from "../login/Login";
import Ranking from "../ranking/Ranking";

export default function MainPage() {
  return (
    <div className='main-page'>
      <Login />
      <div className='description'>
        <h1>Show how much you love pizza!</h1>
        <img src={pizza} />
      </div>
      <Ranking />
    </div>
  );
}
