import { ContentProgressLevel } from "./ContentProgressLevel";

import "../styles/ContentProgress.css";
// import "../styles/Responsive/ContentInformationLevels.css"

export function ContentProgress({ contentDataUser, updateDataUser }) {
  const totalLevels = Object.keys(contentDataUser.userProgressLevel);

  return (
    <div className="Container__Content--Progress--Details">
      <p className="Container__Content--Progress--Details--Title">
        Progreso actual
      </p>
      {totalLevels.map((e, index) => {
        return (
          <ContentProgressLevel
            key={index}
            level={index}
            contentDataUser={contentDataUser}
            nameProgressLevel={e}
            updateDataUser={updateDataUser}
          />
        );
      })}
    </div>
  );
}
