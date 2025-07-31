import SearchComponent from './SearchComponent';
import PokemonList from './PokemonList';
import FavoriteList from './FavoriteList';
import useFavorites from '../hooks/useFavorites';
import { useState } from 'react';

const MainComponent = () => {
  const { favorites, totalFavorites, clearFavorites } = useFavorites();
  const [randomTrigger, setRandomTrigger] = useState(0);

  const handleRandomize = () => {
    setRandomTrigger(prev => prev + 1); 
  }

  return (
    <main className='min-h-screen'>
      {/* SEARCH */}
      <section className='p-4 m-2'>
        <div className='flex flex-row justify-around items-center m-5'>
          <h2 className='text-2xl mr-10'>Búsqueda</h2>
          <h2></h2>
        </div>
        <div className='flex justify-center'>
          <SearchComponent />
        </div>
      </section>

      {/* RANDOM SEARCH */}
      <section className='flex flex-col m-2'>
        <div className='flex flex-row justify-around m-5'>
          <h2 className='text-2xl'>Lista Aleatoria</h2>
          <button onClick={ handleRandomize } className='bg-amber-300 p-1 rounded text-white cursor-pointer'>Generar de nuevo</button>
        </div>
        <PokemonList randomizeNow={randomTrigger}/>
      </section>

      {/* FAVORITES */}
      <section className='flex flex-col m-2'>
        <div className='flex flex-row justify-around m-5'>
          <h2 className='text-2xl'>Tu equipo [{ !totalFavorites() ? 0 : totalFavorites() }]</h2>
          <button onClick={() => clearFavorites() } className='rounded bg-red-500 text-white p-1 cursor-pointer'>Borrar todos</button>
        </div>
        <FavoriteList/>
      </section>
    </main>
  )
}

export default MainComponent;