import { useNavigate } from "react-router-dom";
import { goToPokedexPage, goToDetailsPage } from "../Routes/coordinator"

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="fundo">
            <header className="header">
                <button className="btn" onClick={() => goToPokedexPage(navigate)}>Ir para Pokedex</button>
                <button className="btn" onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
            </header>
        </div>
    )
}