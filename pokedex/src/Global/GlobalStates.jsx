import React, {useState} from "react";
import useRequestData from "../Hooks/useRequestData";
import {GlobalContext} from "./GlobalContext"

export const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const pokesHome = useRequestData("https://pokeapi.co/api/v2/pokemon/")
  
    const states = {
        pokemons, 
        pokesHome
    }
    const setters = {
        setPokemons
    }
    return(
        <GlobalContext.Provider value={{states, setters }} >
            {props.children}
        </GlobalContext.Provider>
    )
}