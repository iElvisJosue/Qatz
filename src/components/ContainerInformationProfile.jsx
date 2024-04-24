import { useState } from "react";
import { IMAGES_CATS, getUserTotalScore } from "../Const";
import { ContainerInformationProfileModal } from "./ContainerInformationProfileModal";
export function ContainerInformationProfile({
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

  const classButtonDelete = settings
    ? "Container__Information--Profile--Button--Delete Show"
    : "Container__Information--Profile--Button--Delete";
  const classModalDeleteProfile = seeModalDelete
    ? "Container__Information--Profile--Delete Show"
    : "Container__Information--Profile--Delete";
  return (
    <section className="Container__Information--Profile">
      <ContainerInformationProfileModal
        classModalDeleteProfile={classModalDeleteProfile}
        deleteProfile={deleteProfile}
        hiddenModalDelete={hiddenModalDelete}
      />
      <span className="Container__Information--Profile--Button">
        {showMenu ? (
          <button
            className="Container__Information--Profile--Button--Close"
            onClick={hiddenMenu}
          >
            <ion-icon name="close"></ion-icon>
          </button>
        ) : (
          false
        )}
        <button
          className="Container__Information--Profile--Button--Settings"
          onClick={showSettings}
        >
          <ion-icon name="settings-outline"></ion-icon>
        </button>
        <button
          className={classButtonDelete}
          onClick={() => setSeeModalDelete(true)}
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </span>
      <span className="Container__Information--Profile--Image">
        <picture className="Container__Information--Profile--Image--Box">
          <img src={IMAGES_CATS[userImage]} alt="Image Profile" />
          <b className="Container__Information--Profile--Image--Box--TotalScore">
            {getUserTotalScore(contentDataUser)}
          </b>
        </picture>
      </span>
      <p className="Container__Information--Profile--Username">
        ¡Hola, <b>{userName}</b>! Bienvenido/a ✨
      </p>
    </section>
  );
}
