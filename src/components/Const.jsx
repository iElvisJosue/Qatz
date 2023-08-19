export const imagesCats = [
  "../../public/Profile/Cat__1.png",
  "../../public/Profile/Cat__2.png",
  "../../public/Profile/Cat__3.png",
  "../../public/Profile/Cat__4.png",
  "../../public/Profile/Cat__5.png",
  "../../public/Profile/Cat__6.png",
  "../../public/Profile/Cat__7.png",
  "../../public/Profile/Cat__8.png",
  "../../public/Profile/Cat__9.png",
  "../../public/Profile/Cat__10.png",
  "../../public/Profile/Cat__11.png",
  "../../public/Profile/Cat__12.png",
  "../../public/Profile/Cat__13.png",
  "../../public/Profile/Cat__14.png",
  "../../public/Profile/Cat__15.png",
  "../../public/Profile/Cat__16.png",
  "../../public/Profile/Cat__17.png",
  "../../public/Profile/Cat__18.png",
];

export const imagesMedals = [
  "../../public/Medals/Novato.png",
  "../../public/Medals/FelinoCurioso.png",
  "../../public/Medals/GatitoExperto.png",
  "../../public/Medals/AmanteDeRazas.png",
  "../../public/Medals/CuriosidadesFelinas.png",
  "../../public/Medals/SaludGatuna.png",
  "../../public/Medals/MitosLeyendas.png",
  "../../public/Medals/Maestro.png",
  "../../public/Medals/Entusiasta.png",
  "../../public/Medals/Impresionante.png",
  "../../public/Medals/Experto.png",
  "../../public/Medals/ReyReina.png",
];
export const levelDetails = [
  {
    levelImage: "../../public/Levels/Novato.png",
    levelAlt: "Imagen del nivel Novato",
    levelName: "Novato",
    levelClass: "Beginner",
    levelQuestions: 5,
  },
  {
    levelImage: "../../public/Levels/Curioso.png",
    levelAlt: "Imagen del nivel Felino Curioso",
    levelName: "Felino Curioso",
    levelClass: "Feline",
    levelQuestions: 6,
  },
  {
    levelImage: "../../public/Levels/Experto.png",
    levelAlt: "Imagen del nivel Gatito Experto",
    levelName: "Gatito Experto",
    levelClass: "Kitty",
    levelQuestions: 7,
  },
  {
    levelImage: "../../public/Levels/Razas.png",
    levelAlt: "Imagen del nivel Amante de Razas",
    levelName: "Amante de Razas",
    levelClass: "Races",
    levelQuestions: 7,
  },
  {
    levelImage: "../../public/Levels/Curiosidades.png",
    levelAlt: "Imagen del nivel Curiosidades Felinas",
    levelName: "Curiosidades Felinas",
    levelClass: "Curiosities",
    levelQuestions: 6,
  },
  {
    levelImage: "../../public/Levels/Salud.png",
    levelAlt: "Imagen del nivel Salud Gatuna",
    levelName: "Salud Gatuna",
    levelClass: "Health",
    levelQuestions: 8,
  },
  {
    levelImage: "../../public/Levels/Mitos.png",
    levelAlt: "Imagen del nivel Mitos y Leyendas",
    levelName: "Mitos y Leyendas",
    levelClass: "Myths",
    levelQuestions: 6,
  },
  {
    levelImage: "../../public/Levels/Maestro.png",
    levelAlt: "Imagen del nivel Maestro Felino",
    levelName: "Maestro Felino",
    levelClass: "Master",
    levelQuestions: 10,
  },
];

export function setDataUser(userName, userImage) {
  const dataUser = {
    userName,
    userImage,
    levels: {
      score: {
        scoreBeginner: 0,
        scoreFeline: 0,
        scoreKitty: 0,
        scoreRaces: 0,
        scoreCuriosities: 0,
        scoreHealth: 0,
        scoreMyths: 0,
        scoreMaster: 0,
        scoreTotal: 0,
      },
      progress: {
        progressBeginner: 0,
        progressFeline: 0,
        progressKitty: 0,
        progressRaces: 0,
        progressCuriosities: 0,
        progressHealth: 0,
        progressMyths: 0,
        progressMaster: 0,
      },
    },
    medals: {
      userMedals: {
        medalBeginner: false,
        medalFeline: false,
        medalKitty: false,
        medalRaces: false,
        medalCuriosities: false,
        medalHealth: false,
        medalMyths: false,
        medalMaster: false,
        medalEnthusiastic: false,
        medalAmazing: false,
        medalExpert: false,
        medalKingQueen: false,
      },
      name: {
        medalBeginner: "¡Esto apenas comienza!",
        medalFeline: "¡Amante de lo curioso!",
        medalKitty: "¿No hay algo más difícil?",
        medalRaces: "¡Las razas no son problema!",
        medalCuriosities: "¡Nada que no sepa!",
        medalHealth: "¡Dueño responsable!",
        medalMyths: "¡Lo sé todo!",
        medalMaster: "¡Uno con los gatos!",
        medalEnthusiastic: "¡Nada puede detenerte!",
        medalAmazing: "¡Más más más!",
        medalExpert: "¡Experto Felino!",
        medalKingQueen: "¡QATZ Master!",
      },
      description: {
        descriptionBeginner:
          "Responde correctamente todas las preguntas del nivel Novato.",
        descriptionFeline:
          "Responde correctamente todas las preguntas del nivel Felino Curioso.",
        descriptionKitty:
          "Responde correctamente todas las preguntas del nivel Gatito Experto.",
        descriptionRaces:
          "Responde correctamente todas las preguntas del nivel Amante de Razas.",
        descriptionCuriosities:
          "Responde correctamente todas las preguntas del nivel Curiosidades Felinas.",
        descriptionHealth:
          "Responde correctamente todas las preguntas del nivel Salud Gatuna.",
        descriptionMyths:
          "Responde correctamente todas las preguntas del nivel Mitos y Leyendas.",
        descriptionMaster:
          "Responde correctamente todas las preguntas del nivel Maestro.",
        descriptionEnthusiastic: "Completa la mitad de los niveles.",
        descriptionAmazing: "Obtén 20 preguntas correctas.",
        descriptionExpert: "Obtén 40 preguntas correctas.",
        descriptionKingQueen:
          "Consigue una puntuación perfecta en todos los niveles.",
      },
    },
  };
  localStorage.setItem("dataUser", JSON.stringify(dataUser));
}

export function checkValueInput(e) {
  const regExpUserName = /^[a-zA-Z0-9]+$/;
  return regExpUserName.test(e) ? e : false;
}
