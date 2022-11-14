import React from 'react'

export default function RecipeIngredientsEdit({ingredient , handleIngredientsChange,handleIngredientsDelete}) {

  function handleChange(change){
    handleIngredientsChange(ingredient.id,{...ingredient,...change})
  }
  return (
    <>
    <input className='recipe-edit__input' value={ingredient.name} onChange={e => handleChange({name: e.target.value})} type='text' />
    <input className='recipe-edit__input' value={ingredient.amount} onChange={e => handleChange({amount: e.target.value})} type='text' />
    <button className='btn btn--danger' onClick={() => handleIngredientsDelete(ingredient.id)}>&times;</button>
      
    </>
  )
}
