const {TrackController} = require('../../controllers')
const express = require('express')
const router = express.Router();

router.get('/stats', TrackController.getTrack);
router.get('/', TrackController.update);
module.exports = router;