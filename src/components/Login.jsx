import { useState } from "react";
import { LoginContent } from "./LoginContent";
import { LoginDetails } from "./LoginDetails";

import "../styles/Login.css";

export function Login({ updateStateIsLogin }) {
  const [seeHelpDetails, setHelpDetails] = useState(false);

  const iconDetails = seeHelpDetails
    ? "remove-circle-outline"
    : "help-circle-outline";

  return (
    <section className="Container__Login">
      <button
        className="Container__Login--Help"
        onClick={() => setHelpDetails(!seeHelpDetails)}
      >
        <ion-icon name={iconDetails}></ion-icon>
      </button>
      <LoginContent updateStateIsLogin={() => updateStateIsLogin(true)} />
      <LoginDetails seeHelpDetails={seeHelpDetails} />
    </section>
  );
}
