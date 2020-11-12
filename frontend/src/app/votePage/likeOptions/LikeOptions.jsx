import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./likeOptions.css";
import { Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import axios from "axios";

/**
 * Like options' component.
 */
export default function LikeOptions() {
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.userLogged);
  const votes = useSelector((state) => state.votes);

  function vote(like) {
    axios
      .post("http://localhost:3001/vote/", {
        username: userLogged,
        votes: like ? votes + 1 : votes - 1,
      })
      .then((success) => {
        dispatch({ type: "VOTED", payload: success.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  function like() {
    vote(true);
  }
  function unlike() {
    vote(false);
  }

  return (
    <div className='choices'>
      <Button
        className='like-button'
        title='Like'
        variant='contained'
        color='default'
        onClick={like}>
        <FavoriteIcon color='secondary' fontSize='large' />
      </Button>
      <Button
        className='unlike-button'
        title='Unlike'
        variant='contained'
        color='default'
        onClick={unlike}>
        <ThumbDownIcon fontSize='large' />
      </Button>
    </div>
  );
}
