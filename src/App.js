import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";


export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState(
    {
    bg:'black',
    text:'white'
  })
  return (
    <ThemeContext.Provider value = {{ backgroundColor: theme.bg, color: theme.text }}>
      Counter
      <Counter initialCount = {0}/>
      CounterHooks
      <CounterHooks initialCount = {0}/>
      <button onClick={() => setTheme(prevTheme =>{ 
        console.log(prevTheme)
        if (prevTheme.bg=== 'black'){
          return {
            bg:'white',
            text:'black'
          }
        }
        else{
          return      {
            bg:'black',
            text:'white'
          }
        }
        
      })}>Toggle Theme</button>
    </ThemeContext.Provider >
  );
}

export default App;
        // if (prevTheme.bg === 'white'){
        //   prevTheme.bg = 'black'
        //   prevTheme.text = 'white'
        // }
        // else{
        //   prevTheme.bg = 'white'
        //   prevTheme.text = 'black'          
        // }
        // return prevTheme
      // } )}