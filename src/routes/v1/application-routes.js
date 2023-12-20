const {ApplicationController} = require('../../controllers')
const express = require('express')
const router = express.Router();

router.post('/', ApplicationController.createApplication);
router.put('/', ApplicationController.updateApplication);
router.get('/', ApplicationController.getApplication);
router.delete('/', ApplicationController.deleteApplication);
module.exports = router;