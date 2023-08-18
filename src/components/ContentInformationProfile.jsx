import { useState } from "react";
import { imagesCats } from "./Const";

import "../styles/ContentInformationProfile.css";

export function ContentInformationProfile({ contentDataUser }) {
  const [settings, setSettings] = useState(false);

  const userName = contentDataUser.userName;
  const userImage = contentDataUser.userImage;
  const userProgressLevels = contentDataUser.userProgressLevel;

  const showSettings = () => {
    setSettings(!settings);
  };
  const getTotalScore = () =>
    Object.values(userProgressLevels).reduce(
      (total, value) => total + value,
      0
    );

  const classButtonUpdate = settings
    ? "Container__Content--Information--Profile--Button--Update Show"
    : "Container__Content--Information--Profile--Button--Update";
  const classButtonDelete = settings
    ? "Container__Content--Information--Profile--Button--Delete Show"
    : "Container__Content--Information--Profile--Button--Delete";

  return (
    <div className="Container__Content--Information--Profile">
      <span className="Container__Content--Information--Profile--Button">
        <button
          className="Container__Content--Information--Profile--Button--Settings"
          onClick={showSettings}
        >
          <ion-icon name="settings-outline"></ion-icon>
        </button>
        <button className={classButtonUpdate}>
          <ion-icon name="create-outline"></ion-icon>
        </button>
        <button className={classButtonDelete}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </span>
      <span className="Container__Content--Information--Profile--Image">
        <picture className="Container__Content--Information--Profile--Image--Box">
          <img src={imagesCats[userImage]} alt="Image Profile" />
          <b className="Container__Content--Information--Profile--Image--Box--TotalScore">
            {getTotalScore()}
          </b>
        </picture>
      </span>
      <p className="Container__Content--Information--Profile--Username">
        ¡Hola, <b>{userName}</b>! Bienvenido/a ✨
      </p>
    </div>
  );
}
