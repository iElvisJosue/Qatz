import { useState } from "react";
import { imagesMedals } from "./Const";

import "../styles/ContentInformationMedals.css";
import "../styles/Responsive/ContentInformationMedals.css";

export function ContentInformationMedals({ contentDataUser }) {
  const [seeMedals, setSeeMedals] = useState(false);
  const [seeModalMedals, setSeeModalMedals] = useState(false);

  const totalMedals = Object.entries(contentDataUser.userMedals);
  const sortTotalMedals = totalMedals.sort((a, b) => b[1] - a[1]);
  const contentMedals = sortTotalMedals.map((e, index) => {
    const classMedal = e[1]
      ? "Container__Content--Information--Medals--Achieved--Box Achieved"
      : "Container__Content--Information--Medals--Achieved--Box";
    return (
      <picture
        key={index}
        id={index}
        className={classMedal}
        onClick={showModalMedals}
      >
        <img src={imagesMedals[index]} alt="Medalla" />
      </picture>
    );
  });

  function showModalMedals() {
    setSeeModalMedals(true);
  }

  const nameIconSee = seeMedals ? "chevron-up-outline" : "chevron-down-outline";
  const classContentMedals = seeMedals
    ? "Container__Content--Information--Medals Show"
    : "Container__Content--Information--Medals";

  return (
    <section className={classContentMedals}>
      <span className="Container__Content--Information--Medals--Header">
        <p className="Container__Content--Information--Medals--Header--Title">
          Tus medallas
        </p>
        <button
          className="Container__Content--Information--Medals--Header--See"
          onClick={() => setSeeMedals(!seeMedals)}
        >
          <ion-icon name={nameIconSee}></ion-icon>
        </button>
      </span>
      <span className="Container__Content--Information--Medals--Achieved">
        {contentMedals}
      </span>
    </section>
  );
}
