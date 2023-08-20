import { LEVEL_DETAILS } from "./Const";

import "../styles/ContentInformationProgressLevel.css";

export function ContentInformationProgressLevel({
  level,
  nameProgressLevel,
  contentDataUser,
  updateDataUser,
}) {
  const levelTotalQuestions = LEVEL_DETAILS[level].levelQuestions;
  const currentProgressLevel =
    contentDataUser.levels.progress[nameProgressLevel];

  const classNameLevel = `Container__Content--Information--Progress--Level ${LEVEL_DETAILS[level].levelClass}`;

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
          src={LEVEL_DETAILS[level].levelImage}
          alt={LEVEL_DETAILS[level].levelAlt}
        />
      </picture>
      <div className="Container__Content--Information--Progress--Level--Details">
        <p className="Container__Content--Information--Progress--Level--Details--Text">
          {LEVEL_DETAILS[level].levelName} <span>{calculatePercentage()}%</span>
        </p>
        <progress
          className="Container__Content--Information--Progress--Level--Details--Progress"
          max={LEVEL_DETAILS[level].levelQuestions}
          value={currentProgressLevel}
        ></progress>
      </div>
    </div>
  );
}
