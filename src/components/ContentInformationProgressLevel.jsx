import "../styles/ContentInformationProgressLevel.css";

export function ContentInformationProgressLevel({
  nameLevel,
  imageLevel,
  altImageLevel,
  classLevel,
  totalLevelQuestions,
  contentDataUser,
  updateDataUser,
}) {
  const fullyNameLevel = `level${classLevel}`;
  const currentProgressLevel = contentDataUser.levels[fullyNameLevel].progress;

  const classNameLevel = `Container__Content--Information--Progress--Level ${classLevel}`;

  function calculatePercentage() {
    const totalProgress = (currentProgressLevel / totalLevelQuestions) * 100;
    return Math.round(totalProgress);
  }

  return (
    <div
      className={classNameLevel}
      onClick={() =>
        updateDataUser(
          fullyNameLevel,
          currentProgressLevel,
          totalLevelQuestions
        )
      }
    >
      <picture className="Container__Content--Information--Progress--Level--Box">
        <img src={imageLevel} alt={altImageLevel} />
      </picture>
      <div className="Container__Content--Information--Progress--Level--Details">
        <p className="Container__Content--Information--Progress--Level--Details--Text">
          {nameLevel} <span>{calculatePercentage()}%</span>
        </p>
        <progress
          className="Container__Content--Information--Progress--Level--Details--Progress"
          max={totalLevelQuestions}
          value={currentProgressLevel}
        ></progress>
      </div>
    </div>
  );
}
