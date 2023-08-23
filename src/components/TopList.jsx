import { useState } from "react";
import { setSortUserScores, MAX_RATING } from "./Const";
import { TopListThree } from "./TopListThree";
import { TopListFifteen } from "./TopListFifteen";

import "../styles/ContainerTopList.css";

export function TopList({ contentUserScores }) {
  const [seeToplist, setSeeToplist] = useState(false);

  const sortUserScores = setSortUserScores(contentUserScores);

  const getTopThree = sortUserScores.slice(0, 3);

  const getTopFifteen = sortUserScores.slice(3, MAX_RATING);

  const classTopList = seeToplist
    ? "Container__TopList Show"
    : "Container__TopList";
  const classButtonShow = seeToplist
    ? "Container__TopList--Button Hidden"
    : "Container__TopList--Button";

  return (
    <section className={classTopList}>
      <button className={classButtonShow} onClick={() => setSeeToplist(true)}>
        <ion-icon name="podium-outline"></ion-icon>
      </button>

      <TopListThree topThree={getTopThree} setSeeToplist={setSeeToplist} />
      <TopListFifteen topFifteen={getTopFifteen} />
    </section>
  );
}
