const MainComponent = () => {
  return (
    <div>
      {/* SEARCH */}
      <SearchComponent/>

      {/* RANDOM SEARCH */}
      <CharacterList/>

      {/* FAVORITE SEARCH */}
      <CharacterList type="favorites"/>
    </div>
  )
}

export default MainComponent