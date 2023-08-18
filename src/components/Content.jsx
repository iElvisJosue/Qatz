import { useState } from "react";

import { levelDetails } from "./Const";
import { ContentProgress } from "./ContentProgress";
import { ContentInformationProfile } from "./ContentInformationProfile";
import { ContentInformationMedals } from "./ContentInformationMedals";

import "../styles/Content.css";
// import '../styles/Responsive/Content.css'

export function Content() {
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));

  const [contentDataUser, updateContentDataUser] = useState(dataUser);

  const updateDataUser = (nameProgressLevel, currentProgressLevel, level) => {
    const totalQuestions = levelDetails[level].levelQuestions;
    if (currentProgressLevel < totalQuestions) {
      // dataUser.userProgressLevel[nameProgressLevel] ES EL NIVEL EL SCORE
      // DEL NIVEL SELECCIONADO
      dataUser.userProgressLevel[nameProgressLevel] = currentProgressLevel + 1;
      localStorage.setItem("dataUser", JSON.stringify(dataUser));
      const updatedUserData = JSON.parse(localStorage.getItem("dataUser"));
      updateContentDataUser(updatedUserData);
    }
  };

  return (
    <section className="Container__Content">
      <aside className="Container__Content--Progress">
        <ContentProgress
          contentDataUser={contentDataUser}
          updateDataUser={updateDataUser}
        />
      </aside>
      <div className="Container__Content--Game">
        <h1>Contenido principal</h1>
      </div>
      <article className="Container__Content--Information">
        <ContentInformationProfile contentDataUser={contentDataUser} />
        <ContentInformationMedals contentDataUser={contentDataUser} />
      </article>
    </section>
  );
}
