const express = require('express');
const router = express.Router();

const typesController = require('../controllers/TypesController');

router.get('/types',typesController.GetTypesList);
router.get("/create-type", typesController.GetCreateType);
router.post("/create-type", typesController.PostCreateType);
// router.get("/edit-region/:typeId", regionsController.GetEditRegion);
// router.post("/edit-region", regionsController.PostEditRegion);
// router.post("/delete-region", regionsController.PostDeleteRegion);

module.exports = router;