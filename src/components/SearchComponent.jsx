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
    <div>
      <SearchForm onSearch={handleSearch}/>
      {
        inputSearch != '' && <PokemonList searchData={inputSearch}/>
      }
    </div>
  )
}

export default SearchComponent