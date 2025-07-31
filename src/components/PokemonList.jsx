import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners'; 
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
    <div className='container mx-auto px-1 w-full'>
      {loading && (
        <div className="flex justify-center items-center my-8">
          <ClipLoader size={50} color="#36d7b7" />
        </div>
      )}

      { error && <p>Error: {error} </p> }

      {
        <div className='flex flex-wrap justify-center gap-4'>
          {pokemonData.map((pokemon, key) => (
            <PokemonCard key={key} pokeData={pokemon} />
          ))}
        </div>
      }

    </div>
  )
}

export default PokemonList;