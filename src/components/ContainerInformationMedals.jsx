import { useState } from "react";
import { ContainerInformationMedalsDetails } from "./ContainerInformationMedalsDetails";

export function ContainerInformationMedals({ contentDataUser }) {
  const [seeMedals, setSeeMedals] = useState(false);
  const [seeModalMedal, setSeeModalMedal] = useState(false);
  const [idMedal, setIdMedal] = useState(0);

  const totalMedals = Object.values(contentDataUser.medals);
  const sortUserMedals = totalMedals.sort(
    (a, b) => b.isObtained - a.isObtained
  );
  const contentMedals = sortUserMedals.map((medal, index) => {
    const classMedal = medal.isObtained
      ? "Container__Information--Medals--Achieved--Box Achieved"
      : "Container__Information--Medals--Achieved--Box";
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
    ? "Container__Information--Medals Show"
    : "Container__Information--Medals";
  const classModalMedalDetails = seeModalMedal
    ? "Container__Information--Medals--Modal Show"
    : "Container__Information--Medals--Modal";

  return (
    <section className={classContentMedals}>
      <ContainerInformationMedalsDetails
        classModalMedalDetails={classModalMedalDetails}
        totalMedals={totalMedals}
        idMedal={idMedal}
        contentDataUser={contentDataUser}
        hiddenModalMedal={hiddenModalMedal}
      />
      <span className="Container__Information--Medals--Header">
        <p className="Container__Information--Medals--Header--Title">
          Tus medallas
        </p>
        <button
          className="Container__Information--Medals--Header--See"
          onClick={() => setSeeMedals(!seeMedals)}
        >
          <ion-icon name={nameIconSee}></ion-icon>
        </button>
      </span>
      <span className="Container__Information--Medals--Achieved">
        {contentMedals}
      </span>
    </section>
  );
}
