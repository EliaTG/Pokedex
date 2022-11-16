// const Region = require("../models/region")

exports.GetRegionsList = (req, res, next) => {
    res.render("regions/region-list", {
        pageTitle: "Regions",
        regionActive: true,
    })
}
// exports.GetIndex = (req, res, next) => {
//     res.render("pokemons/index", {
//         pageTitle: "Pokedex App",

//     })
// }

exports.GetCreateRegion = (req, res, next) => {
    res.render("regions/save-region", {
        pageTitle: "Create a new region",
        editMode: false,
        regionActive: true,
    })
}
exports.PostCreateRegion = (req, res, next) => {
    const name = req.body.Name;


   res.redirect("/")
}
// exports.GetEditRegion = (req, res, next) => {
//    const edit = req.query.edit;
//    const RegionId = req.params.RegionId;

//    if(!edit){
//         return res.redirect("/")
//    }
//     res.render("regions/save-region",{
//     pageTitle: "Edit Region",
//     editMode: edit,
//     regionActive: true,

//    })
// }
// exports.PostEditRegion = (req, res, next) => {
//    const edit = req.query.edit;
//    const RegionId = req.params.RegionId;

//    if(!edit){
//         return res.redirect("/")
//    }
//     res.render("regions/save-region",{
//     pageTitle: "Edit Region",
//     editMode: edit,
//      regionActive: true,
//    })
// }
// exports.PostDeleteRegion = (req, res, next) => {
//    const RegionId = req.body.RegionId;

//     return res.redirect("/")
// }