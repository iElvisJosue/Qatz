import { IMAGES_CATS } from "../Const";

export function ContainerTopListThree({ topThree, setSeeToplist }) {
  const setTopThree = topThree.map((user, index) => {
    const userImage = user[1].userImage;
    const userScore = user[1].userScore;
    const userName = user[1].userName;
    const userPlace = index + 1;
    return (
      <div key={index} className="Container__TopList--TopThree--User">
        <picture className="Container__TopList--TopThree--User--Box">
          <img
            src={IMAGES_CATS[userImage]}
            alt="User Image"
            className="Container__TopList--TopThree--User--Box--Image"
          />
          <b className="Container__TopList--TopThree--User--Box--Place">
            {userPlace}
          </b>
          {index === 0 ? (
            <img
              src="./Crown.png"
              alt="First Place"
              className="Container__TopList--TopThree--User--Box--Crown"
            />
          ) : (
            false
          )}
        </picture>
        <b className="Container__TopList--TopThree--User--Box--Name">
          {userName}
        </b>
        <b className="Container__TopList--TopThree--User--Box--Score">
          {userScore}
        </b>
      </div>
    );
  });
  return (
    <article className="Container__TopList--TopThree">
      {setTopThree}
      <button
        className="Container__TopList--TopThree--Close"
        onClick={() => setSeeToplist(false)}
      >
        <ion-icon name="arrow-back-outline"></ion-icon>
      </button>
    </article>
  );
}
