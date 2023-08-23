import { ContainerInformationProfile } from "./ContainerInformationProfile";
import { ContainerInformationMedals } from "./ContainerInformationMedals";
import { ContainerInformationProgress } from "./ContainerInformationProgress";

import "../styles/ContainerInformation.css";

export function ContainerInformation({
  updateStateIsLogin,
  contentDataUser,
  updateDataUser,
}) {
  return (
    <section className="Container__Information">
      <ContainerInformationProfile
        showMenu={false}
        contentDataUser={contentDataUser}
        updateStateIsLogin={updateStateIsLogin}
      />
      <ContainerInformationMedals contentDataUser={contentDataUser} />
      <ContainerInformationProgress
        contentDataUser={contentDataUser}
        updateDataUser={updateDataUser}
      />
    </section>
  );
}
