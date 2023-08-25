import { DATA_USER } from "../Const";

export function ContainerGameContent({
  contentDataUser,
  updateContentDataUser,
  gameTotalLevels,
  showLevels,
  setShowLeves,
}) {
  const levelSelected = showLevels - 1;
  const progressLevelSelected = gameTotalLevels[levelSelected].progress;

  const levelSelectedName = gameTotalLevels[levelSelected].name;
  const levelSelectedQuestions = gameTotalLevels[levelSelected].levelQuestions;
  const levelSelectedTotalQuestions = levelSelectedQuestions.length;
  const levelSelectedClass = gameTotalLevels[levelSelected].class;
  const levelSelectedScore = gameTotalLevels[levelSelected].score;

  const levelSelectedFullyName = `level${levelSelectedClass}`;
  const levelSelectedCurrentProgress =
    contentDataUser.levels[levelSelectedFullyName].progress;

  function updateProgressLevel() {
    // contentDataUser.levels.progress[levelSelectedFullyName] ES PROGRESO
    // DEL NIVEL SELECCIONADO
    contentDataUser.levels[levelSelectedFullyName].progress =
      levelSelectedCurrentProgress + 1;
    localStorage.setItem(DATA_USER, JSON.stringify(contentDataUser));
    const updateProgressLevel = JSON.parse(localStorage.getItem(DATA_USER));
    updateContentDataUser(updateProgressLevel);
  }

  function updateScoreLevel() {
    contentDataUser.levels[levelSelectedFullyName].score =
      levelSelectedScore + 10;
    localStorage.setItem(DATA_USER, JSON.stringify(contentDataUser));
    const updateScoreLevel = JSON.parse(localStorage.getItem(DATA_USER));
    updateContentDataUser(updateScoreLevel);
  }

  function checkAnswer(event, answerQuestion) {
    const answerSelected = Number(event.target.id);
    updateProgressLevel();
    answerSelected === answerQuestion
      ? updateScoreLevel()
      : alert("INCORRECTO");
  }

  if (progressLevelSelected < levelSelectedTotalQuestions) {
    const titleQuestion = levelSelectedQuestions[progressLevelSelected].title;
    const arrQuestions = levelSelectedQuestions[progressLevelSelected].answers;
    const answerQuestion = levelSelectedQuestions[progressLevelSelected].answer;
    // const curiousFactQuestion =
    //   levelSelectedQuestions[progressLevelSelected].curiousFact;
    const answersQuestion = arrQuestions.map((answer, index) => {
      return (
        <button
          key={index}
          id={index}
          className={`Container__Game--Content--Details--Answers--Option ${levelSelectedClass}`}
          onClick={(event) => checkAnswer(event, answerQuestion)}
        >
          {answer}
        </button>
      );
    });

    return (
      <div className="Container__Game--Content">
        <header className="Container__Game--Content--Header">
          <button
            className={`Container__Game--Content--Header--Back ${levelSelectedClass}`}
            onClick={() => setShowLeves(0)}
          >
            <ion-icon name="arrow-back"></ion-icon>
          </button>
          <span className="Container__Game--Content--Header--Progress">
            <p
              className={`Container__Game--Content--Header--Progress--Name ${levelSelectedClass}`}
            >
              {levelSelectedName}
            </p>
            <progress
              className={`Container__Game--Content--Header--Progress--Bar ${levelSelectedClass}`}
              max={levelSelectedTotalQuestions}
              value={progressLevelSelected}
            ></progress>
          </span>
        </header>
        <div className="Container__Game--Content--Details">
          <picture className="Container__Game--Content-Details--Image">
            <img
              src="https://cope-cdnmed.agilecontent.com/resources/jpg/7/0/1673121316107.jpg"
              alt=""
            />
          </picture>
          <span
            className={`Container__Game--Content--Details--Points ${levelSelectedClass}`}
          >
            10 Puntos
          </span>
          <p
            className={`Container__Game--Content--Details--Tittle ${levelSelectedClass}`}
          >
            {titleQuestion}
          </p>
          <div className="Container__Game--Content--Details--Answers">
            {answersQuestion}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>NIVEL TERMINADO</h1>;
  }
}
