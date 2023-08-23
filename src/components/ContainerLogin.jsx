import { useState } from "react";
import { ContainerLoginContent } from "./ContainerLoginContent";
import { ContainerLoginDetails } from "./ContainerLoginDetails";

import "../styles/ContainerLogin.css";

export function ContainerLogin({ updateStateIsLogin }) {
  const [seeHelpDetails, setHelpDetails] = useState(false);

  const iconDetails = seeHelpDetails
    ? "remove-circle-outline"
    : "help-circle-outline";

  return (
    <section className="Container__Login">
      <div className="Container__Login--Box">
        <button
          className="Container__Login--Help"
          onClick={() => setHelpDetails(!seeHelpDetails)}
        >
          <ion-icon name={iconDetails}></ion-icon>
        </button>
        <ContainerLoginContent
          updateStateIsLogin={() => updateStateIsLogin(true)}
        />
        <ContainerLoginDetails seeHelpDetails={seeHelpDetails} />
      </div>
    </section>
  );
}
