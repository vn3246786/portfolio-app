import React, { createContext, useReducer } from 'react'
import { ThemeReducer } from './ThemeReducer'




const initialState = true

export const ThemeContext =createContext()

const ThemeContextProvider = ({children}) => {

    const[state,dispatch]=useReducer(ThemeReducer,initialState)

  return (
    <ThemeContext.Provider 
    value={{
       dispatch:dispatch,
       darkTheme:state
    }}
    >
       {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
