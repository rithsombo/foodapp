import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import Itemlist from "./Itemlist";

export default function Fooddetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "35f45f98fcd249b083f2394adedb8d41";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsloading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img src={food.image} alt="" className={styles.imageRecipe} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}
            </strong>
          </span>
          <span>
            👩‍👧‍👦<strong>Serves{food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>${food.pricePerServing} per serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <Itemlist food={food} isLoading={isLoading} />
        <h2>Instrucions</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
