import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
import "./App.css";

const App = () => {
  const APP_ID = "6ed03c09";
  const APP_KEY = "41f1c2c57e9ae9dc8482c6d89cb181a1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQquery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(data.hits);
      });
    //const data = await response.json();
    //setRecipes(data.hits);
  };
  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const getQuery = (e) => {
    e.preventDefault();
    setQquery(search);
    setSearch("");
  };

  return (
    <div className='App'>
      <form onSubmit={getQuery} className='search_form'>
        <input
          className='search_bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search_button' type='submit'>
          search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
