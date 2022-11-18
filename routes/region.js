const express = require('express');
const router = express.Router();

const regionController = require('../controllers/RegionsController');

router.get('/regions',regionController.GetRegionsList);
router.get("/create-region", regionController.GetCreateRegion);
router.get("/edit-region/:regionId", regionController.GetEditRegion);
router.post("/create-region", regionController.PostCreateRegion);
router.post("/edit-region", regionController.PostEditRegion);
router.post("/delete-region", regionController.PostDeleteRegion);


module.exports = router;