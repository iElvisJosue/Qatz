import { useState } from "react";
import { DATA_USER, USER_SCORES, getUserTotalScore } from "../Const";
import { ContainerGameModal } from "./ContainerGameModal";
import { ContainerGameMedalNotification } from "./ContainerGameMedalNotification";

import Confetti from "react-confetti";

export function ContainerGameContent({
  contentDataUser,
  updateContentDataUser,
  updateContentUserScores,
  gameTotalLevels,
  showLevelContent,
  setShowLevelContent,
}) {
  const [seeGameModal, setSeeGameModal] = useState(false);
  const [seeMedalNotification, setSeeMedalNotification] = useState(false);
  const [answer, setAnswer] = useState(false);

  const progressLevelSelected = gameTotalLevels[showLevelContent].progress;

  const levelSelectedName = gameTotalLevels[showLevelContent].name;
  const levelSelectedQuestions =
    gameTotalLevels[showLevelContent].levelQuestions;
  const levelSelectedTotalQuestions = levelSelectedQuestions.length;
  const levelSelectedClass = gameTotalLevels[showLevelContent].class;
  const levelSelectedScore = gameTotalLevels[showLevelContent].score;

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
    if (levelSelectedScore + 10 === levelSelectedTotalQuestions * 10) {
      contentDataUser.medals[levelSelectedFullyNameMedal].isObtained = true;
      localStorage.setItem(DATA_USER, JSON.stringify(contentDataUser));
      const updateLevelMedal = JSON.parse(localStorage.getItem(DATA_USER));
      updateContentDataUser(updateLevelMedal);
      setTimeout(() => {
        showMedalObtained();
      }, 100);
    }
  }

  function showMedalObtained() {
    setSeeMedalNotification(true);
    setTimeout(() => {
      setSeeMedalNotification(false);
    }, 4000);
  }

  const classNotificationMedal = seeMedalNotification
    ? "Container__Game--MedalNotification Show"
    : "Container__Game--MedalNotification";

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
          showMedalObtained={showMedalObtained}
        />
        <div className="Container__Game--Content">
          <ContainerGameMedalNotification
            classNotificationMedal={classNotificationMedal}
          />
          <header className="Container__Game--Content--Header">
            <button
              className={`Container__Game--Content--Header--Back ${levelSelectedClass}`}
              onClick={() => setShowLevelContent(false)}
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
        <ContainerGameMedalNotification
          classNotificationMedal={classNotificationMedal}
        />
        <Confetti />
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
          onClick={() => setShowLevelContent(false)}
        >
          Seguir jugando
        </button>
      </div>
    );
  }
}
