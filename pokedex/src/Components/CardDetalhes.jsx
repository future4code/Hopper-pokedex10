import React from "react";

export default function cardPokemon() {
  return (
    <div className="containerDetalhes">
      <div className="containerImagens">
        <div className="containerImg">foto frontal<img src="frontal" alt="" /></div>
        <div className="containerImg">foto traseira<img src="costas" alt="" /></div>
      </div>
      <div className="containerPoderes">
        <h1>Poderes</h1>
        <p>hp: (numero)</p>
        <p>attack: (numero)</p>
        <p>defense:(numero)</p>
        <p>special-attack:(numero)</p>
        <p>special-defense:(numero)</p>
        <p>speed:(numero)</p>
      </div>
      <div>
        <div className="tipos">
          <p>TIPO</p>
        </div>
        <div className="movimentos">
          <h2>Principais Ataques</h2>
          <p>(ataques)</p>
        </div>
      </div>
    </div>
  );
}
