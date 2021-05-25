import "./card.css";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="cards-esquerda">
        <img src={props.logo} alt="logo" />
        <div>
          <div className="cards-company">
            <h6>{props.company}</h6>
            <button
              className={props.new ? "btn-new" : "btn-new-feature-desativado"}
            >
              New!
            </button>
            <button
              className={
                props.featured ? "btn-featured" : "btn-new-feature-desativado"
              }
            >
              Featured
            </button>
          </div>
          <div className="cards-main">
            <h1>{props.position}</h1>
            <div className="cards-main-infos">
              <p>{props.postedAt}</p>
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="#B7C4C4" />
              </svg>
              <p>{props.contract}</p>
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="#B7C4C4" />
              </svg>
              <p>{props.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-languages-tools">
        <button>{props.role}</button>
        <button>{props.level}</button>
        {props.languages.map((l) => (
          <button>{l}</button>
        ))}
        {props.tools.map((t) => (
          <button>{t}</button>
        ))}
      </div>
    </div>
  );
};

export default Card;
