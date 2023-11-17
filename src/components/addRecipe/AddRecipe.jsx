import React, { useState } from "react";
import './addRecipe.css'
import axios from "axios";

const RecipeForm = ({addRecipeToList}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [imageUrlError, setImageUrlError] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError("");
    setDescriptionError("");
    setImageUrlError("");
    if (!title || !description || !imageUrl) {
      if (!title) {
        setTitleError("Lütfen başlık alanını doldurun!");
      }
      if (!description) {
        setDescriptionError("Lütfen açıklama alanını doldurun!");
      }
      if (!imageUrl) {
        setImageUrlError("Lütfen resim URL'si alanını doldurun!");
      }
      return;
    }

    axios.post("http://localhost:3000/fakeRecipes", {title, description,imageUrl})
    .then(response => addRecipeToList(response.data))
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <div className="recipe-form">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <input
        type="text"
        placeholder="Enter Recipe Title..."
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        />   
        {titleError && <p className="error-message">{titleError}</p>}
      </div>

      <div>
      <textarea
      placeholder="Enter Recipe Description..."
      onChange={(event) => setDescription(event.target.value)}
      value={description}
    ></textarea>
        {descriptionError && <p className="error-message">{descriptionError}</p>}

      </div>
      <div>
      <input
        type="text"
        placeholder="Enter Image URL..."
        onChange={(event) => setImageUrl(event.target.value)}
        value={imageUrl}
      />
      {imageUrlError && <p className="error-message">{imageUrlError}</p>}

      </div>
       
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
