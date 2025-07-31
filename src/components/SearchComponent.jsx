import { useState } from 'react';
import SearchForm from './SearchForm.jsx';
import PokemonList from './PokemonList.jsx';

const SearchComponent = () => {
  const [inputSearch, setInputSearch] = useState('')

  const handleSearch = (value) => {
    const normalizedSearch = typeof value === 'string' ? value.toLowerCase().trim() : '';
    if (normalizedSearch) {
      setInputSearch(normalizedSearch);
    }
  }

  return (
    <div className='w-full flex flex-col items-center'>
      {/* Buscador centrado */}
      <div className='w-full max-w-xl mb-6'>
        <SearchForm onSearch={handleSearch} />
      </div>

      {/* Resultados centrados en layout amplio */}
      {inputSearch !== '' && (
        <div className='w-full'>
          <PokemonList searchData={inputSearch} />
        </div>
      )}
    </div>
  );
}

export default SearchComponent