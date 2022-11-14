import React, {useContext} from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'



export default function RecipeList({recipies}) {
  const {handleRecipeAdd} = useContext(RecipeContext)
  return (
    <div className='recipe-list'>
        <div>
            {recipies.map(recipe => {
                return <Recipe 
                    key={recipe.id} 
                    {...recipe}
                    />
            })}
        </div>
        <div className='recipe-list__add-recipe-btn-container'>
            <button className='btn btn--primary' onClick={handleRecipeAdd}>Add Recipe</button>
        </div>
    </div>
  )
}
