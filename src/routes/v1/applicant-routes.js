const {ApplicantController} = require('../../controllers')
const express = require('express')
const router = express.Router();

router.post('/', ApplicantController.createApplicant);
router.put('/', ApplicantController.updateApplicant);
router.get('/', ApplicantController.getApplicant);
router.get('/stats', ApplicantController.stats);
module.exports = router;