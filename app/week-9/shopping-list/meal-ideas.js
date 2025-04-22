"use client";
import { useState, useEffect } from "react";

// www.themealdb.com/api/json
export function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState("");

  const loadMealIdeas = async () => {
    try {
      const newMeals = await fetchMealIdeas(ingredient);
      setMeals(newMeals);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMealIngredients = async (selectedMeal) => {
    try {
      const newIngredients = await fetchMealIngredients(selectedMeal);
      setIngredients(newIngredients);
    } catch (error) {
      console.error(error);
    }
  };

  
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("API Error: ", error);
    throw error;
  }
}

async function fetchMealIngredients(selectedMeal) {
  try{
    let mealName = String(selectedMeal);
    mealName = mealName.replace(" ","_")
    console.log(`Meal: ${mealName}`);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedMeal}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.ingredients || [];
  } catch (error) {
    console.error("API Error: ", error);
    throw error;
  }
}


  useEffect(() => {
      loadMealIdeas();
  }, [ingredient]);

  useEffect(() => {
    loadMealIngredients();
    console.log(ingredients);
  }, [selectedMeal]);

  const handleSelect = (event) => {
    event.preventDefault;
    setSelectedMeal(event.target.innerText);
    console.log(`Selected meal: ${selectedMeal}`);
  };

  return (
    <div className="pt-4">
      <p className="text-xl font-semibold">Meal Ideas:</p>
      {ingredient ? (
        meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal}>
              <div className="capitalize" onClick={handleSelect}>
                {meal.strMeal}
              </div>
            </div>
          ))
        ) : (
          <p>No meals found in our database for {ingredient}.</p>
        )
      ) : (
        <p>Select an ingredient from the list on your left to view options of recipes.</p>
      )}
    </div>
  );
}