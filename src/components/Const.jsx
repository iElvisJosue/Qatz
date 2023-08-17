export const imagesCats = [
    '../../public/Profile/Cat__1.png',
    '../../public/Profile/Cat__2.png',
    '../../public/Profile/Cat__3.png',
    '../../public/Profile/Cat__4.png',
    '../../public/Profile/Cat__5.png',
    '../../public/Profile/Cat__6.png',
    '../../public/Profile/Cat__7.png',
    '../../public/Profile/Cat__8.png',
    '../../public/Profile/Cat__9.png'
]

export const setUserScores = () => {
    localStorage.setItem('userScoreTotal', 0)
    localStorage.setItem('userScoreBeginner', 0)
    localStorage.setItem('userScoreFeline', 0)
    localStorage.setItem('userScoreKitty', 0)
    localStorage.setItem('userScoreRaces', 0)
    localStorage.setItem('userScoreCuriosities', 0)
    localStorage.setItem('userScoreHealth', 0)
    localStorage.setItem('userScoreMyths', 0)
    localStorage.setItem('userScoreMaster', 0)
}
export const setUserLevelProgress = () => {
    localStorage.setItem('userLevelProgressBeginner', 1)
    localStorage.setItem('userLevelProgressFeline', 3)
    localStorage.setItem('userLevelProgressKitty', 5)
    localStorage.setItem('userLevelProgressRaces', 2)
    localStorage.setItem('userLevelProgressCuriosities', 9)
    localStorage.setItem('userLevelProgressHealth', 4)
    localStorage.setItem('userLevelProgressMyths', 7)
    localStorage.setItem('userLevelProgressMaster', 10)
}
export const setUserMedals = () => {
    // SE ACTIVA AL CONTESTAR EL PRIMER CUESTIONARIO
    localStorage.setItem('userMedalCurious', false)
    localStorage.setItem('userMedalFeline', false)
    localStorage.setItem('userMedal', false)
    localStorage.setItem('userMedal', false)
    localStorage.setItem('userMedal', false)
    localStorage.setItem('userMedal', false)
    localStorage.setItem('userMedal', false)
    // SE ACTIVA AL CONTESTAR TODAS LAS PREGUNTAS CORRECTAMENTE
    localStorage.setItem('userMedalKingQueen', false)
}
export const levelDetails = [
    {
        levelImage: '../../public/Levels/Novato.png',
        levelAlt: 'Imagen del nivel principiante',
        levelName: 'Novato',
        levelClass: 'Beginner',
        levelQuestions: 5
    },
    {
        levelImage: '../../public/Levels/Curioso.png',
        levelAlt: 'Imagen del nivel novato',
        levelName: 'Felino Curioso',
        levelClass: 'Feline',
        levelQuestions: 8
    },
    {
        levelImage: '../../public/Levels/Experto.png',
        levelAlt: 'Imagen del nivel intermedio',
        levelName: 'Gatito Experto',
        levelClass: 'Kitty',
        levelQuestions: 10
    },
    {
        levelImage: '../../public/Levels/Razas.png',
        levelAlt: 'Imagen del nivel avanzado',
        levelName: 'Amante de Razas',
        levelClass: 'Races',
        levelQuestions: 15
    },
    {
        levelImage: '../../public/Levels/Curiosidades.png',
        levelAlt: 'Imagen del nivel novato',
        levelName: 'Curiosidades Felinas',
        levelClass: 'Curiosities',
        levelQuestions: 10
    },
    {
        levelImage: '../../public/Levels/Salud.png',
        levelAlt: 'Imagen del nivel intermedio',
        levelName: 'Salud Gatuna',
        levelClass: 'Health',
        levelQuestions: 10
    },
    {
        levelImage: '../../public/Levels/Mitos.png',
        levelAlt: 'Imagen del nivel avanzado',
        levelName: 'Mitos y Leyendas',
        levelClass: 'Myths',
        levelQuestions: 15
    },
    {
        levelImage: '../../public/Levels/Maestro.png',
        levelAlt: 'Imagen del nivel Maestro',
        levelName: 'Maestro Felino',
        levelClass: 'Master',
        levelQuestions: 20
    }
]

export const checkValueInput = (e) => {
    const regExpUserName = /^[a-zA-Z0-9]+$/
    if(regExpUserName.test(e)){
        return e
    }
    return false
}