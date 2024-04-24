export function ContainerGameLevels({
  index,
  currentLevel,
  setShowLevelContent,
}) {
  function getDifficulty(levelDifficulty) {
    const maxDifficulty = 7;
    const starFilled = "★ ";
    const starOutline = " ☆";
    return `${starFilled.repeat(levelDifficulty)}${starOutline.repeat(
      maxDifficulty - levelDifficulty
    )}`;
  }

  const levelTotalQuestions = currentLevel.levelQuestions.length;
  const { name, difficulty, score, progress } = currentLevel;

  return (
    <div
      className="Container__Game--Levels"
      id={index}
      onClick={(e) => setShowLevelContent(Number(e.currentTarget.id))}
    >
      {progress === levelTotalQuestions ? (
        <span className="Container__Game--Levels--Completed">
          <ion-icon name="checkmark-done-circle"></ion-icon>
        </span>
      ) : (
        false
      )}
      <span className="Container__Game--Levels--Details">
        <p>
          Nivel: <b>{name}</b>
        </p>
        <p>
          Preguntas: <b>{levelTotalQuestions}</b>
        </p>
        <p>
          Dificultad: <b>{getDifficulty(difficulty)}</b>
        </p>
      </span>
      <b className="Container__Game--LevelBeginner--Score">Score: {score}</b>
      <progress
        className="Container__Game--LevelBeginner--Progress"
        max={levelTotalQuestions}
        value={progress}
      ></progress>
    </div>
  );
}
