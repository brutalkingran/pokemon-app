import axios from "axios";
import { useEffect, useState } from "react";
import useFavorites from "../hooks/useFavorites";
import add_icon from '../assets/add_icon.svg';

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
          <div className="group p-1 border-1 border-palette-light-300 m-1 mb-3 bg-white dark:bg-black dark:border-white rounded-lg shadow-md overflow-hidden hover:shadow-lg w-60 sm:w-64 md:w-72 lg:w-80 xl:w-80 2xl:w-96 flex flex-col items-center justify-between">
            <div className="w-[120px] h-[120px] mx-auto">
              <img
                src={pokemonData.sprites?.other?.showdown?.front_default ?? pokemonData.sprites.front_default}
                alt={pokemonData.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400?text=error";
                }}
              />
            </div>
  
            <p>Name: <span className="font-bold">{ toFirstLetterMayus(pokemonData.name) }</span></p>
            <p>Tipo: <span className="span italic">{ pokemonData.types.map((t) => toFirstLetterMayus(t.type.name)).join(", ") }</span></p>
            
            {
              !isInFavorites(pokemonData.id)
              ?
                <button onClick={ () => addFavorites(pokemonData) } className="m-2 border rounded-3xl p-1 cursor-pointer hover:scale-105 transition-all duration-200 flex flex-row items-center hover:bg-green-500 hover:text-white hover:border-neutral-400">
                  <img src={add_icon} alt="Botón Agregar equipo" width={50} className="rounded-3xl"/>
                  <span className="text-xl">Add to team</span>
                </button>
              :
                <button onClick={ () => removeFavorites(pokemonData.id) } className="m-2 border rounded-3xl p-1 cursor-pointer hover:scale-105 transition-all duration-200 flex flex-row items-center hover:bg-red-500 hover:text-white hover:border-neutral-400">
                  <img src={add_icon} alt="Botón Agregar equipo" width={50} className="rounded-3xl"/>
                  <span className="text-xl m-2">Remove from team</span>
                </button>
            }
          </div>
      }

      { error && <p>Error: {error} </p> }
    </>
  )
}

export default PokemonCard;