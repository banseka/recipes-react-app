import React from "react";
import "./styles/recipeBodyStyles.css";

function RecipeBody({ title, image, calories, ingredients, handleBodyopen }) {
  return (
    <div>
      <button className='back-btn' onClick={handleBodyopen}>
        Back
      </button>
      <div className='recipe_body'>
        <h1 className='title'>{title}</h1>{" "}
        <p className='calories'>calories: {calories}</p>
        <div className='recipe_prime'>
          <ul>
            {ingredients.map((item) => (
              <li>{item.text}</li>
            ))}
          </ul>

          <img className='image' src={image} alt='recipeImage' />
        </div>
      </div>
    </div>
  );
}

export default RecipeBody;
