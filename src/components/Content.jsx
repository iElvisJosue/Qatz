import { ContentInformationProfile } from "./ContentInformationProfile";
import { ContentInformationMedals } from "./ContentInformationMedals";
import { ContentInformationProgress } from "./ContentInformationProgress";
import { setSortUserScores, MAX_RATING } from "./Const";

import "../styles/Content.css";
import "../styles/Responsive/Content.css";

export function Content({
  contentDataUser,
  updateDataUser,
  contentUserScores,
  updateUserScoreLevel,
  updateStateIsLogin,
}) {
  const sortUserScores = setSortUserScores(contentUserScores);
  const contentSR = sortUserScores.map((e, index) => {
    if (index < MAX_RATING) {
      return (
        <p key={index}>
          Tu nombre de usuario es: {e[1].userName} y tu puntuación es:{" "}
          {e[1].userScore}
        </p>
      );
    }
  });

  return (
    <section className="Container__Content">
      <div className="Container__Content--Game">
        {contentSR}
        <button onClick={() => updateUserScoreLevel()}>PRUEBA</button>
      </div>
      <div className="Container__Content--Information">
        <ContentInformationProfile
          showMenu={false}
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
