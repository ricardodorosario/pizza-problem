import React, { useEffect, useState } from "react";
import "./ranking.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

/**
 * Ranking jsx function
 */
export default function Ranking() {
  const [rankingList, setRankingList] = useState([]);
  useEffect(() => {
    const list = [
      { username: "Mary", likes: 1235 },
      { username: "John", likes: 50 },
      { username: "Gary", likes: 18 },
      { username: "Lary", likes: 15 },
      { username: "Mario", likes: 10 },
      { username: "Anna", likes: 5 },
      { username: "Bill", likes: 3 },
      { username: "Joe", likes: 1 },
      { username: "Donald", likes: -2 },
      { username: "Larry", likes: -10 },
    ];
    if (rankingList.length === 0) {
      setRankingList(
        list.map((user) => {
          return (
            <li key={user.username}>
              <div>{user.username}:</div>
              <div className='likes'>
                <div>{user.likes}</div> <FavoriteIcon color='secondary' />
              </div>
            </li>
          );
        })
      );
    }
  });

  return (
    <div className='ranking'>
      <h2>Lover's Ranking</h2>
      <ul>{rankingList}</ul>
    </div>
  );
}
