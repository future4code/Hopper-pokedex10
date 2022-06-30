import React from "react";
import CardPokemon from "../Components/CardDetalhes";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage, goToHomePage } from "../Routes/coordinator"


export default function Detalhes() {
    const navigate = useNavigate()

    return (
        <div className="fundo">
            <header className="header">
                <button className="btn" onClick={() => goToHomePage(navigate)}>Voltar</button>
                <h1>Nome do Pokemon</h1>
                <button className="btn" onClick={() => goToPokedexPage(navigate)}>ADD/REMOVE Pokedex</button>
            </header>
            <CardPokemon />
        </div>
    )
}