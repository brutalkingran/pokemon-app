import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const useFavorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  // AÑADIR
  const addFavorites = ( pokemon ) => { // Añade primer pokemon
    const exists = isInFavorites( pokemon.id );

    if (!pokemon?.id) {
      console.warn("Intentaste agregar un Pokémon inválido.");
      return;
    }
    
    if (exists) {
      alert("Este Pokémon ya está en tu equipo.");
      return;
    }

    if (isLimitExceeded()) {
      alert("Solo puedes tener 6 Pokémon en tu equipo.");
      return;
    }
    
    !exists && setFavorites([...favorites, pokemon]);
  }
  
  // LIMIT EXCEEDED
  const isLimitExceeded = () => favorites.length >= 6;

  // REMOVE PRODUCT
  const removeFavorites = ( id ) => {
    setFavorites( favorites.filter(fav => fav.id !== id )); // mantiene todos los items excepto los del id a eliminar
  };

  // CLEAR
  const clearFavorites = () => {
    setFavorites([]);
  };

  // COUNT EVERY POKEMON
  const totalFavorites = () => favorites.length;

  // IS IN FAVORITES
  const isInFavorites = (id) => favorites.find((fav) => fav.id === id);

  return {
    favorites,
    addFavorites,
    removeFavorites,
    clearFavorites,
    totalFavorites,
    isInFavorites
  };
};

export default useFavorites;
