import React from 'react'

export default function RecipeIngredientsEdit({ingredient , handleIngredientsChange}) {

  function handleChange(change){
    handleIngredientsChange(ingredient.id,{...ingredient,...change})
  }
  return (
    <>
    <input className='recipe-edit__input' value={ingredient.name} onInput={e => handleChange({name: e.target.value})} type='text' />
    <input className='recipe-edit__input' value={ingredient.amount} onInput={e => handleChange({amount: e.target.value})} type='text' />
    <button className='btn btn--danger'>&times;</button>
      
    </>
  )
}
