import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import RecipeItem from "../../components/RecipeItem";

const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList?.map((item, index) => {
          return <RecipeItem item={item} index={index} />;
        })
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please add items...
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
