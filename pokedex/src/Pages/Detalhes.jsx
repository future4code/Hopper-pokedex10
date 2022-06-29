import React from "react";
import CardPokemon from "../Components/CardDetalhes";
import {useNavigate} from "react-router-dom";
import {goToPokedexPage, goToHomePage} from "../Routes/coordinator"


export default function Detalhes () {
const navigate = useNavigate()

    return(
        <div>
        <header className="header">
            <button classNome="btn" onClick={() => goToHomePage(navigate)}>Voltar</button>
            <button classNome="btn" onClick={() => goToPokedexPage(navigate)}>Ir para Pokedex</button>
        </header>
        <CardPokemon/>
        </div>
    )
}