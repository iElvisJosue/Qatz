import { useState } from "react";
import { ContainerGameLevels } from "./ContainerGameLevels";
import { ContainerGameContent } from "./ContainerGameContent";

import "../styles/ContainerGame.css";

export function ContainerGame({
  contentDataUser,
  updateContentDataUser,
  updateContentUserScores,
}) {
  const [showLevelContent, setShowLevelContent] = useState(false);

  const gameTotalLevels = Object.values(contentDataUser.levels);

  return (
    <section className="Container__Game">
      {showLevelContent !== false ? (
        <ContainerGameContent
          contentDataUser={contentDataUser}
          updateContentDataUser={updateContentDataUser}
          updateContentUserScores={updateContentUserScores}
          gameTotalLevels={gameTotalLevels}
          showLevelContent={showLevelContent}
          setShowLevelContent={setShowLevelContent}
        />
      ) : (
        gameTotalLevels.map((currentLevel, index) => {
          return (
            <ContainerGameLevels
              key={index}
              index={index}
              currentLevel={currentLevel}
              setShowLevelContent={setShowLevelContent}
            />
          );
        })
      )}
    </section>
  );
}
