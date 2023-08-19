import { useState } from "react";

import { ContentInformationProfile } from "./ContentInformationProfile";
import { ContentInformationMedals } from "./ContentInformationMedals";
import { ContentInformationProgress } from "./ContentInformationProgress";

import "../styles/ContainerMenu.css";
import "../styles/Responsive/ContainerMenu.css";

export function Menu({ contentDataUser, updateDataUser, updateStateIsLogin }) {
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
          <ContentInformationProfile
            showMenu={true}
            contentDataUser={contentDataUser}
            updateStateIsLogin={updateStateIsLogin}
            hiddenMenu={hiddenMenu}
          />
          <ContentInformationMedals contentDataUser={contentDataUser} />
          <ContentInformationProgress
            contentDataUser={contentDataUser}
            updateDataUser={updateDataUser}
          />
        </aside>
      </section>
    </>
  );
}
