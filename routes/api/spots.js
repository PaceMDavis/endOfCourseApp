const express = require('express');
const router = express.Router();
const SpotsController = require('../../controllers/spots')

router.get('/', SpotsController.getSpots);

router.get('/:spot_id', SpotsController.getSpotsById)

router.post('/', SpotsController.createSpot)

router.put('/:spot_id', SpotsController.updateSpotById)

module.exports = router;