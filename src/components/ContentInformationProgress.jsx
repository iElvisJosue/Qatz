import { useState } from "react";
import { ContentInformationProgressLevel } from "./ContentInformationProgressLevel";

import "../styles/ContentInformationProgress.css";
import "../styles/Responsive/ContentInformationProgress.css";

export function ContentInformationProgress({
  contentDataUser,
  updateDataUser,
}) {
  const totalLevels = Object.keys(contentDataUser.levels.progress);

  const [seeProgress, setSeeProgress] = useState(false);

  const nameIconSee = seeProgress
    ? "chevron-up-outline"
    : "chevron-down-outline";
  const classContentMedals = seeProgress
    ? "Container__Content--Information--Progress Show"
    : "Container__Content--Information--Progress";

  return (
    <section className={classContentMedals}>
      <span className="Container__Content--Information--Progress--Header">
        <p className="Container__Content--Information--Progress--Header--Title">
          Progreso actual
        </p>
        <button
          className="Container__Content--Information--Progress--Header--See"
          onClick={() => setSeeProgress(!seeProgress)}
        >
          <ion-icon name={nameIconSee}></ion-icon>
        </button>
      </span>
      {totalLevels.map((e, index) => {
        return (
          <ContentInformationProgressLevel
            key={index}
            level={index}
            contentDataUser={contentDataUser}
            nameProgressLevel={e}
            updateDataUser={updateDataUser}
          />
        );
      })}
    </section>
  );
}
