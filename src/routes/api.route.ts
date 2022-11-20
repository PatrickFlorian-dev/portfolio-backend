const expr = require('express')

// Variables
const router  = expr.Router(); 
const apiController = require('../controllers/api.controller'); 
const authController = require('../controllers/auth.controller'); 

// Auth routes
router.post('/auth/super-secure-resource', authController.superSecureResource); 

// Standard routes without params
router.post('/api/test', apiController.postTest); 
router.get('/api/test', apiController.getTest); 

// Standard routes with params
router.get('/api/test/:testParam', apiController.postTestWithParam);
router.post('/api/test/:testParam', apiController.getTestWithParam);

module.exports = router;