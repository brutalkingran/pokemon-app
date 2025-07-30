import pokemon_logo from '../assets/pokemon_logo.png';
import pikachu_icon from '../assets/pikachu_icon.png';

const HeaderComponent = () => {
  return (
    <header className="bg-amber-400">
      <div className='flex flex-row items-center justify-center space-x-5'>
        <a href="#"><img src={ pokemon_logo } alt="Pokémon Logo" width={"250px"} /></a>
        <div className='text-white'>
          <h1 className='text-2xl'>Base de Datos de todos los Pokémon existentes</h1>
          <h2>¡Forma tu equipo conformado por tus favoritos!</h2>
        </div>
        <img src={pikachu_icon} alt="Pikachu Icon" width={"10%"}/>
      </div>
    </header>
  )
}

export default HeaderComponent;