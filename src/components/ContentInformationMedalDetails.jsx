import { imagesMedals } from "./Const";
import "../styles/ContentInformationMedalsModal.css";
import "../styles/Responsive/ContentInformationMedalsModal.css";

export function ContentInformationMedalDetails({
  classModalMedalDetails,
  idMedal,
  contentDataUser,
  hiddenModalMedal,
}) {
  const medalDescription = Object.values(contentDataUser.medals.description);
  const medalName = Object.values(contentDataUser.medals.name);

  return (
    <div className={classModalMedalDetails}>
      <div className="Container__Content--Information--Medals--Modal--Content">
        <b className="Container__Content--Information--Medals--Modal--Content--Title">
          {medalName[idMedal]}
        </b>
        <picture className="Container__Content--Information--Medals--Modal--Content--Image">
          <img src={imagesMedals[idMedal]} alt="Modal image" />
        </picture>
        <p className="Container__Content--Information--Medals--Modal--Content--Details">
          {medalDescription[idMedal]}
        </p>
        <button
          className="Container__Content--Information--Medals--Modal--Content--Details--Button"
          onClick={hiddenModalMedal}
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
