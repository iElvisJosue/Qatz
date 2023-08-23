import { useState } from "react";

import { ContainerInformationProfile } from "./ContainerInformationProfile";
import { ContainerInformationMedals } from "./ContainerInformationMedals";
import { ContainerInformationProgress } from "./ContainerInformationProgress";

import "../styles/ContainerMenu.css";

export function ContainerMenu({
  contentDataUser,
  updateDataUser,
  setSeeModalDelete,
  updateStateIsLogin,
}) {
  const [seeMenu, setSeeMenu] = useState(false);

  const classMenuIcon = seeMenu
    ? "Container__Menu--Button Show"
    : "Container__Menu--Button";
  const classMenuContent = seeMenu
    ? "Container__Menu--Content Show"
    : "Container__Menu--Content";

  function hiddenMenu() {
    setSeeMenu(false);
  }

  return (
    <>
      <button className={classMenuIcon} onClick={() => setSeeMenu(!seeMenu)}>
        <ion-icon name="filter"></ion-icon>
      </button>
      <section className={classMenuContent}>
        <aside className="Container__Menu--Content--Details">
          <ContainerInformationProfile
            showMenu={true}
            setSeeModalDelete={setSeeModalDelete}
            contentDataUser={contentDataUser}
            updateStateIsLogin={updateStateIsLogin}
            hiddenMenu={hiddenMenu}
          />
          <ContainerInformationMedals contentDataUser={contentDataUser} />
          <ContainerInformationProgress
            contentDataUser={contentDataUser}
            updateDataUser={updateDataUser}
          />
        </aside>
      </section>
    </>
  );
}
