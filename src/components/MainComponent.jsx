import SearchComponent from './SearchComponent';
import PokemonList from './PokemonList';
import FavoriteList from './FavoriteList';
import useFavorites from '../hooks/useFavorites';

const MainComponent = () => {
  const { favorites, totalFavorites, clearFavorites } = useFavorites();

  return (
    <main className='h-9/10 p-2'>
      {/* SEARCH */}
      <div className='flex flex-col'>
        <div className='flex flex-row justify-around'>
          <h2 className='text-2xl'>Búsqueda</h2>
          <button>aaaaaa</button>
        </div>
        {/* <SearchComponent/> */}
      </div>

      {/* RANDOM SEARCH */}
      <div className='flex flex-col'>
        <div className='flex flex-row justify-around'>
          <h2 className='text-2xl'>Lista Aleatoria</h2>
          <button>Generar de nuevo</button>
        </div>
        <PokemonList/>
      </div>

      {/* FAVORITES */}
      <div className='flex flex-col'>
        <div className='flex flex-row justify-around'>
          <h2 className='text-2xl'>Tu equipo Pokémon [{ !totalFavorites() ? 0 : totalFavorites() }]</h2>
          <button onClick={() => clearFavorites()}>Borrar todos</button>
        </div>
        <FavoriteList/>
      </div>
    </main>
  )
}

export default MainComponent;