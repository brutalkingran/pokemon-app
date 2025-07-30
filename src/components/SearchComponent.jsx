import { useState } from 'react';
import SearchForm from './SearchForm.jsx';
import PokemonList from './PokemonList.jsx';

const SearchComponent = () => {
  const [inputSearch, setInputSearch] = useState([])

  return (
    <div>
      <SearchForm/>
      <PokemonList searchData={inputSearch}/>
    </div>
  )
}

export default SearchComponent