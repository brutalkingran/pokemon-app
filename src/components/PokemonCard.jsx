const PokemonCard = ({ data }) => {
  return (
    <div>
      <img src={data.img} alt={data.name}/>
      <h2>{data.name}</h2>
      <p>Tipo: {data.type}</p>
    </div>
  )
}

export default PokemonCard;