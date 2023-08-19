// HOOKS
import { useState, useEffect } from "react";

// COMPONENTS
import { Login } from "./components/Login";
import { Content } from "./components/Content";
import { setUserScores, levelDetails } from "./components/Const";
import { Menu } from "./components/Menu";

// STYLES
import "./styles/General.css";
import "./styles/Container.css";
import "./styles/Responsive/Container.css";

export function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [contentDataUser, updateContentDataUser] = useState([]);

  useEffect(() => {
    checkScoresExist();
    checkUserExist();
  }, []);

  const updateDataUser = (nameProgressLevel, currentProgressLevel, level) => {
    const totalQuestions = levelDetails[level].levelQuestions;
    if (currentProgressLevel < totalQuestions) {
      // dataUser.userProgressLevel[nameProgressLevel] ES EL NIVEL EL SCORE
      // DEL NIVEL SELECCIONADO
      contentDataUser.levels.progress[nameProgressLevel] =
        currentProgressLevel + 1;
      localStorage.setItem("dataUser", JSON.stringify(contentDataUser));
      const updatedUserData = JSON.parse(localStorage.getItem("dataUser"));
      updateContentDataUser(updatedUserData);
    }
  };

  const updateStateIsLogin = (response) => {
    setIsLogin(response);
    response ? checkUserExist() : false;
  };

  const checkScoresExist = () => {
    localStorage.getItem("userScores") ? true : setUserScores();
  };

  const checkUserExist = () => {
    if (localStorage.getItem("dataUser")) {
      setIsLogin(true);
      const dataUser = JSON.parse(localStorage.getItem("dataUser"));
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
            updateStateIsLogin={updateStateIsLogin}
          />
        </>
      ) : (
        <Login updateStateIsLogin={updateStateIsLogin} />
      )}
    </main>
  );
}
