// HOOKS
import { useState, useEffect } from "react";

// COMPONENTS
import { Login } from "./components/Login";
import { Content } from "./components/Content";
import {
  setUserScores,
  getUserTotalScore,
  USER_SCORES,
  DATA_USER,
} from "./components/Const";
import { Menu } from "./components/Menu";

// STYLES
import "./styles/General.css";
import "./styles/Container.css";
import "./styles/Responsive/Container.css";

export function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [contentDataUser, updateContentDataUser] = useState([]);
  const [contentUserScores, updateContentUserScores] = useState();

  useEffect(() => {
    checkScoresExist();
    checkUserExist();
  }, []);

  const updateDataUser = (
    fullyNameLevel,
    currentProgressLevel,
    totalLevelQuestions
  ) => {
    if (currentProgressLevel < totalLevelQuestions) {
      // contentDataUser.levels.progress[fullyNameLevel] ES PROGRESO
      // DEL NIVEL SELECCIONADO
      contentDataUser.levels[fullyNameLevel].progress =
        currentProgressLevel + 1;
      localStorage.setItem(DATA_USER, JSON.stringify(contentDataUser));
      const updatedUserData = JSON.parse(localStorage.getItem(DATA_USER));
      updateContentDataUser(updatedUserData);
    }
  };

  const updateStateIsLogin = (response) => {
    setIsLogin(response);
    response ? checkUserExist() : false;
  };

  const checkScoresExist = () => {
    const checkUserScores = JSON.parse(localStorage.getItem(USER_SCORES));
    checkUserScores
      ? updateContentUserScores(checkUserScores)
      : setUserScores();
  };

  const updateUserScoreLevel = () => {
    const oldScoreLevel = contentDataUser.levels.levelBeginner.score;
    const newScoreLevel = oldScoreLevel + 10;
    contentDataUser.levels.levelBeginner.score = newScoreLevel;
    localStorage.setItem(DATA_USER, JSON.stringify(contentDataUser));
    const updatedUserData = JSON.parse(localStorage.getItem(DATA_USER));
    updateContentDataUser(updatedUserData);
    updateLeadBoard();
  };

  const updateLeadBoard = () => {
    const newUserTotalScore = getUserTotalScore(contentDataUser);
    const getUserScores = JSON.parse(localStorage.getItem(USER_SCORES));
    const getTotalUserScores = Object.keys(getUserScores).length;
    const getNameUser = `user${getTotalUserScores}`;
    getUserScores[getNameUser].userScore = newUserTotalScore;
    localStorage.setItem(USER_SCORES, JSON.stringify(getUserScores));
    const updatedUserScores = JSON.parse(localStorage.getItem(USER_SCORES));
    updateContentUserScores(updatedUserScores);
  };

  const checkUserExist = () => {
    if (localStorage.getItem(DATA_USER)) {
      setIsLogin(true);
      const dataUser = JSON.parse(localStorage.getItem(DATA_USER));
      updateContentDataUser(dataUser);
    }
  };

  return (
    <main className="Container">
      {isLogin ? (
        <>
          <Menu
            contentDataUser={contentDataUser}
            updateDataUser={updateDataUser}
            updateStateIsLogin={updateStateIsLogin}
          />
          <Content
            contentDataUser={contentDataUser}
            updateDataUser={updateDataUser}
            contentUserScores={contentUserScores}
            updateUserScoreLevel={updateUserScoreLevel}
            updateStateIsLogin={updateStateIsLogin}
          />
        </>
      ) : (
        <Login updateStateIsLogin={updateStateIsLogin} />
      )}
    </main>
  );
}
