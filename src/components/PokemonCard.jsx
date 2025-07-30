const PokemonCard = ({ data = null }) => {
  if (!data) return null; // mostrar pantalla carga

  return (
    <div>
      <img
        src={data.img}
        alt={data.name}
        className="h-full w-full flex items-center justify-center flex-shrink-0 rounded"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/600x400?text=error";
        }}
      />

      <h2>{data.name}</h2>
      <p>Tipo: {data.type}</p>
    </div>
  )
}

export default PokemonCard;