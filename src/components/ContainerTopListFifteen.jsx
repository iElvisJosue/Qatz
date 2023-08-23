import { IMAGES_CATS } from "../Const";

export function ContainerTopListFifteen({ topFifteen }) {
  const setTopFifteen = topFifteen.map((user, index) => {
    const userImage = user[1].userImage;
    const userScore = user[1].userScore;
    const userName = user[1].userName;
    const userPlace = index + 4;
    return (
      <div key={index} className="Container__TopList--TopFifteen--User">
        <picture className="Container__TopList--TopFifteen--User--Box">
          <img
            src={IMAGES_CATS[userImage]}
            alt="User Image"
            className="Container__TopList--TopFifteen--User--Box--Image"
          />
        </picture>
        <span className="Container__TopList--TopFifteen--User-Box--Details">
          <b className="Container__TopList--TopFifteen--User--Box--Name">
            {userName}
          </b>
          <p className="Container__TopList--TopFifteen--User--Box--Score">
            {userScore} puntos
          </p>
        </span>
        <b className="Container__TopList--TopFifteen--User--Box--Place">
          {userPlace}
        </b>
      </div>
    );
  });
  return (
    <article className="Container__TopList--TopFifteen">
      {setTopFifteen}
    </article>
  );
}
