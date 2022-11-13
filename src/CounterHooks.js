import React, {useState , useContext } from "react";
import { ThemeContext } from "./App";
export default function CounterHooks(props){

    const [state,setState] = useState({count: props.initialCount})
    const style = useContext(ThemeContext)
    return (
        <div>
            <button style= {style} onClick={() => setState(prevState => {
                return {
                    count: prevState.count - 1
                }
            })}>-</button>
            <span> {state.count} </span>
            <button style= {style} onClick={() => setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })}>+</button>
        </div>
    )
}