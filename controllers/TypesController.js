// const Type = require("../models/type")

exports.GetTypesList = (req, res, next) => {
    res.render("type/type-list", {
        pageTitle: "Types of pokemon",
        typeActive: true,
    })
}

exports.GetCreateType = (req, res, next) => {
    res.render("type/save-type", {
        pageTitle: "Create a new Type",
        editMode: false,
        regionActive: true,
    })
}
exports.PostCreateType = (req, res, next) => {
    const name = req.body.Name;


   res.redirect("/")
}

