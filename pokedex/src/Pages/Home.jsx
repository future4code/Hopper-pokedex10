import {useNavigate} from "react-router-dom";
import {goToPokedexPage, goToDetailsPage} from "../Routes/coordinator"

export default function Home () {
    const navigate = useNavigate()

    return(
        <div>
            <header className="header">
            <button onClick={()=> goToPokedexPage(navigate)}>Ir para Pokedex</button>
            <button onClick={()=> goToDetailsPage(navigate)}>Detalhes</button>
            </header>
        </div>
    )
}