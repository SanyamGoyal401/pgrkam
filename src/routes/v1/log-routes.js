const {LogController} = require('../../controllers')
const express = require('express')
const router = express.Router();

router.post('/', LogController.createLog);
router.get('/', LogController.getLog);
module.exports = router;