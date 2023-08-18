import { ContentInformationProfile } from "./ContentInformationProfile";
import { ContentInformationMedals } from "./ContentInformationMedals";
import { ContentInformationProgress } from "./ContentInformationProgress";

import "../styles/Content.css";
import "../styles/Responsive/Content.css";

export function Content({
  contentDataUser,
  updateDataUser,
  updateStateIsLogin,
}) {
  return (
    <section className="Container__Content">
      <div className="Container__Content--Game">
        <h1>Contenido principal</h1>
      </div>
      <aside className="Container__Content--Information">
        <ContentInformationProfile
          contentDataUser={contentDataUser}
          updateStateIsLogin={updateStateIsLogin}
        />
        <ContentInformationMedals contentDataUser={contentDataUser} />
        <ContentInformationProgress
          contentDataUser={contentDataUser}
          updateDataUser={updateDataUser}
        />
      </aside>
    </section>
  );
}
