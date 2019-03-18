var models = require('../db/models');

exports.search = function(req, res, next) {
  models.cm_mdmm.findAll
  ({
    where: { md_cdcstm: req.params.id }
   }).then(cm_mdmms => {
     res.json({ cm_mdmms: cm_mdmms });
     console.log(req.params.id);
   });
 };

exports.destroy = function(req, res, next) {
  models.cm_mdmm.destroy
  ({
    where: { md_idmdmm: req.params.id }
  }).then(cm_mdmm => {
    res.redirect(302, "/cm_mdmms");
  });
};

