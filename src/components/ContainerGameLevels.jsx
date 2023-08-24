export function ContainerGameLevels({
  nameLevel,
  questionsLevel,
  difficultyLevel,
  scoreLevel,
  progressLevel,
  //   setShowLeves,
}) {
  function getDifficulty(levelDifficulty) {
    const maxDifficulty = 7;
    const starFilled = "★";
    const starOutline = "☆";
    return `${starFilled.repeat(levelDifficulty)}${starOutline.repeat(
      maxDifficulty - levelDifficulty
    )}`;
  }
  getDifficulty();
  return (
    <div className="Container__Game--Levels">
      <p className="Container__Game--LevelBeginner">
        Nivel: <b>{nameLevel}</b>
      </p>
      <p className="Container__Game--LevelBeginner">
        Preguntas: <b>{questionsLevel}</b>
      </p>
      <p className="Container__Game--LevelBeginner">
        Dificultad: {getDifficulty(difficultyLevel)}
      </p>
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
