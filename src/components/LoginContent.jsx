import { useState } from "react";
import { setDataUser, addNewUserScores } from "./Const";
import { IMAGES_CATS, checkValueInput } from "./Const";

import "../styles/LoginContent.css";

export function LoginContent({ updateStateIsLogin }) {
  const [imageProfile, setImageProfile] = useState(0);
  const [inputUsernameValidate, setInputUsernameValidate] = useState(true);

  const totalImagesCats = IMAGES_CATS.length - 1;

  const imageCatSelected = IMAGES_CATS[imageProfile];

  function previousImage() {
    imageProfile > 0
      ? setImageProfile(imageProfile - 1)
      : setImageProfile(totalImagesCats);
  }
  function nextImage() {
    imageProfile < totalImagesCats
      ? setImageProfile(imageProfile + 1)
      : setImageProfile(0);
  }
  function checkKeyPressed(e) {
    if (e.keyCode === 32) e.preventDefault();
    if (e.keyCode === 13) inputValidate();
  }
  function inputValidate() {
    const inputUsername = document.querySelector(".Container__InputsText");
    const inputUsernameValue = inputUsername.value;
    const responseInputValidate = checkValueInput(inputUsernameValue);

    responseInputValidate
      ? inputValidateCorrect(inputUsernameValue)
      : inputValidateWrong(inputUsername, inputUsernameValue);
  }
  function inputValidateCorrect(inputUsernameValue) {
    setDataUser(inputUsernameValue, imageProfile);
    addNewUserScores(inputUsernameValue, imageProfile);
    updateStateIsLogin();
  }
  function inputValidateWrong(inputUsername, inputUsernameValue) {
    inputUsername.value = "Solo letras y/o números 🚫";
    setInputUsernameValidate(false);

    setTimeout(() => {
      inputUsername.value = inputUsernameValue;
      setInputUsernameValidate(true);
    }, 2000);
  }

  const inputClassName = inputUsernameValidate
    ? "Container__InputsText"
    : "Container__InputsText Wrong";
  const inputDisabled = inputUsernameValidate ? false : true;

  return (
    <>
      <span className="Container__Login__Content--Header">
        Bienvenido a QATZ
      </span>
      <picture className="Container__Login__Content--Profile">
        <button
          className="Container__Login__Content--Profile--Back"
          onClick={previousImage}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <span className="Container__Login__Content--Profile--Image">
          <img src={imageCatSelected} alt="Image Profile" />
        </span>
        <button
          className="Container__Login__Content--Profile--Next"
          onClick={nextImage}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </picture>
      <span className="Container__Login__Content--User">
        <p>Nombre de usuario:</p>
      </span>
      <input
        type="text"
        className={inputClassName}
        placeholder="Escribe aquí.."
        onKeyDown={checkKeyPressed}
        maxLength={12}
        disabled={inputDisabled}
      />
      <span className="Container__Login__Content--Continue">
        <button
          className="Container__Buttons"
          onClick={inputValidate}
          disabled={inputDisabled}
        >
          Continuar
        </button>
      </span>
    </>
  );
}
