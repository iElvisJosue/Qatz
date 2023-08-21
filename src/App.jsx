// HOOKS
import { useState, useEffect } from "react";

// COMPONENTS
import { Login } from "./components/Login";
import { Content } from "./components/Content";
import {
  setUserScores,
  setSortUserScores,
  LEVEL_DETAILS,
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
  const [contentUserScores, updateContentUserScores] = useState([]);

  useEffect(() => {
    checkScoresExist();
    checkUserExist();
  }, []);

  const updateDataUser = (nameProgressLevel, currentProgressLevel, level) => {
    const totalQuestions = LEVEL_DETAILS[level].levelQuestions;
    if (currentProgressLevel < totalQuestions) {
      // contentDataUser.levels.progress[nameProgressLevel] ES EL NIVEL DEL SCORE
      // DEL NIVEL SELECCIONADO
      contentDataUser.levels.progress[nameProgressLevel] =
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
    const userScores = JSON.parse(localStorage.getItem(USER_SCORES));
    if (userScores) {
      const sortUserScores = setSortUserScores(userScores);
      updateContentUserScores(sortUserScores);
    } else {
      setUserScores();
    }
  };

  const updateStateScores = () => {
    // console.log(contentUserScores);
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
            updateStateScores={updateStateScores}
            updateStateIsLogin={updateStateIsLogin}
          />
        </>
      ) : (
        <Login updateStateIsLogin={updateStateIsLogin} />
      )}
    </main>
  );
}
