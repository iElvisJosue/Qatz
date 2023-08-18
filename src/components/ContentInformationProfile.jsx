import { useState } from "react";
import { imagesCats } from "./Const";
import { ContentInformationProfileDelete } from "./ContentInformationProfileDelete";

import "../styles/ContentInformationProfile.css";

export function ContentInformationProfile({
  contentDataUser,
  updateStateIsLogin,
}) {
  const [settings, setSettings] = useState(false);
  const [seeModalDelete, setSeeModalDelete] = useState(false);

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
  const hiddenModalDelete = () => {
    setSeeModalDelete(false);
  };
  const deleteProfile = () => {
    localStorage.removeItem("dataUser");
    updateStateIsLogin(false);
  };
  const classButtonUpdate = settings
    ? "Container__Content--Information--Profile--Button--Update Show"
    : "Container__Content--Information--Profile--Button--Update";
  const classButtonDelete = settings
    ? "Container__Content--Information--Profile--Button--Delete Show"
    : "Container__Content--Information--Profile--Button--Delete";
  const classModalDeleteProfile = seeModalDelete
    ? "Container__Content--Information--Profile--Delete Show"
    : "Container__Content--Information--Profile--Delete";

  return (
    <section className="Container__Content--Information--Profile">
      <ContentInformationProfileDelete
        classModalDeleteProfile={classModalDeleteProfile}
        deleteProfile={deleteProfile}
        hiddenModalDelete={hiddenModalDelete}
      />

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
        <button
          className={classButtonDelete}
          onClick={() => setSeeModalDelete(true)}
        >
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
    </section>
  );
}
