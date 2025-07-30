import SearchComponent from './SearchComponent';
import PokemonList from './PokemonList';

const MainComponent = () => {
  return (
    <main className='h-9/10'>
      {/* SEARCH */}
      <div className='flex flex-col'>
        <div className='flex flex-row justify-around'>
          <h2 className='text-2xl'>Búsqueda</h2>
          <button>aaaaaa</button>
        </div>
        <SearchComponent/>
      </div>

      {/* RANDOM SEARCH */}
      <div className='flex flex-col'>
        <div className='flex flex-row justify-around'>
          <h2 className='text-2xl'>Lista Aleatoria</h2>
          <button>Generar de nuevo</button>
        </div>
        <PokemonList/>
      </div>

      {/* FAVORITE SEARCH */}
      <div className='flex flex-col'>
        <div className='flex flex-row justify-around'>
          <h2 className='text-2xl'>Tus Pokémon favoritos</h2>
          <button>   aaaaa</button>
        </div>
        <PokemonList type="favorites"/>
      </div>
    </main>
  )
}

export default MainComponent;