const Region = require("../models/Region")

exports.GetRegionsList = (req, res, next) => {
    Region.findAll().then(result =>{
        const region = result.map((result) => result.dataValues);
        res.render("regions/region-list", {
            pageTitle: "Regions List",
            regionActive: true,
            region: region,
            hasRegion: region.length > 0
        })
    }).catch((err) =>{
        console.log(err);
    })
}

exports.GetCreateRegion = (req, res, next) => {
    res.render("regions/save-region", {
        pageTitle: "Create a new region",
        editMode: false,
        regionActive: true,
    })
}
exports.PostCreateRegion = (req, res, next) => {
    const RegionName = req.body.Name;
    const RegionDescription = req.body.Description;

    Region.create({name: RegionName, description: RegionDescription})
    .then(result =>{
        res.redirect("/regions")
    }).catch(err => {
        console.log(err);
    })
}
exports.GetEditRegion = (req, res, next) => {
   const edit = req.query.edit;
   const RegionId = req.params.RegionId;

   if(!edit){
        return res.redirect("/regions")
    }
  Region.findOne({where: {id: RegionId}})
        .then(result => {
            const region = result.dataValues;
                if(!region){
                    return res.redirect("/regions");
                }
                    res.render("regions/save-region",{
                        pageTitle: "Edit Region",
                        editMode: edit,
                        regionActive: true,
                        region: region,
                    })
            }).catch(err => {
                console.log(err);
            });
}
exports.PostEditRegion = (req, res, next) => {
    const RegionName = req.body.Name;
    const RegionDescription = req.body.Description;
    const RegionId = req.body.RegionId;

   Region.update({
        name: RegionName, 
        description: RegionDescription}, 
        {where: {id: RegionId}}
    ).then(result =>{
        return res.redirect("/regions")
    }).catch(err =>{
        console.log(err);
    })
  
}

exports.PostDeleteRegion = (req, res, next) => {
    const RegionId = req.body.RegionId;
 
    Region.destroy({where: {RegionId: RegionId}})
    .then(result =>{
     return res.redirect("/regions")
     }).catch(err =>{
         console.log(err);
     });
     
 }

