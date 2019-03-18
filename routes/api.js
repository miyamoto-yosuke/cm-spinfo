var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* API of controling cm_aclgs */
// router.get('/cm_aclgs/', controllers.api_cm_aclg_controller.index);
// router.get('/cm_aclgs/:id(\\d+)', controllers.api_cm_aclg_controller.show);
// router.post('/cm_aclgs/', controllers.api_cm_aclg_controller.create);
// router.put('/cm_aclgs/:id(\\d+)', controllers.api_cm_aclg_controller.update);
// router.delete('/cm_aclgs/:id(\\d+)', controllers.api_cm_aclg_controller.destroy);
router.get('/cm_aclgs/:id', controllers.api_cm_aclg_controller.search);
router.get('/cm_mdmms/:id', controllers.api_cm_mdmm_controller.search);
router.delete('/cm_mdmms/:id(\\d+)', controllers.api_cm_mdmm_controller.destroy);
// TODO: make endpoint

module.exports = router;
