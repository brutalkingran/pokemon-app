import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const useCart = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  // AÑADIR
  const addItem = ( item ) => { // Añade primer producto
    const exists = cart.find(pokemon => pokemon.id === fav.id); // búsqueda

    if (exists) {
      setCart(cart.map(prod =>
        pokemon.id === fav.id
          ? { ...pokemon, quantity: prod.quantity + 1 } // crea el atributo quantity
          : pokemon
      ));
    } else {
      setCart([...favorites, { ...fav, quantity: 1 }]);
    }
  };

  // REMOVE PRODUCT
  const removeFavorites = ( id ) => {
    setFavorites( favorites.filter(fav => fav.id !== id )); // mantiene todos los items excepto los del id a eliminar
  };

  // CLEAR
  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    cart,
    addFavorites,
    removeFavorites,
    clearFavorites,
    total
  };
};

export default useFavorites;
