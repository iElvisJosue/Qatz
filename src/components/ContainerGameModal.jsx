import { checkMedalQuestionsCorrect } from "../Const";
import Confetti from "react-confetti";

export function ContainerGameModal({
  updateScoreLevel,
  updateLeadBoard,
  levelSelectedCurrentProgress,
  levelSelectedTotalQuestions,
  seeGameModal,
  setSeeGameModal,
  answer,
  setAnswer,
  curiousFactQuestion,
  updateProgressLevel,
  checkMedal,
  contentDataUser,
  updateContentDataUser,
  showMedalObtained,
}) {
  const classGameModal = seeGameModal
    ? "Container__Game--Modal Show"
    : "Container__Game--Modal";
  const imageGameModal = answer
    ? "./Modals/Correct.png"
    : "./Modals/Incorrect.png";
  const titleGameModal = answer ? "CORRECTO" : "INCORRECTO";
  const buttonText =
    levelSelectedCurrentProgress === levelSelectedTotalQuestions - 1
      ? "Finalizar"
      : "Siguiente";

  function nextQuestion() {
    setSeeGameModal(false);
    setTimeout(() => {
      // SI LA RESPUESTA ES CORRECTA AUMENTA EL SCORE
      // DEL USUARIO Y ACTUALIZA EL TABLERO
      if (answer) {
        updateScoreLevel();
        updateLeadBoard();
      }
      updateProgressLevel();
      // UNA VEZ TERMINADO EL NIVEL, SE CHECA QUE
      // EL USUARIO TUVO UNA PUNTUACIÓN PERFECTA
      if (levelSelectedCurrentProgress === levelSelectedTotalQuestions - 1) {
        checkMedal();
      }
      checkMedalQuestionsCorrect(
        contentDataUser,
        updateContentDataUser,
        showMedalObtained
      );
      setAnswer(false);
    }, 500);
  }

  return (
    <div className={classGameModal}>
      {answer && <Confetti numberOfPieces={50} />}
      <div className="Container__Game--Modal--Content">
        <b className="Container__Game--Modal--Content--Title">
          {titleGameModal}
        </b>
        <picture className="Container__Game--Modal--Content--Image">
          <img src={imageGameModal} alt="Answer modal" />
        </picture>
        <p className="Container__Game--Modal--Content--Details">
          {curiousFactQuestion}
        </p>
        <button
          className="Container__Game--Modal--Content--Buttons--Next"
          onClick={nextQuestion}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
