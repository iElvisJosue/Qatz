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
    setIsLogin(response);
    response ? checkUserExist() : false;
  };

  const checkScoresExist = () => {
    const checkUserScores = JSON.parse(localStorage.getItem(USER_SCORES));
    checkUserScores
      ? updateContentUserScores(checkUserScores)
      : setUserScores();
  };

  // const updateUserScoreLevel = () => {
  //   const oldScoreLevel = contentDataUser.levels.levelBeginner.score;
  //   const newScoreLevel = oldScoreLevel + 10;
  //   contentDataUser.levels.levelBeginner.score = newScoreLevel;
  //   localStorage.setItem(DATA_USER, JSON.stringify(contentDataUser));
  //   const updatedUserData = JSON.parse(localStorage.getItem(DATA_USER));
  //   updateContentDataUser(updatedUserData);
  //   updateLeadBoard();
  // };

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
