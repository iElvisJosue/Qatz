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

export const checkValueInput = (e) => {
    const regExpUserName = /^[a-zA-Z0-9]+$/
    if(regExpUserName.test(e)){
        return e
    }
    return false
}