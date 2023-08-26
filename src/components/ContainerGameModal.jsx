import { checkMedalQuestionsCorrect } from "../Const";

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
      if (answer) {
        updateScoreLevel();
        updateLeadBoard();
      }
      updateProgressLevel();
      if (levelSelectedCurrentProgress === levelSelectedTotalQuestions - 1) {
        checkMedal();
      }
      checkMedalQuestionsCorrect(contentDataUser, updateContentDataUser);
      setAnswer(false);
    }, 500);
  }

  return (
    <div className={classGameModal}>
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
