import { useState } from "react";
import { setSortUserScores, MAX_RATING } from "../Const";
import { ContainerTopListThree } from "./ContainerTopListThree";
import { ContainerTopListFifteen } from "./ContainerTopListFifteen";

import "../styles/ContainerTopList.css";

export function ContainerTopList({ contentUserScores }) {
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

      <ContainerTopListThree
        topThree={getTopThree}
        setSeeToplist={setSeeToplist}
      />
      <ContainerTopListFifteen topFifteen={getTopFifteen} />
    </section>
  );
}
