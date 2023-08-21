import "../styles/ContentInformationMedalsModal.css";
import "../styles/Responsive/ContentInformationMedalsModal.css";

export function ContentInformationMedalDetails({
  classModalMedalDetails,
  totalMedals,
  idMedal,
  hiddenModalMedal,
}) {
  const medalName = totalMedals[idMedal].name;
  const medalImage = totalMedals[idMedal].image;
  const medalDescription = totalMedals[idMedal].description;

  return (
    <div className={classModalMedalDetails}>
      <div className="Container__Content--Information--Medals--Modal--Content">
        <b className="Container__Content--Information--Medals--Modal--Content--Title">
          {medalName}
        </b>
        <picture className="Container__Content--Information--Medals--Modal--Content--Image">
          <img src={medalImage} alt="Medal Image" />
        </picture>
        <p className="Container__Content--Information--Medals--Modal--Content--Details">
          {medalDescription}
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
