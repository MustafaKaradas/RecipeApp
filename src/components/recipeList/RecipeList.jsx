import React from "react";
import RecipeCard from '../recipeCard/RecipeCard.jsx';
import './recipeList.css';

const RecipeList = ({recipes,deleteRecipe}) => {
    return (
     
      <div className="recipeList" >
        {recipes.map((recipe) => <RecipeCard key ={recipe.id} recipe = {recipe} deleteRecipe={deleteRecipe}/>)}
      </div>
    
    )
  }
  export default RecipeList