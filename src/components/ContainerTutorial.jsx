import { TUTORIAL_DETAILS, DATA_USER } from "../Const";
import { useState } from "react";

import "../styles/ContainerTutorial.css";

export function ContainerTutorial({ contentDataUser, updateContentDataUser }) {
  const { userTutorial } = contentDataUser;

  const [step, setStep] = useState(0);

  const { image, title, details } = TUTORIAL_DETAILS[step];
  const totalSteps = TUTORIAL_DETAILS.length - 1;

  function nextStep() {
    if (step !== totalSteps) {
      setStep(step + 1);
      return;
    }
    hideModalTutorial();
  }

  function hideModalTutorial() {
    contentDataUser.userTutorial = false;
    localStorage.setItem(DATA_USER, JSON.stringify(contentDataUser));
    const updateUserTutorial = JSON.parse(localStorage.getItem(DATA_USER));
    updateContentDataUser(updateUserTutorial);
  }

  const classTutorial = userTutorial
    ? "Container__Tutorial"
    : "Container__Tutorial Hide";

  const textButton = step === 0 ? "Empezar" : "Siguiente";

  return (
    <section className={classTutorial}>
      <div className="Container__Tutorial--Modal">
        <b className="Container__Tutorial--Modal--Title">{title}</b>
        <img
          src={image}
          alt="Imagen de bienvenida"
          className="Container__Tutorial--Modal--Image"
        />
        <p className="Container__Tutorial--Modal--Details">{details}</p>
        <span className="Container__Tutorial--Modal--Buttons">
          {step === 0 ? (
            <button
              className="Container__Tutorial--Modal--Buttons--Skip"
              onClick={hideModalTutorial}
            >
              Omitir
            </button>
          ) : (
            false
          )}
          <button
            className="Container__Tutorial--Modal--Buttons--Start"
            onClick={nextStep}
          >
            {textButton}
          </button>
        </span>
      </div>
    </section>
  );
}
