// HOOKS
import { useState, useEffect } from "react";

// COMPONENTS
import { Login } from "./components/Login";
import { Content } from "./components/Content";
import { levelDetails } from "./components/Const";

// STYLES
import "./styles/General.css";
import "./styles/Container.css";
import "./styles/Responsive/Container.css";

export function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [contentDataUser, updateContentDataUser] = useState([]);

  useEffect(() => {
    checkUserExist();
  }, []);

  const updateDataUser = (nameProgressLevel, currentProgressLevel, level) => {
    const totalQuestions = levelDetails[level].levelQuestions;
    if (currentProgressLevel < totalQuestions) {
      // dataUser.userProgressLevel[nameProgressLevel] ES EL NIVEL EL SCORE
      // DEL NIVEL SELECCIONADO
      contentDataUser.userProgressLevel[nameProgressLevel] =
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
        <Content
          contentDataUser={contentDataUser}
          updateDataUser={updateDataUser}
          updateStateIsLogin={updateStateIsLogin}
        />
      ) : (
        <Login updateStateIsLogin={updateStateIsLogin} />
      )}
    </main>
  );
}
