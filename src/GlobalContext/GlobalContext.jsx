import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${input}`
      );
      const data = await response.json();

      setApiData(data.data.recipes);
      setLoading(false);
      setInput("");
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setInput("");
    }
  };

  const addToFavorite = (currentItem) => {
    let copyFavoriteList = [...favoriteList];
    const index = copyFavoriteList.findIndex(
      (item) => item.id === currentItem.id
    );

    if (index === -1) {
      copyFavoriteList.push(currentItem);
    } else {
      copyFavoriteList.splice(index);
    }

    setFavoriteList(copyFavoriteList);
  };

  return (
    <GlobalContext.Provider
      value={{
        input,
        setInput,
        handleSubmit,
        apiData,
        loading,
        recipeDetailsData,
        setRecipeDetailsData,
        addToFavorite,
        favoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
