const {UserController} = require('../../controllers')
const express = require('express')
const {AuthRequestMiddleware} = require('../../middlewares')
const router = express.Router();

router.post('/signup', AuthRequestMiddleware.validateAuthRequest, UserController.createUser);
router.post('/signin',AuthRequestMiddleware.validateAuthRequest, UserController.signin);
router.get('/auth/me',AuthRequestMiddleware.checkAuth, UserController.isAuthenticated);
router.get('/', UserController.getUser);
router.get('/recommend', AuthRequestMiddleware.checkAuth, AuthRequestMiddleware.isApplicant, UserController.recommend);
router.get('/stats', UserController.stats);
module.exports = router;