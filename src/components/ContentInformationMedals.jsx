import { useState } from "react";
import { IMAGES_MEDALS } from "./Const";
import { ContentInformationMedalDetails } from "./ContentInformationMedalDetails";

import "../styles/ContentInformationMedals.css";
import "../styles/Responsive/ContentInformationMedals.css";

export function ContentInformationMedals({ contentDataUser }) {
  const [seeMedals, setSeeMedals] = useState(false);
  const [seeModalMedal, setSeeModalMedal] = useState(false);
  const [idMedal, setIdMedal] = useState();

  const totalMedals = Object.entries(contentDataUser.medals.userMedals);
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
        onClick={showModalMedal}
      >
        <img src={IMAGES_MEDALS[index]} alt="Medalla" />
      </picture>
    );
  });

  function showModalMedal(e) {
    setSeeModalMedal(true);
    const idMedalSelected = e.currentTarget.id;
    setIdMedal(idMedalSelected);
  }
  function hiddenModalMedal() {
    setSeeModalMedal(false);
  }

  const nameIconSee = seeMedals ? "chevron-up-outline" : "chevron-down-outline";
  const classContentMedals = seeMedals
    ? "Container__Content--Information--Medals Show"
    : "Container__Content--Information--Medals";
  const classModalMedalDetails = seeModalMedal
    ? "Container__Content--Information--Medals--Modal Show"
    : "Container__Content--Information--Medals--Modal";

  return (
    <section className={classContentMedals}>
      <ContentInformationMedalDetails
        classModalMedalDetails={classModalMedalDetails}
        idMedal={idMedal}
        contentDataUser={contentDataUser}
        hiddenModalMedal={hiddenModalMedal}
      />
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
