const express = require('express');
const {InfoController} = require('../../controllers');
const UserRoutes = require('./user-routes');
const JobRoutes = require('./job-routes');
const ApplicantRoutes = require('./applicant-routes');
const router = express.Router();

router.get('/info', InfoController.info);
router.use('/user', UserRoutes);
router.use('/job', JobRoutes);
router.use('/applicant', ApplicantRoutes);

module.exports = router;