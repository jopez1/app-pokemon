import {
  
  Wrapper,
  //LoadingGIF,
  LoadingWrapper,
  LoadingText,
} from "./StyledCards";
import PokemonCard from "../PokemonCard/PokemonCard";

const Cards = ({ allPokemons, pokemons, currentPage }) => {
  let slicedPokemons = pokemons?.slice(
    (currentPage - 1) * 12,
    currentPage * 12
  );

  return (
    
      <Wrapper>
        {allPokemons.length ? (
          slicedPokemons.length ? (
            slicedPokemons.map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  id={pokemon.id}
                  types={pokemon.types}
                />
              );
            })
          ) : (
            <h2>
            lo sentimos, no pudimos encontrar ningún pokémon que coincida con tu búsqueda
            </h2>
          )
        ) : (
          <LoadingWrapper>
            {/* <LoadingGIF src="loading.gif" alt="loading" /> */}
            <LoadingText>La paciencia es una virtud...</LoadingText>
          </LoadingWrapper>
        )}
      </Wrapper>
    
  );
};

export default Cards;
