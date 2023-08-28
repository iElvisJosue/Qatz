import { useState } from "react";
import { DATA_USER, USER_SCORES, getUserTotalScore } from "../Const";
import { ContainerGameModal } from "./ContainerGameModal";

export function ContainerGameContent({
  contentDataUser,
  updateContentDataUser,
  updateContentUserScores,
  gameTotalLevels,
  showLevels,
  setShowLeves,
}) {
  const [seeGameModal, setSeeGameModal] = useState(false);
  const [answer, setAnswer] = useState(false);

  const levelSelected = showLevels - 1;
  const progressLevelSelected = gameTotalLevels[levelSelected].progress;

  const levelSelectedName = gameTotalLevels[levelSelected].name;
  const levelSelectedQuestions = gameTotalLevels[levelSelected].levelQuestions;
  const levelSelectedTotalQuestions = levelSelectedQuestions.length;
  const levelSelectedClass = gameTotalLevels[levelSelected].class;
  const levelSelectedScore = gameTotalLevels[levelSelected].score;

  const levelSelectedFullyName = `level${levelSelectedClass}`;
  const levelSelectedFullyNameMedal = `medal${levelSelectedClass}`;
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

  function updateLeadBoard() {
    const newUserTotalScore = getUserTotalScore(contentDataUser);
    const getUserScores = JSON.parse(localStorage.getItem(USER_SCORES));
    const getTotalUserScores = Object.keys(getUserScores).length;
    const getNameUser = `user${getTotalUserScores}`;
    getUserScores[getNameUser].userScore = newUserTotalScore;
    localStorage.setItem(USER_SCORES, JSON.stringify(getUserScores));
    const updatedUserScores = JSON.parse(localStorage.getItem(USER_SCORES));
    updateContentUserScores(updatedUserScores);
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
    setSeeGameModal(true);
    if (answerSelected === answerQuestion) setAnswer(true);
  }

  function checkMedal() {
    // SE AGREGA EL 10 PORQUE EL SCORE NO DETECTA LA ACTUALIZACIÓN AQUÍ
    if (levelSelectedScore + 10 === levelSelectedTotalQuestions * 10) {
      contentDataUser.medals[levelSelectedFullyNameMedal].isObtained = true;
      localStorage.setItem(DATA_USER, JSON.stringify(contentDataUser));
      const updateLevelMedal = JSON.parse(localStorage.getItem(DATA_USER));
      updateContentDataUser(updateLevelMedal);
    }
  }

  if (progressLevelSelected < levelSelectedTotalQuestions) {
    const imageQuestion = levelSelectedQuestions[progressLevelSelected].image;
    const titleQuestion = levelSelectedQuestions[progressLevelSelected].title;
    const arrQuestions = levelSelectedQuestions[progressLevelSelected].answers;
    const answerQuestion = levelSelectedQuestions[progressLevelSelected].answer;
    const curiousFactQuestion =
      levelSelectedQuestions[progressLevelSelected].curiousFact;
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
      <>
        <ContainerGameModal
          updateScoreLevel={updateScoreLevel}
          updateLeadBoard={updateLeadBoard}
          levelSelectedCurrentProgress={levelSelectedCurrentProgress}
          levelSelectedTotalQuestions={levelSelectedTotalQuestions}
          seeGameModal={seeGameModal}
          setSeeGameModal={setSeeGameModal}
          answer={answer}
          setAnswer={setAnswer}
          curiousFactQuestion={curiousFactQuestion}
          updateProgressLevel={updateProgressLevel}
          checkMedal={checkMedal}
          contentDataUser={contentDataUser}
          updateContentDataUser={updateContentDataUser}
        />
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
                src={imageQuestion}
                alt="Imagen de gatos relacionada con la pregunta"
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
      </>
    );
  } else {
    return (
      <div className="Container__Game--Completed">
        <img
          src="./Done.png"
          alt="Level completed"
          className="Container__Game--Completed--Image"
        />
        <p
          className={`Container__Game--Completed--Title ${levelSelectedClass}`}
        >
          ¡FELICIDADES, HAZ COMPLETADO ESTE NIVEL! 🎉 <br /> ¡A POR EL TOP #1!
          🥇
        </p>
        <button
          className={`Container__Game--Completed--Back ${levelSelectedClass}`}
          onClick={() => setShowLeves(0)}
        >
          Seguir jugando
        </button>
      </div>
    );
  }
}
