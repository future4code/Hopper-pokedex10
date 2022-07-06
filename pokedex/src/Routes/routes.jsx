import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Detalhes from "../Pages/Detalhes";
import Pokedex from "../Pages/Pokedex";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/detalhes"} element={<Detalhes/>} />
        <Route path={"/pokedex"} element={<Pokedex/>} />
      </Routes>
    </BrowserRouter>
  );
};
