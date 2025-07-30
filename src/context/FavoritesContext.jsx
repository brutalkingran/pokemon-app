import { createContext, useEffect, useState } from 'react';

// 1. Definir contexto
export const FavoritesContext = createContext();

// 2. crear provider
export const FavoritesProvider = ({ children }) => { // 'children' son los elementos hijos que se colocan dentro del componente en el JSX.
  const [favorites, setFavorites] = useState(getInitialFavorites);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}> {/* // hace accesible el valor { cart, setCart } a todos los componentes hijos que lo consuman mediante el hook useContext(CartContext). */}
      {children}
    </FavoritesContext.Provider>
  );
};

// Función para cargar desde localStorage
export const getInitialFavorites = () => {
  if (typeof window !== 'undefined') {
    const storedFavorites = localStorage.getItem('favorites');

    return storedFavorites ? JSON.parse( storedFavorites ) : [];
  }
  
  return [];
};