import React from "react";
import './recipeCard.css'


const RecipeCard = ({deleteRecipe,recipe}) => {
    return (
   
      
        <div class="flex-card">
           <img className='img-container' src={recipe.image} alt=""/>
            <div>
             <h1 className='card-title' > {recipe.title} </h1>
             <p  className='card-desc'> {recipe.description} </p>
             
              <button onClick={()=>deleteRecipe(recipe.id)}>Delete</button>
            </div>
        </div>
      
    )
}
   

   
 

export default RecipeCard