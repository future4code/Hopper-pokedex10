import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PokeCard from "../Components/PokeCardAdd";
import { goToPokedexPage } from "../Routes/coordinator";
import { GlobalContext } from "../Global/GlobalContext";
import useRequestData from "../Hooks/useRequestData";
import { baseURL } from "../Components/constant";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  /* const { id } = useParams();
  const [pokemonsDetails, setPokemonsDet] = useRequestData(`/${id}`) */
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get(`${baseURL}`)
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="fundo">
      <header className="header">
        <button className="btn" onClick={() => goToPokedexPage(navigate)}>
          Ver minha POKEDEX
        </button>
        <div className="alignCenter">
          <h1>LISTA DE POKEMONS</h1>
        </div>
      </header>
      <div className="fundo2">
        {pokemons &&
          pokemons.map((pokemon, index) => {
            return (
              <div key={index}>
                <PokeCard url={pokemon.url} alt={pokemon.name} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
