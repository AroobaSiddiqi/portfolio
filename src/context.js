import { createContext, useReducer } from "react";
import Toggle from "./components/toggle/Toggle";

export const ThemeContext = createContext();

const INITIAL_STATE = {darkMode:false};

const themeReducer = (state,action) => {
    switch(action.type){
        case "TOGGLE":
            return{darkMode : !state.darkMode };
        default:
            return state; 
    }
}

export const ThemeProvider = (props)=>{
    const [state,dispatch] = useReducer(themeReducer,INITIAL_STATE)
    return(
        <ThemeContext.Provider value={{state,dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}