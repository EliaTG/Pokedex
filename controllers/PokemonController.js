const Pokemon = require("../models/Pokemon")

exports.GetIndex = (req, res, next) => {
    res.render("pokemons/index", {
        pageTitle: "Pokedex App",
        homeActive: true,

    })
}
exports.GetPokemonList = (req, res, next) => {
    res.render("pokemons/pokemon-list", {
        pageTitle: "Pokemon List",
        pokemonActive: true,
    })
}
exports.GetCreatePokemon = (req, res, next) => {
    res.render("pokemons/save-pokemon", {
        pageTitle: "Create a new pokemon",
        editMode: false,
        pokemonActive: true,
    })
}
exports.PostCreatePokemon = (req, res, next) => {
    const name = req.body.Name;
    const description = req.body.Description;
    const imageurl = req.body.ImageUrl;
    const region = req.body.Region;
    const type = req.body.Type;


   res.redirect("/")
}
exports.GetEditPokemon = (req, res, next) => {
   const edit = req.query.edit;
   const pokemonId = req.params.pokemonId;

   if(!edit){
        return res.redirect("/")
   }
    res.render("pokemons/save-pokemon",{
    pageTitle: "Edit Pokemon",
    editMode: edit,
    pokemonActive: true,

   })
}
exports.PostEditPokemon = (req, res, next) => {
   const edit = req.query.edit;
   const pokemonId = req.params.pokemonId;

   if(!edit){
        return res.redirect("/")
   }
    res.render("pokemons/save-pokemon",{
    pageTitle: "Edit Pokemon",
    editMode: edit,
    pokemonActive: true,

   })
}
exports.PostDeletePokemon = (req, res, next) => {
   const pokemonId = req.body.pokemonId;

    // res.render("pokemons/save-pokemon",{
    //     pageTitle: "Edit Pokemon",
    //     editMode: edit,
        
    // })
    return res.redirect("/")
}