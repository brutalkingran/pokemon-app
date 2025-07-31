import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { toast } from 'react-toastify';

const useFavorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  // AÑADIR
  const addFavorites = ( pokemon ) => { // Añade primer pokemon

    if (!pokemon?.id) {
      toast.warn("Intentaste agregar un Pokémon inválido.");
      return;
    }

    if (isInFavorites(pokemon.id)) {
      toast.info("Este Pokémon ya está en tu equipo.");
      return;
    }

    if (isLimitExceeded()) {
      toast.error("Solo puedes tener 6 Pokémon en tu equipo.");
      return;
    }

    if (isInFavorites( pokemon.id )) {
      toast.error("Este Pokémon ya existe.");
      return;
    }
    
    setFavorites([...favorites, pokemon]);
    toast.success(`${pokemon.name.toUpperCase()} fue añadido a tu equipo`);
  }
  
  // LIMIT EXCEEDED
  const isLimitExceeded = () => favorites.length >= 6;

  // REMOVE PRODUCT
  const removeFavorites = ( id ) => {
    if (!isInFavorites( id )) {
      toast.error("Pokémon con id inválido.");
      return;
    }

    setFavorites( favorites.filter(fav => fav.id !== id )); // mantiene todos los items excepto los del id a eliminar
    toast.info(`Pokémon removido del equipo con éxito.`);
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
