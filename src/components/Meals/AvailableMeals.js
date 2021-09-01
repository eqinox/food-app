import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:1339/meals/all");
      let data = await response.json();
      data = data.meals;
      let loadedMeals = [];

      for (const item of data) {
        loadedMeals.push({
          id: item._id,
          name: item.name,
          description: item.description,
          price: item.price,
        });
      }
      setMeals(loadedMeals);
      setisLoading(false);
    };
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
