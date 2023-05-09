import Pokecard from "./Pokecard";
import "./Pokedex.css";

const image =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex">
      {pokemon.map((p) => (
        <Pokecard
          key={p.id}
          img={`${image}${p.id}.png`}
          name={p.name}
          type={p.type}
          basexp={p.base_experience}
        />
      ))}
    </div>
  );
};

export default Pokedex;
