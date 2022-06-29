import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Routes/coordinator";

export default function Pokedex() {
  const navigate = useNavigate();

  return (
    <div>
        <header className="header">
      <button onClick={() => goToHomePage(navigate)}>Voltar para Home</button>
      </header>
    </div>
  );
}
