import React, { useState,useEffect } from "react";
import Home from "./components/home/Home.jsx"
import NavigationBar from "./components/navigationBar/NavigationBar.jsx"
import RecipeList from "./components/recipeList/RecipeList.jsx";
import axios from "axios";
import RecipeForm from './components/addRecipe/AddRecipe.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from "./components/login/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./services/privateRoute.jsx";


function App() {
  

  const [recipes, setRecipes] = useState([])



  useEffect(() => {
    axios.get("http://localhost:3000/fakeRecipes")
    .then((response) => {
      setRecipes(response.data)
    })
    .catch(error => {
      console.error("There was an error fetching the recipes!", error)
    })
  }, [])

  const addRecipeToList = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe ])
  }

  const deleteRecipe = (id)=>{
    axios.delete(`http://localhost:3000/fakeRecipes/${id}`)
    .then((response) => {
      console.log('Recipe deleted successfully:', response.data)
      const updatedRecipes = recipes.filter((recipe)=>recipe.id !==id)
      setRecipes(updatedRecipes)
  })}

  return (
    <AuthProvider>
      <BrowserRouter>

        <div className='App'>
          <NavigationBar />
          <Home/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<PrivateRoute element={<RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>} />}/>
            <Route path="/addRecipe" element={<PrivateRoute element= {<RecipeForm addRecipeToList={addRecipeToList}/>} />}/>
          </Routes>

        </div>
    </BrowserRouter>
  </AuthProvider>
    
    

  )
}

export default App
