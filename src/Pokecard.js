const Pokecard = (pokemon) => {
  return (
    <>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.img} alt=""></img>
      <p>{pokemon.type}</p>
    </>
  );
};

export default Pokecard;
