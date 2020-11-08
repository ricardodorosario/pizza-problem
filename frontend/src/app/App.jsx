import React from "react";
import { useSelector } from "react-redux";
import "./app.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import MainPage from "./mainPage/MainPage";
import VotePage from "./votePage/VotePage";

export default function App() {
  const loggedIn = useSelector((state) => state.loggedIn);
  return (
    <div className='App'>
      <AppHeader />
      {loggedIn ? <VotePage /> : <MainPage />}
      <AppFooter />
    </div>
  );
}
