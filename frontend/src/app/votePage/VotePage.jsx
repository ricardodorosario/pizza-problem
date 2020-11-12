import React from "react";
import { useSelector } from "react-redux";
import "./votePage.css";
import pizza from "../../images/pizza-2.png";
import LikeOptions from "./likeOptions/LikeOptions";
import LogoutButton from "../components/LogoutButton";

/**
 * Vote page's component.
 */
export default function VotePage() {
  const userLogged = useSelector((state) => state.userLogged);
  const votes = useSelector((state) => state.votes);

  return (
    <div className='vote-page'>
      <h2 className='vote-text'>
        Hi {userLogged}! You liked it {votes} times! {votes > 0 ? ":D" : ":("}
      </h2>
      <h1>Do you like pizza?</h1>
      <LikeOptions />
      <img src={pizza} />
      <LogoutButton title='Back' />
    </div>
  );
}
