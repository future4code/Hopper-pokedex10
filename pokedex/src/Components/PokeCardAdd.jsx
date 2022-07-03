import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../Routes/coordinator";


export default function PokeCardAdd() {
    const navigate = useNavigate();
  
    return (
    
            <div className="cardFilho">
                <div className="Card">
                    <img className="imgCard"></img>
                </div>
                <div className="containerBtn">
                    <button className="btnCard">Adicionar</button>
                    <button className="btnCard" onClick={() => goToDetailsPage(navigate)}>Ver Detalhe</button>
                </div>
           
            </div>
    );
    
}