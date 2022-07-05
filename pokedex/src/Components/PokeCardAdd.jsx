import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../Routes/coordinator";


export default function PokeCardAdd(props) {
    const navigate = useNavigate();
  
    return (
    
            <div className="cardFilho">
                <div className="Card">
                    <img src={props.url} alt={props.name} className="imgCard"></img>
                </div>
                <div className="containerBtn">
                    <button className="btnCard" onClick={props.addToCart}>Adicionar</button>
                    <button className="btnCard" onClick={() => goToDetailsPage(navigate)}>Ver Detalhe</button>
                </div>
           
            </div>
    );
    
}