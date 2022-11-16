const express = require('express');
const router = express.Router();

const regionsController = require('../controllers/RegionsController');

router.get('/regions',regionsController.GetRegionsList);
router.get("/create-region", regionsController.GetCreateRegion);
router.post("/create-region", regionsController.PostCreateRegion);
// router.get("/edit-region/:regionId", regionsController.GetEditRegion);
// router.post("/edit-region", regionsController.PostEditRegion);
// router.post("/delete-region", regionsController.PostDeleteRegion);

module.exports = router;