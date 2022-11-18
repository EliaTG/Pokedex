const Type = require("../models/Type")

exports.GetTypesList = (req, res, next) => {
    Type.findAll().then(result =>{
        const type = result.map((result) => result.dataValues);
        res.render("type/type-list", {
            pageTitle: "Types of pokemon",
            typeActive: true,
            type: type,
            hasType: type.length > 0
        })
    }).catch((err) =>{
        console.log(err);
    })
}

exports.GetCreateType = (req, res, next) => {
    res.render("type/save-type", {
        pageTitle: "Create a new Type",
        editMode: false,
        typeActive: true,
    })
}
exports.PostCreateType = (req, res, next) => {
    const name = req.body.Name;


   res.redirect("/")
}
exports.PostCreateType = (req, res, next) => {
    const TypeName = req.body.Name;
    const TypeDescription = req.body.Description;

    Type.create({name: TypeName, description: TypeDescription})
    .then(result =>{
        res.redirect("/types")
    }).catch(err => {
        console.log(err);
    })
}
exports.GetEditType = (req, res, next) => {
    const edit = req.query.edit;
    const TypeId = req.params.TypeId;
 
    if(!edit){
         return res.redirect("/types")
     }
   Type.findOne({where: {id: TypeId}})
         .then(result => {
             const type = result.dataValues;
                 if(!type){
                     return res.redirect("/types");
                 }
                     res.render("type/save-type",{
                         pageTitle: "Edit Type",
                         editMode: edit,
                         typeActive: true,
                         type: type,
                     })
             }).catch(err => {
                 console.log(err);
             });
 }
exports.PostEditType = (req, res, next) => {
    const TypeName = req.body.Name;
    const TypeDescription = req.body.Description;
    const TypeId = req.body.TypeId;

    Type.update(
        {name: TypeName, description: TypeDescription},
        {where: {id: TypeId}}
    ).then(result =>{
        return res.redirect("/types")
    }).catch(err =>{
        console.log(err);
    })
}
exports.PostDeleteType = (req, res, next) => {
    const TypeId = req.body.TypeId;
 
    Type.destroy({where: {TypeId: TypeId}})
    .then(result =>{
     return res.redirect("/types")
     }).catch(err =>{
         console.log(err);
     });
     
 }