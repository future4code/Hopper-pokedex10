import { useNavigate } from "react-router-dom";
import PokeCardRemove from "../Components/PokeCardRemove";
import { goToHomePage } from "../Routes/coordinator";

export default function Pokedex() {
  const navigate = useNavigate();

  return (
    <div className="fundo">
      <header className="header">
        <button className="btn" onClick={() => goToHomePage(navigate)}>Voltar para Home</button>
        <h1>POKEDEX</h1>
      </header>
      <div className="fundo2">
          <PokeCardRemove/>
          <PokeCardRemove/>
          <PokeCardRemove/>
          <PokeCardRemove/>
      </div>


    </div>
  );
}
