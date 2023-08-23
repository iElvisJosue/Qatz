import { ContentInformationProfile } from "./ContentInformationProfile";
import { ContentInformationMedals } from "./ContentInformationMedals";
import { ContentInformationProgress } from "./ContentInformationProgress";
import { TopList } from "./TopList";

import "../styles/Content.css";

export function Content({
  contentDataUser,
  updateDataUser,
  contentUserScores,
  // updateUserScoreLevel,
  updateStateIsLogin,
  setSeeModalDelete,
}) {
  return (
    <section className="Container__Content">
      <TopList contentUserScores={contentUserScores} />
      <div className="Container__Content--Game">
        <h1>CONTENT</h1>
      </div>
      <div className="Container__Content--Information">
        <ContentInformationProfile
          showMenu={false}
          setSeeModalDelete={setSeeModalDelete}
          contentDataUser={contentDataUser}
          updateStateIsLogin={updateStateIsLogin}
        />
        <ContentInformationMedals contentDataUser={contentDataUser} />
        <ContentInformationProgress
          contentDataUser={contentDataUser}
          updateDataUser={updateDataUser}
        />
      </div>
    </section>
  );
}
