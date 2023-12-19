const {JobController} = require('../../controllers')
const express = require('express')
const router = express.Router();

router.post('/', JobController.createJob);
router.put('/', JobController.updateJob);
router.get('/', JobController.getJob);
module.exports = router;