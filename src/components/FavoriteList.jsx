import useFavorites from "../hooks/useFavorites";
import PokemonCard from "./PokemonCard";

const FavoriteList = () => {
  const { favorites, totalFavorites } = useFavorites();

  favorites.map((pkmn) => console.log("FAVORITES: ", pkmn))

  return (
    <div className="text-center m-3">
      { totalFavorites() === 0 && <p className="text-gray-400 italic"> - No se han añadido Pokémon a equipo -</p> }
      
      <div className="flex m-2 flex-wrap">
        {
          favorites.map((pokemon, key) => <PokemonCard key={key} dataFull={pokemon}/>)
        }
      </div>
    </div>
  )
}

export default FavoriteList