import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import RecipeItem from "../../components/RecipeItem";

const Home = () => {
  const { apiData, loading } = useContext(GlobalContext);

  if (loading === true) {
    return <div>Loading... please wait</div>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {apiData && apiData.length > 0 ? (
        apiData?.map((item, index) => {
          return <RecipeItem item={item} index={index} />;
        })
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something...
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
