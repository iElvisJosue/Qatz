import { useState } from "react";
import { ContainerGameLevels } from "./ContainerGameLevels";
import { ContainerGameContent } from "./ContainerGameContent";

import "../styles/ContainerGame.css";

export function ContainerGame({ contentDataUser, updateContentDataUser }) {
  const [showLevels, setShowLeves] = useState(0);

  const gameTotalLevels = Object.values(contentDataUser.levels);

  return (
    <section className="Container__Game">
      {showLevels === 0 ? (
        gameTotalLevels.map((currentLevel, index) => {
          const levelTotalQuestions = currentLevel.levelQuestions.length;
          return (
            <ContainerGameLevels
              key={index}
              idLevel={index + 1}
              nameLevel={currentLevel.name}
              questionsLevel={levelTotalQuestions}
              difficultyLevel={currentLevel.difficulty}
              scoreLevel={currentLevel.score}
              progressLevel={currentLevel.progress}
              setShowLeves={setShowLeves}
            />
          );
        })
      ) : (
        <ContainerGameContent
          contentDataUser={contentDataUser}
          updateContentDataUser={updateContentDataUser}
          gameTotalLevels={gameTotalLevels}
          showLevels={showLevels}
          setShowLeves={setShowLeves}
        />
      )}
    </section>
  );
}
