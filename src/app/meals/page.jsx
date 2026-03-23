import Image from "next/image";
import SearchInput from "./components/SearchInput";

const getMeals = async (search) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
  );
  const data = await res.json();
  return data;
};

const MealsPage = async ({ searchParams }) => {
  const { search } = await searchParams;

  const { meals } = await getMeals(search);
  return (
    <div className="grid grid-cols-1 gap-5 m-10">
      <SearchInput />
      {meals?.map((meal) => (
        <div className="border rounded-2xl p-5" key={meal?.idMeal}>
          <Image src={meal?.strMealThumb} alt="meal" width={100} height={100} />
          <h1>{meal?.strMeal}</h1>
          <p>{meal?.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};

export default MealsPage;
