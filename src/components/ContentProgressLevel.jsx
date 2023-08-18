import { levelDetails } from "./Const";

import "../styles/ContentProgressLevels.css";

export function ContentProgressLevel({
  level,
  nameProgressLevel,
  contentDataUser,
  updateDataUser,
}) {
  const levelTotalQuestions = levelDetails[level].levelQuestions;
  const currentProgressLevel =
    contentDataUser.userProgressLevel[nameProgressLevel];

  const calculatePercentage = () => {
    const maxQuestions = levelTotalQuestions;
    const currentProgress = currentProgressLevel;
    const totalProgress = (currentProgress / maxQuestions) * 100;
    return Math.round(totalProgress);
  };
  const classNameLevel = `Container__Content--Progress--Details--Level ${levelDetails[level].levelClass}`;

  return (
    <div
      className={classNameLevel}
      onClick={() =>
        updateDataUser(nameProgressLevel, currentProgressLevel, level)
      }
    >
      <picture className="Container__Content--Progress--Details--Level--Box">
        <img
          src={levelDetails[level].levelImage}
          alt={levelDetails[level].levelAlt}
        />
      </picture>
      <div className="Container__Content--Progress--Details--Level--Details">
        <p className="Container__Content--Progress--Details--Level--Details--Text">
          {levelDetails[level].levelName} <span>{calculatePercentage()}%</span>
        </p>
        <progress
          className="Container__Content--Progress--Details--Level--Details--Progress"
          max={levelDetails[level].levelQuestions}
          value={currentProgressLevel}
        ></progress>
      </div>
    </div>
  );
}
