import React, { createContext, useReducer } from 'react'
import { reducer } from './Reducer';

export const GlobalContext = createContext("Initial Value");

let data = {
  darkTheme: true,
  user: {},
  isLogin: null,
  baseUrl: (window.location.href.includes('localhost'))
    ?
    `http://localhost:5001/api/v1` : `/api/v1`,

  baseUrlSocketIo: (window.location.href.includes('localhost'))
    ?
    `http://localhost:5001` : ``
}

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
