import { useState } from "react";
import { ContainerLoginContent } from "./ContainerLoginContent";
import { ContainerLoginDetails } from "./ContainerLoginDetails";

import "../styles/ContainerLogin.css";

export function ContainerLogin({ updateStateIsLogin }) {
  const [seeHelpDetails, setHelpDetails] = useState(false);
  const [loader, setLoader] = useState(false);

  const iconDetails = seeHelpDetails
    ? "remove-circle-outline"
    : "help-circle-outline";

  const loginContent = loader ? (
    <div className="Container__Login__Content--Loader">
      <p className="Container__Login__Content--Loader--Text">
        ¡Cargando aventura felina!
      </p>
      <div className="Loader"></div>
    </div>
  ) : (
    <div className="Container__Login--Box">
      <button
        className="Container__Login--Help"
        onClick={() => setHelpDetails(!seeHelpDetails)}
      >
        <ion-icon name={iconDetails}></ion-icon>
      </button>
      <ContainerLoginContent
        updateStateIsLogin={updateStateIsLogin}
        setLoader={setLoader}
      />
      <ContainerLoginDetails seeHelpDetails={seeHelpDetails} />
    </div>
  );

  return <section className="Container__Login">{loginContent}</section>;
}
