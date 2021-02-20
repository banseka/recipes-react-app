import React from "react";
import "./recipes.css";

export default function Recipes({
  title,
  image,
  calories,
  handleBodyopen,
  handleRecipeBody,
}) {
  return (
    <div
      className='recipes'
      onClick={() => {
        handleRecipeBody(calories);
        handleBodyopen();
      }}
    >
      <h1 className='recipe_title'>{title}</h1>
      <img className='recipe_image' src={image} alt='recipeImage' />
      <br />
      <p>View Details</p>
    </div>
  );
}
