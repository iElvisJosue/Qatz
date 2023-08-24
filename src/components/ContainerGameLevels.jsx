export function ContainerGameLevels({
  idLevel,
  nameLevel,
  questionsLevel,
  difficultyLevel,
  scoreLevel,
  progressLevel,
  setShowLeves,
}) {
  function getDifficulty(levelDifficulty) {
    const maxDifficulty = 7;
    const starFilled = "★ ";
    const starOutline = " ☆";
    return `${starFilled.repeat(levelDifficulty)}${starOutline.repeat(
      maxDifficulty - levelDifficulty
    )}`;
  }

  return (
    <div
      className="Container__Game--Levels"
      id={idLevel}
      onClick={(e) => setShowLeves(Number(e.currentTarget.id))}
    >
      {progressLevel === questionsLevel ? (
        <span className="Container__Game--Levels--Completed">
          <ion-icon name="checkmark-done-circle"></ion-icon>
        </span>
      ) : (
        false
      )}
      <span className="Container__Game--Levels--Details">
        <p>
          Nivel: <b>{nameLevel}</b>
        </p>
        <p>
          Preguntas: <b>{questionsLevel}</b>
        </p>
        <p>
          Dificultad: <b>{getDifficulty(difficultyLevel)}</b>
        </p>
      </span>
      <b className="Container__Game--LevelBeginner--Score">
        Score: {scoreLevel}
      </b>
      <progress
        className="Container__Game--LevelBeginner--Progress"
        max={questionsLevel}
        value={progressLevel}
      ></progress>
    </div>
  );
}
