import { TUTORIAL_DETAILS } from "../Const";
import { useState } from "react";

import "../styles/ContainerTutorial.css";

export function ContainerTutorial() {
  const [step, setStep] = useState(0);
  const [hideModal, setHideModal] = useState(true);

  const { image, title, details } = TUTORIAL_DETAILS[step];
  const totalSteps = TUTORIAL_DETAILS.length - 1;

  function nextStep() {
    if (step !== totalSteps) {
      setStep(step + 1);
      return;
    }
    setHideModal(false);
  }

  const classTutorial = hideModal
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
              onClick={() => setHideModal(false)}
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
