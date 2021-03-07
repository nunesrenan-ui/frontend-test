import "./Cards.css";

const Cards = ({ data }) => {
  return (
    <div className="CardsHeader">
      <div className="container">
        <span>Encontrados 20 herois</span>
        <div className="wrapper">
          <i>
            <img alt="hero" src="./images/superhero.png" width="20" />
          </i>
          <span>Ordenar por nome - A/Z</span>
          <img alt="hero" src="./images/toggle-left.png" width="70" />
          <img alt="hero" src="./images/hearth-1.png" width="20" />
          <span>Somente Favoritos</span>
        </div>
      </div>

      <div className="cards-container">
        {data.map(({ name, id }, index) => (
          <div className="card" key={index}>
            <div className="image"></div>
            <h1>
              {name}
              {id}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
