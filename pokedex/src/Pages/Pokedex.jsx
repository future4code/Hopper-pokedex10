import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Routes/coordinator";

export default function Pokedex() {
  const navigate = useNavigate();

  return (
    <div className="fundo">
      <header className="header">
        <button className="btn" onClick={() => goToHomePage(navigate)}>Voltar para Home</button>
      </header>
    </div>
  );
}
