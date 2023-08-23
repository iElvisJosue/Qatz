import { useState } from "react";
import { LoginContent } from "./LoginContent";
import { LoginDetails } from "./LoginDetails";

import "../styles/Login.css";

export function Login({ updateStateIsLogin }) {
  const [seeHelpModal, setHelpModal] = useState(false);

  const iconModal = seeHelpModal
    ? "remove-circle-outline"
    : "help-circle-outline";

  return (
    <section className="Container__Login">
      <button
        className="Container__Login--Help"
        onClick={() => setHelpModal(!seeHelpModal)}
      >
        <ion-icon name={iconModal}></ion-icon>
      </button>
      <LoginContent updateStateIsLogin={() => updateStateIsLogin(true)} />
      <LoginDetails seeHelpModal={seeHelpModal} />
    </section>
  );
}
