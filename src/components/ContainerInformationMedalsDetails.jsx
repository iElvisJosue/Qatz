import "../styles/ModalMedalDetails.css";

export function ContainerInformationMedalsDetails({
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
      <div className="Container__Information--Medals--Modal--Content">
        <b className="Container__Information--Medals--Modal--Content--Title">
          {medalName}
        </b>
        <picture className="Container__Information--Medals--Modal--Content--Image">
          <img src="../../public/Medals/AmanteDeRazas.png" alt={medalName} />
        </picture>
        <p className="Container__Information--Medals--Modal--Content--Details">
          {medalDescription}
        </p>
        <button
          className="Container__Information--Medals--Modal--Content--Details--Button"
          onClick={hiddenModalMedal}
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
