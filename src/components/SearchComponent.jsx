import React, { useState } from 'react'

const SearchComponent = () => {
  const [inputSearch, setInputSearch] = useState([])

  return (
    <div>
      <SearchForm/>
      <CharacterList searchData={inputSearch}/>
    </div>
  )
}

export default SearchComponent