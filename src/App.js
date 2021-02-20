import React, { useEffect, useState } from "react";
import Recipes from "./components/recipes/Recipes";
import RecipeBody from "./components/recipe_body/RecipeBody";
import SlideShow from "./components/slideShow";
import "./App.css";

const App = () => {
  const APP_ID = "6ed03c09";
  const APP_KEY = "41f1c2c57e9ae9dc8482c6d89cb181a1";
  //state variables
  const [recipes, setRecipes] = useState([]);
  const [recipeBody, setRecipeBody] = useState([]);
  const [openBody, setOpenBody] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQquery] = useState("chicken");

  //component on mount useEffect
  useEffect(() => {
    getRecipes();
  }, [query]);

  //function fetching recipes from api
  const getRecipes = () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
      });
  };

  //updating search state parameters funtion
  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  //get query from user funtion
  const getQuery = (e) => {
    e.preventDefault();
    setQquery(search);
    setSearch("");
  };

  //handle body open state function
  const handleBodyopen = () => {
    setOpenBody(!openBody);
  };

  //handle body recipe function
  const handleRecipeBody = (calories) => {
    let tempRecipes = [...recipes];
    let preRecipe = tempRecipes.find(
      (recipe) => recipe.recipe.calories === calories
    );
    let index = tempRecipes.indexOf(preRecipe);
    let recipe = tempRecipes[index];

    console.log(recipe);

    setRecipeBody([recipe]);
  };

  return (
    <div className='App'>
      <SlideShow />
      <form onSubmit={getQuery} className='search_form'>
        <input
          className='search_bar'
          type='text'
          value={search}
          onChange={updateSearch}
          placeholder='find a recipe'
        />
        <button className='search_button' type='submit'>
          search
        </button>
      </form>
      {openBody === false && (
        <div className='recipes_container'>
          {recipes.map((recipe) => (
            <Recipes
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              handleBodyopen={handleBodyopen}
              handleRecipeBody={handleRecipeBody}
            />
          ))}
        </div>
      )}
      {openBody === true && (
        <div className='recipe_body'>
          {recipeBody.map((recipe) => (
            <RecipeBody
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              handleBodyopen={handleBodyopen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
