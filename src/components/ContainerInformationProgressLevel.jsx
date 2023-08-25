export function ContainerInformationProgressLevel({
  nameLevel,
  imageLevel,
  altImageLevel,
  classLevel,
  totalLevelQuestions,
  contentDataUser,
}) {
  const classNameLevel = `Container__Information--Progress--Level ${classLevel}`;

  const fullyNameLevel = `level${classLevel}`;
  const currentProgressLevel = contentDataUser.levels[fullyNameLevel].progress;

  function calculatePercentage() {
    const totalProgress = (currentProgressLevel / totalLevelQuestions) * 100;
    return Math.round(totalProgress);
  }

  return (
    <div className={classNameLevel}>
      <picture className="Container__Information--Progress--Level--Box">
        <img src={imageLevel} alt={altImageLevel} />
      </picture>
      <div className="Container__Information--Progress--Level--Details">
        <p className="Container__Information--Progress--Level--Details--Text">
          {nameLevel} <span>{calculatePercentage()}%</span>
        </p>
        <progress
          className="Container__Information--Progress--Level--Details--Progress"
          max={totalLevelQuestions}
          value={currentProgressLevel}
        ></progress>
      </div>
    </div>
  );
}
