import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard.jsx';
import axios from 'axios';

const PokemonList = ({ searchData = '', randomizeNow }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState( false );
  const [error, setError] = useState( null );

  const fetchPokeApi = async () => {
    setLoading( true );
    setError( null );

    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}pokemon?limit=10000&offset=0`);
      const results = data.results;

      let filteredResults;

      if (searchData) {
        const normalizedSearch = searchData.toLowerCase().trim();
        filteredResults = results.filter((el) =>
          el.name.toLowerCase().includes(normalizedSearch)
        ).slice(0, 19);

      } else {
        // Random list
        filteredResults = results.sort(() => Math.random() - 0.5).slice(0, 19);
      }

      setPokemonData(filteredResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokeApi();
  }, [searchData, randomizeNow])

  return (
    <div className='flex m-2 flex-wrap'>
      { loading && <p>Cargando...</p> }

      {
        pokemonData.length === 0
          ? <p>No se encontraron resultados</p>
          : pokemonData.map((pokemon, key) => <PokemonCard key = {key} pokeData = {pokemon}/>)
      }

      { error && <p>Error: {error} </p> }
    </div>
  )
}

export default PokemonList;