var router = require('express').Router();
var controller = require('./companies.controller');

router.get('/', controller.getAllCompanies);

module.exports = router;