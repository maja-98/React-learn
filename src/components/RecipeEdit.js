import React , {useContext} from 'react'
import { RecipeContext } from './App'
import RecipeIngredientsEdit from './RecipeIngredientsEdit'

export default function RecipeEdit({recipe}) {
  const {hanldeRecipeEditClose, handleRecipeChange} = useContext(RecipeContext)

  function handleChange(change){
    handleRecipeChange(recipe.id,{...recipe,...change})
  }

  function handleIngredientsChange(id,ingredient){
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(r => r.id === id)
    newIngredients[index] = ingredient
    handleChange({ingredients:newIngredients})
  }
  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-button-container'>
            <button className='btn recipe-edit__remove-button' onClick={hanldeRecipeEditClose}>&times;</button>
        </div>
        <div className='recipe-edit__details-grid'>
          <label className='recipe-edit__label' htmlFor='name'>Name</label>
          <input className='recipe-edit__input' value= { recipe.name } onInput={e => handleChange({name: e.target.value})} type="text" name="name" id="name" /> 
          <label className='recipe-edit__label' htmlFor='cookTime'>Cook Time</label>
          <input className='recipe-edit__input' value= { recipe.cookTime} onInput={e => handleChange({cookTime: e.target.value})} type="text" name="cookTime" id="cookTime" /> 
          <label className='recipe-edit__label' htmlFor='servings'>Servings</label>
          <input className='recipe-edit__input' value= { recipe.servings } type="number" onInput={e => handleChange({servings: parseInt(e.target.value) || ''})} min="1" name="servings" id="servings" /> 
          <label className='recipe-edit__label' htmlFor='instructions'>Instructions</label>
          <textarea className='recipe-edit__input' value= { recipe.instructions } onInput={e => handleChange({instructions: e.target.value})} name='instructions' id='instructions'/>
        </div>
        <br />
        <label className='recipe-edit__label'>Ingredients</label>
        <div className='recipe-edit__ingredients-grid'>
          <div>Name</div>
          <div>Amount</div>
          <div></div>
          {recipe.ingredients.map(ingredient => (
            <RecipeIngredientsEdit key = {ingredient.id} ingredient = {ingredient} handleIngredientsChange={handleIngredientsChange}/>
          ))}
        </div>
        <div className='recipe-edit__add-ingredients-btn-container'>
          <button className='btn btn--primary'>Add Ingredients</button>
        </div>
    </div>
  )
}
