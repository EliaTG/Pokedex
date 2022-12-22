
const Pokemon = require("../models/Pokemon");
const Region = require("../models/Region");
const Type = require("../models/Type");

exports.GetIndex = (req, res, next) => {
    Pokemon.findAll().then(result =>{
        const pokemon = result.map((result) => result.dataValues);
        res.render("pokemons/index", {
            pageTitle: "Pokedex App",
            homeActive: true,
            pokemon: pokemon,
    
        })
    }).catch((err) =>{
        console.log(err);
    })
}
exports.GetPokemonList = (req, res, next) => {
    Pokemon.findAll().then(result =>{
        const pokemon = result.map((result) => result.dataValues);
        
        res.render("pokemons/pokemon-list", {
            pageTitle: "Pokemon List",
            pokemonActive: true,
            pokemon: pokemon,
            hasPokemon: pokemon.length > 0
        })
    }).catch((err) =>{
        console.log(err);
    })
   
}
exports.GetCreatePokemon = (req, res, next) => {

    Region.findAll()
        .then(result =>{
            const region = result.map((result) => result.dataValues);
             Type.findAll().then((result) =>{
                const type = result.map((result) => result.dataValues);
                res.render("pokemons/save-pokemon", {
                    pageTitle: "Create a new pokemon",
                    editMode: false,
                    pokemonActive: true,
                    region: region,
                    type: type,
                    hasRegion: region.length > 0,
                    hasType: type.length > 0
                })
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
    exports.PostCreatePokemon = (req, res, next) => {
        const PokemonName = req.body.Name;
        const PokemonDescription = req.body.Description;
        const PokemonRegion = req.body.Region;
        const PokemonType = req.body.Type;
        const PokemonImagePath = req.file;
        console.log(PokemonRegion);

    if (!PokemonImagePath) {
        return res.redirect("/pokemons")
    }

    Pokemon.create({
        name: PokemonName, 
        description: PokemonDescription,
        regionId: PokemonRegion,
        typeId: PokemonType,
        imagePath: "/" +  PokemonImagePath.path,
    })
    .then(result =>{
        res.redirect("/pokemons")
    })
    .catch((err) => {
        console.log(err);
    });

}
exports.GetEditPokemon = (req, res, next) => {
   const edit = req.query.edit;
   const pokemonId = req.params.pokemonId;

   if(!edit){
        return res.redirect("/pokemons")
   }
    Pokemon.findOne({ where: { id: pokemonId } })
    .then((result) => {
      const pokemon = result.dataValues;   

      if (!pokemon) {
        return res.redirect("/pokemons");
      }
        Region.findAll()
            .then((result) => {
            const region = result.map((result) => result.dataValues);
            
                Type.findAll().then((result) => {
                    const type = result.map((result) => result.dataValues);

                        res.render("pokemons/save-pokemon",{
                            pageTitle: "Edit Pokemon",
                            editMode: edit,
                            pokemonActive: true,
                            pokemon: pokemon,
                            region: region,
                            type: type,
                            hasRegion: region.length > 0,
                            hasType: type.length > 0
                        });
                });
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .catch((err) => {
      console.log(err);
    });

   
}
exports.PostEditPokemon = (req, res, next) => {
    const PokemonName = req.body.Name;
    const PokemonDescription = req.body.Description;
    const PokemonImagePath = req.body.ImageUrl;
    const PokemonRegion = req.body.Region;
    const PokemonType = req.body.Type;
    // const PokemonRegionId = req.body.RegionId;
    // const PokemonTypeId = req.body.TypeId;
    const pokemonId = req.body.pokemonId;

   Pokemon.update({
        name: PokemonName, 
        description: PokemonDescription, 
        imagePath: PokemonImagePath, 
        regionId: PokemonRegion,
        typeId: PokemonType
    }, 
        {where: {id: pokemonId}}
    ).then(result =>{
        return res.redirect("/pokemons")
    }).catch(err =>{
        console.log(err);
    })
  
}
exports.PostDeletePokemon = (req, res, next) => {
   const pokemonId = req.body.pokemonId;

   Pokemon.destroy({where: {id: pokemonId}})
   .then(result =>{
    return res.redirect("/pokemons")
    }).catch(err =>{
        console.log(err);
    })
    
}