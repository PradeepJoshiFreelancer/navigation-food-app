import { Children, createContext, useState } from "react";

export const FavoratesContext = createContext({
  ids: [],
  addFavorate: (id) => {},
  removeFavorate: (id) => {},
});

export default function FavorateContextProvider({ children }) {
  const [favorateIds, setFavorateIds] = useState([]);
  const addFavorate = (id) => {
    setFavorateIds((currentIds) => [...currentIds, id]);
  };
  const removeFavorate = (id) => {
    setFavorateIds((currentIds) =>
      currentIds.filter((mealId) => mealId !== id)
    );
  };

  const values = {
    ids: favorateIds,
    addFavorate: addFavorate,
    removeFavorate: removeFavorate,
  };

  return (
    <FavoratesContext.Provider value={values}>
      {children}
    </FavoratesContext.Provider>
  );
}
