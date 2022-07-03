import { useNavigate } from "react-router-dom";
import React from "react";import { goToDetailsPage } from "../Routes/coordinator";
export default function PokeCardRemove() {
    const navigate = useNavigate();
  return (
    
            <div className="cardFilho">
                <div className="Card">
                    <img className="imgCard"></img>
                </div>
                <div className="containerBtn">
                    <button className="btnCard">Remover</button>
                    <button className="btnCard" onClick={() => goToDetailsPage(navigate)}>Ver Detalhe</button>
                </div>
           
            </div>
    );
    
}