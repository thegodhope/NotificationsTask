const express = require('express')
const router = express.Router();
const notificationController = require('../controllers/NotificationController')

router.post('/deposit-failed', notificationController.handleFailedDeposit)

module.exports = router