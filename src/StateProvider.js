//Importing the require dependences
import React, { createContext, useContext, useReducer } from 'react';

//PREPARING THE DATA LAYER
export const StateContext = createContext();
                   //reducer LISTEN TO CHANGES                      //initialState IS WHAT THE APP LOOKS LIKE WHEN LOADING
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer,
    initialState)}>
    {children} {/* REFERING  THE APP AS A CHILDREN*/}
  </StateContext.Provider>);

// HOOK WHICH ALLOWS US TO PULL INFORMATION FROM THE DATA LAYER 
export const useStateValue = () => useContext(StateContext);  