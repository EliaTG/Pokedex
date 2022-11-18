const express = require('express');
const router = express.Router();

const typesController = require('../controllers/TypesController');

router.get('/types',typesController.GetTypesList);
router.get("/create-type", typesController.GetCreateType);
router.post("/create-type", typesController.PostCreateType);
router.get("/edit-type/:typeId", typesController.GetEditType);
router.post("/edit-type", typesController.PostEditType);
router.post("/delete-type", typesController.PostDeleteType);

module.exports = router;