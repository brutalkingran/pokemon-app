import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard.jsx';
import axios from 'axios';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState( false );
  const [error, setError] = useState( null );

  const fetchPokeApi = async () => {
    setLoading( true );
    setError( null );

    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}pokemon?limit=10000&offset=0`);
      const randomized_data = data.results.sort(() => Math.random() - 0.5);
      const limit_data = randomized_data.slice(0,19)
      
      setPokemonData( limit_data );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokeApi();
  }, [])

  return (
    <div className='flex m-2 flex-wrap'>
      { loading && <p>Cargando...</p> }

      {
        pokemonData.map((pokemon, key) => <PokemonCard key = {key} pokeData = {pokemon}/>)
      }

      { error && <p>Error: {error} </p> }
    </div>
  )
}

export default PokemonList;