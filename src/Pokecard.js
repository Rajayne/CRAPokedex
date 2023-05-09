import "./Pokecard.css";

const Pokecard = (pokemon) => {
  return (
    <div className="Pokecard">
      <h2 className="Pokecard-title">{pokemon.name}</h2>
      <img className="Pokecard-img" src={pokemon.img} alt=""></img>
      <div className="Pokecard-text">
        <p>Type: {pokemon.type}</p>
        <p>EXP: {pokemon.basexp}</p>
      </div>
    </div>
  );
};

export default Pokecard;
