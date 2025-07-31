import axios from "axios";
import { useEffect, useState } from "react";
import useFavorites from "../hooks/useFavorites";

const PokemonCard = ({ pokeData = null, dataFull = null }) => {
  const { favorites, addFavorites, removeFavorites, isInFavorites } = useFavorites();
  const [pokemonData, setPokemonData] = useState(null)
  const [loading, setLoading] = useState( false );
  const [error, setError] = useState( null );

  //if (!pokeData && !data_full) return null; // mostrar pantalla carga

  const toFirstLetterMayus = ( word ) => ( (word).charAt(0).toUpperCase() + (word).slice(1) );

  const fetchPokemon = async () => {
    setLoading( true ); // iniciar carga
    setError( null );

    try {
      if (dataFull) {
        setPokemonData(dataFull); // usar los datos directamente
      } else if (pokeData?.url) {
        const { data } = await axios.get(pokeData.url);
        setPokemonData(data);
      } else {
        setError("No hay datos para cargar");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchPokemon();
  }, [pokeData, dataFull])
  
  return (
    <>
      { loading && <p>Cargando...</p> }

      {
        pokemonData &&
          <div className="border-2 rounded-xl border-black m-2 p-2 flex flex-col items-center justify-between">
            <img
              src={pokemonData.sprites?.other?.showdown?.front_default ?? pokemonData.sprites.front_default}
              alt={pokemonData.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400?text=error";
              }}
            />
  
            <p>Name: <span className="font-bold">{ toFirstLetterMayus(pokemonData.name) }</span></p>
            <p>Tipo: <span className="span italic">{ pokemonData.types.map((t) => toFirstLetterMayus(t.type.name)).join(", ") }</span></p>
            
            {
              !isInFavorites(pokemonData.id)
              ?
                <button onClick={ () => addFavorites(pokemonData) } className="p-1 cursor-pointer border border-red-400">Equipo +</button>
              :
                <button onClick={ () => removeFavorites(pokemonData.id) } className="p-1 cursor-pointer border border-red-400">Equipo -</button>
            }
          </div>
      }

      { error && <p>Error: {error} </p> }
    </>
  )
}

export default PokemonCard;