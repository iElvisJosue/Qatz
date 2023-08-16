export function LoginModal({ seeHelpModal }){

    const classLoginModal = seeHelpModal ? 'Container__Login__Modal Show' : 'Container__Login__Modal'

    return(
        <>
            <article className={classLoginModal}>
                <p className="Container__Login__Modal--Title">
                    ¿QUE ES QATZ? 😮
                </p>
                <p className="Container__Login__Modal--Details">
                <b>QATZ</b> es un emocionante juego de preguntas y respuestas diseñado para los amantes de los gatos. A medida que avanzan, los jugadores ponen a prueba su conocimiento sobre el mundo de los gatos, acumulan puntos y desbloquean niveles más desafiantes. ¡Demuestra cuánto sabes sobre los gatos y conviértete en el <b>QATZ</b> Master!
                </p>
                <p className="Container__Login__Modal--Title">
                    ¿QATZ? 🤔
                </p>
                <p className="Container__Login__Modal--Details">
                    <b>QATZ</b> surge de la combinación de las palabras en inglés: <b>Quiz</b> y <b>Cats.</b>
                </p>
            </article>
        </>
    )

}