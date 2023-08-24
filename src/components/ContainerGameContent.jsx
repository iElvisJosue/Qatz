export function ContainerGameContent({
  gameTotalLevels,
  showLevels,
  setShowLeves,
}) {
  const levelSelected = showLevels - 1;

  return (
    <>
      <h1>Presionaste el nivel {levelSelected}</h1>
      <button onClick={() => setShowLeves(0)}></button>;
    </>
  );
}
