import { useState } from "react";
import { ContentInformationMedalDetails } from "./ContentInformationMedalDetails";

export function ContentInformationMedals({ contentDataUser }) {
  const [seeMedals, setSeeMedals] = useState(false);
  const [seeModalMedal, setSeeModalMedal] = useState(false);
  const [idMedal, setIdMedal] = useState(0);

  const totalMedals = Object.values(contentDataUser.medals);
  const sortUserMedals = totalMedals.sort(
    (a, b) => b.isObtained - a.isObtained
  );
  const contentMedals = sortUserMedals.map((medal, index) => {
    const classMedal = medal.isObtained
      ? "Container__Content--Information--Medals--Achieved--Box Achieved"
      : "Container__Content--Information--Medals--Achieved--Box";
    return (
      <picture
        key={index}
        id={index}
        className={classMedal}
        onClick={showModalMedal}
      >
        <img src={medal.image} alt="Medalla" />
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
        totalMedals={totalMedals}
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
