import { useState } from "react";
import { ContentInformationProgressLevel } from "./ContentInformationProgressLevel";

export function ContentInformationProgress({
  contentDataUser,
  updateDataUser,
}) {
  const totalLevels = Object.values(contentDataUser.levels);

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
      {totalLevels.map((currentLevel, index) => {
        const nameLevel = currentLevel.name;
        const imageLevel = currentLevel.image;
        const altImageLevel = currentLevel.imageAlt;
        const classLevel = currentLevel.class;
        const totalLevelQuestions = currentLevel.levelQuestions.length;

        return (
          <ContentInformationProgressLevel
            key={index}
            nameLevel={nameLevel}
            imageLevel={imageLevel}
            altImageLevel={altImageLevel}
            classLevel={classLevel}
            totalLevelQuestions={totalLevelQuestions}
            contentDataUser={contentDataUser}
            updateDataUser={updateDataUser}
          />
        );
      })}
    </section>
  );
}
