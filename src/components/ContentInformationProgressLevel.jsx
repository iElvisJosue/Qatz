import { levelDetails } from "./Const";

import "../styles/ContentInformationProgressLevel.css";

export function ContentInformationProgressLevel({
  level,
  nameProgressLevel,
  contentDataUser,
  updateDataUser,
}) {
  const levelTotalQuestions = levelDetails[level].levelQuestions;
  const currentProgressLevel =
    contentDataUser.userProgressLevel[nameProgressLevel];

  const classNameLevel = `Container__Content--Information--Progress--Level ${levelDetails[level].levelClass}`;

  function calculatePercentage() {
    const maxQuestions = levelTotalQuestions;
    const currentProgress = currentProgressLevel;
    const totalProgress = (currentProgress / maxQuestions) * 100;
    return Math.round(totalProgress);
  }

  return (
    <div
      className={classNameLevel}
      onClick={() =>
        updateDataUser(nameProgressLevel, currentProgressLevel, level)
      }
    >
      <picture className="Container__Content--Information--Progress--Level--Box">
        <img
          src={levelDetails[level].levelImage}
          alt={levelDetails[level].levelAlt}
        />
      </picture>
      <div className="Container__Content--Information--Progress--Level--Details">
        <p className="Container__Content--Information--Progress--Level--Details--Text">
          {levelDetails[level].levelName} <span>{calculatePercentage()}%</span>
        </p>
        <progress
          className="Container__Content--Information--Progress--Level--Details--Progress"
          max={levelDetails[level].levelQuestions}
          value={currentProgressLevel}
        ></progress>
      </div>
    </div>
  );
}
