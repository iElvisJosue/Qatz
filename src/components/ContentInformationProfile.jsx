import { useState } from "react";
import { IMAGES_CATS, getUserTotalScore } from "./Const";
import { ModalDeleteProfile } from "./ModalDeleteProfile";

import "../styles/ContentInformationProfile.css";
import "../styles/Responsive/ContentInformationProfile.css";

export function ContentInformationProfile({
  showMenu,
  contentDataUser,
  updateStateIsLogin,
  hiddenMenu,
}) {
  const [settings, setSettings] = useState(false);
  const [seeModalDelete, setSeeModalDelete] = useState(false);

  const userName = contentDataUser.userName;
  const userImage = contentDataUser.userImage;

  function showSettings() {
    setSettings(!settings);
  }
  function hiddenModalDelete() {
    setSeeModalDelete(false);
  }
  function deleteProfile() {
    localStorage.removeItem("dataUser");
    updateStateIsLogin(false);
  }

  const classButtonUpdate = settings
    ? "Container__Content--Information--Profile--Button--Top Show"
    : "Container__Content--Information--Profile--Button--Top";
  const classButtonDelete = settings
    ? "Container__Content--Information--Profile--Button--Delete Show"
    : "Container__Content--Information--Profile--Button--Delete";
  const classModalDeleteProfile = seeModalDelete
    ? "Container__Content--Information--Profile--Delete Show"
    : "Container__Content--Information--Profile--Delete";
  return (
    <section className="Container__Content--Information--Profile">
      <ModalDeleteProfile
        classModalDeleteProfile={classModalDeleteProfile}
        deleteProfile={deleteProfile}
        hiddenModalDelete={hiddenModalDelete}
      />
      <span className="Container__Content--Information--Profile--Button">
        {showMenu ? (
          <button
            className="Container__Content--Information--Profile--Button--Close"
            onClick={hiddenMenu}
          >
            <ion-icon name="close"></ion-icon>
          </button>
        ) : (
          false
        )}
        <button
          className="Container__Content--Information--Profile--Button--Settings"
          onClick={showSettings}
        >
          <ion-icon name="settings-outline"></ion-icon>
        </button>
        <button className={classButtonUpdate}>
          <ion-icon name="bug-outline"></ion-icon>
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
          <img src={IMAGES_CATS[userImage]} alt="Image Profile" />
          <b className="Container__Content--Information--Profile--Image--Box--TotalScore">
            {getUserTotalScore(contentDataUser)}
          </b>
        </picture>
      </span>
      <p className="Container__Content--Information--Profile--Username">
        ¡Hola, <b>{userName}</b>! Bienvenido/a ✨
      </p>
    </section>
  );
}
