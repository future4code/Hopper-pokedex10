import { useNavigate } from "react-router-dom";
import PokeCard from "../Components/PokeCardAdd";
import { goToPokedexPage, goToDetailsPage } from "../Routes/coordinator"

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="fundo">
            <header className="header">
                <button className="btn" onClick={() => goToPokedexPage(navigate)}>Ver minha POKEDEX</button>
                <div className="alignCenter">
                <h1>LISTA DE POKEMONS</h1></div>
            </header>
            <div className="fundo2">
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>

            </div>

        </div>
    )
}