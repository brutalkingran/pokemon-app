const FooterComponent = () => {
  return (
    <footer className='text-center bg-blue-500 text-white p-5 text-sm'>
      <p>Aplicación creada por <span className="font-bold">Patricio Esparza</span> - Github: <a href="https://github.com/brutalkingran/" className="underline text-red-100">brutalkingran</a></p>
      <p>La marca <i>Pokémon</i> es propiedad de <i>The Pokémon Company</i></p>
      <p>API cortesía de <a href="https://pokeapi.co/" className="text-red-100 underline">PokéAPI</a></p>
    </footer>
  )
}

export default FooterComponent;