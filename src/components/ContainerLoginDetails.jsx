export function ContainerLoginDetails({ seeHelpDetails }) {
  const classLoginDetails = seeHelpDetails
    ? "Container__Login__Details Show"
    : "Container__Login__Details";

  return (
    <>
      <article className={classLoginDetails}>
        <p className="Container__Login__Details--Title">¿QUE ES QATZ? 😮</p>
        <p className="Container__Login__Details--Details">
          <b>QATZ</b> es un emocionante juego de preguntas y respuestas diseñado
          para los amantes de los gatos. A medida que avanzan, los jugadores
          ponen a prueba su conocimiento sobre el mundo de los gatos, acumulan
          puntos y desbloquean niveles más desafiantes. ¡Demuestra cuánto sabes
          sobre los gatos y conviértete en el <b>QATZ</b> Master!
        </p>
        <p className="Container__Login__Details--Title">¿QATZ? 🤔</p>
        <p className="Container__Login__Details--Details">
          <b>QATZ</b> surge de la combinación de las palabras en inglés:{" "}
          <b>Quiz</b> y <b>Cats.</b>
        </p>
      </article>
    </>
  );
}
