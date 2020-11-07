import { Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function VotePage() {
  const dispatch = useDispatch();
  const [likedTimes, setLikedTimes] = useState(0);

  function logout() {
    //try to login into backend
    dispatch({ type: "LOGGED_IN", payload: false });
  }

  function liked() {
    //try to send liked into backend
    setLikedTimes(likedTimes + 1);
    console.log("Liked");
  }
  function unliked() {
    //try to send liked into backend
    setLikedTimes(likedTimes - 1);
    console.log("Unliked");
  }

  return (
    <div className='vote-page'>
      <h2>
        You liked it {likedTimes} times {likedTimes > 0 ? ":D" : ":("}!
      </h2>
      <h1>Chose your preference</h1>
      <div className='choices'>
        <Button variant='contained' color='default' onClick={liked}>
          <FavoriteIcon color='secondary' fontSize='large' />
        </Button>
        <Button variant='contained' color='default' onClick={unliked}>
          <ThumbDownIcon fontSize='large' />
        </Button>
      </div>
      <Button variant='contained' color='primary' onClick={logout}>
        Back
      </Button>
    </div>
  );
}
