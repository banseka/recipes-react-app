import React from "react";
import styles from "./recipes.module.css";

export default function Recipes({ title, image, calories, ingredients }) {
  return (
    <div className={styles.recipes}>
      <h1 className='recipe_title'>{title}</h1>
      <ul>
        {ingredients.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
      <p className='recipe_calories'>calories: {calories}</p>
      <img className='recipe_image' src={image} alt='recipeImage' />
    </div>
  );
}
