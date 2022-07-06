export function goToHomePage (navigate){
    navigate("/")
}

export function goToDetailsPage (navigate, id){
    navigate(`/detalhes/${id}`)
}

export function goToPokedexPage(navigate){
    navigate("/pokedex")
}