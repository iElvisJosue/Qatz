// HOOKS
import { useState, useEffect } from "react";

// COMPONENTS
import { ContainerLogin } from "./components/ContainerLogin";
import { setUserScores, USER_SCORES, DATA_USER } from "./Const";
import { ContainerMenu } from "./components/ContainerMenu";
import { ContainerTopList } from "./components/ContainerTopList";
import { ContainerInformation } from "./components/ContainerInformation";
import { ContainerGame } from "./components/ContainerGame";

// STYLES
import "./styles/General.css";
import "./styles/Container.css";

export function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [contentDataUser, updateContentDataUser] = useState([]);
  const [contentUserScores, updateContentUserScores] = useState();

  useEffect(() => {
    checkScoresExist();
    checkUserExist();
  }, []);

  const updateStateIsLogin = (response) => {
    response ? checkUserExist() : setIsLogin(response);
  };

  const checkScoresExist = () => {
    const checkUserScores = JSON.parse(localStorage.getItem(USER_SCORES));
    if (checkUserScores) {
      updateContentUserScores(checkUserScores);
    } else {
      setUserScores(), checkScoresExist();
    }
  };

  const checkUserExist = () => {
    if (localStorage.getItem(DATA_USER)) {
      const dataUser = JSON.parse(localStorage.getItem(DATA_USER));
      updateContentDataUser(dataUser);
      setIsLogin(true);
    }
  };

  return (
    <main className="Container">
      {isLogin ? (
        <>
          <ContainerMenu
            contentDataUser={contentDataUser}
            updateStateIsLogin={updateStateIsLogin}
          />
          <ContainerTopList contentUserScores={contentUserScores} />
          <ContainerGame
            contentDataUser={contentDataUser}
            updateContentDataUser={updateContentDataUser}
            updateContentUserScores={updateContentUserScores}
          />
          <ContainerInformation
            updateStateIsLogin={updateStateIsLogin}
            contentDataUser={contentDataUser}
            // updateUserScoreLevel={updateUserScoreLevel}
          />
        </>
      ) : (
        <ContainerLogin updateStateIsLogin={updateStateIsLogin} />
      )}
    </main>
  );
}
