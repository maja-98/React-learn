import React, {useContext} from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'

export default function Recipe(props) {
  const {name,cookTime,id,servings,instructions,ingredients} = props
  const {handleRecipeDelete,handleRecipeSelect} = useContext(RecipeContext)
  return (
    <div className='recipe'>
      <div className='recipe__header'>
        {name!=='' ? <h3 className='recipe__title'>{name}</h3> : <i className='recipe__title'>Add a Name / Delete</i>}
      </div>
      <div>
        <button className='btn btn--primary mr-1' onClick={() => handleRecipeSelect(id)}>Edit</button>
        <button className='btn btn--danger' onClick={() => handleRecipeDelete(id)}>Delete</button>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Cook Time: </span>
        <span className='recipe__value'>{cookTime}</span>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Servings: </span>
        <span className='recipe__value'>{servings}</span>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label '>Instructions: </span>
        <div className='recipe__value recipe__instructions recipe__value--intended'>
            {instructions}
        </div>
      </div>
      <div className='recipe__row'>
        { ingredients.filter(i => i.name!=='').length !== 0 && <span className='recipe__label'>Ingredients: </span> }
        <div className='recipe__value recipe__value--intended'>
            <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  )
}
