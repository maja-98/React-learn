import React,{useState, useEffect} from "react";
import RecipeList from "./RecipeList";
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from "./RecipeEdit";





export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY ='cookingWithReact.recipes'
function App() {


  const [recipes, setRecipes] = useState(sampleRecipies)
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  },[])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
    
  },[recipes])




  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    hanldeRecipeEditClose,
    handleRecipeChange
  }

  function handleRecipeChange(id,recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeAdd(){
    const NewRecipe = {
      id: uuidv4(),
      name : "",
      servings: "",
      cookTime: "",
      instructions: "",
      ingredients: [
        { id: uuidv4(), name: '',amount: ''}
      ]
    } 
    const template = recipes.filter(recipe => recipe.name ==="")
    
    if (template.length){
      setSelectedRecipeId(template[0].id)
    }
    else{
      setRecipes([...recipes, NewRecipe])
      setSelectedRecipeId(NewRecipe.id)
    }
  }

  function handleRecipeDelete(id){
    if (selectedRecipeId!=null && selectedRecipeId === id){
      setSelectedRecipeId(undefined)
    } 
    setRecipes(recipes.filter(recipe => recipe.id !== id))
    
  }
  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }
  function hanldeRecipeEditClose(){
    setSelectedRecipeId(undefined)
  }
  return ( 
    <RecipeContext.Provider value = {recipeContextValue}>
      <RecipeList recipies = {recipes} />
      {selectedRecipe && <RecipeEdit recipe= {selectedRecipe}/>}
    </RecipeContext.Provider>
  );
}


const sampleRecipies = [
  {
    id: 1,
    name : 'Plain Chicken',
    servings: 3,
    cookTime : '1:45',
    instructions: '1. Put Salt on Chicken\n2. Put Chicken on Oven\n3. Eat Chicken',
    ingredients : [
      {
        id:1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id:2,
        name: 'Salt',
        amount: '2 Tbs'
      },
    ]
  },
  {
    id: 2,
    name : 'Plain Pork',
    servings: 5,
    cookTime : '0:45',
    instructions: '1. Put Paprika on Pork\n2. Put pork on Oven\n3. Eat Chicken',
    ingredients : [
      {
        id:1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id:2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
]


export default App;