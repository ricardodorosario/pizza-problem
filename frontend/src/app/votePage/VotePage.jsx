import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./votePage.css";
import pizza from "../../images/pizza-2.png";
import { Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import axios from "axios";

export default function VotePage() {
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.userLogged);
  const votes = useSelector((state) => state.votes);

  function logout() {
    axios
      .post("http://localhost:3001/logout/")
      .then((success) => {
        // handle success
        if (success.data.valid) {
          dispatch({ type: "LOGGED_IN", payload: false });
          dispatch({ type: "USER_LOGGED", payload: "" });
          dispatch({
            type: "SET_RANKING_CHART",
            payload: success.data.rankingChart,
          });
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  function liked() {
    axios
      .post("http://localhost:3001/vote/", {
        username: userLogged,
        votes: votes + 1,
      })
      .then((success) => {
        dispatch({ type: "VOTED", payload: success.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    console.log("Liked");
  }
  function unliked() {
    axios
      .post("http://localhost:3001/vote/", {
        username: userLogged,
        votes: votes - 1,
      })
      .then((success) => {
        dispatch({ type: "VOTED", payload: success.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    console.log("Unliked");
  }

  return (
    <div className='vote-page'>
      <h2>
        Hi {userLogged}! You liked it {votes} times! {votes > 0 ? ":D" : ":("}
      </h2>
      <h1>Do you like pizza?</h1>
      <div className='choices'>
        <Button
          title='Like'
          variant='contained'
          color='default'
          onClick={liked}>
          <FavoriteIcon color='secondary' fontSize='large' />
        </Button>
        <Button
          title='Unlike'
          variant='contained'
          color='default'
          onClick={unliked}>
          <ThumbDownIcon fontSize='large' />
        </Button>
      </div>
      <img src={pizza} />
      <Button variant='contained' color='primary' onClick={logout}>
        Back
      </Button>
    </div>
  );
}
