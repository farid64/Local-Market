const Op = require('sequelize').Op;
const Customer = require('../models/api_model');

exports.index = function(req, res) {
  res.json({ farid: 'salam bar shoma' });
};

exports.user = function(req, res) {
  console.log(req.params);
  res.send(req.params);
};

exports.createUser = function(req, res) {
  console.log(req.body);
  res.json(req.body);
};

exports.getUser = function(req, res) {
  const { info } = req.body;
  const infoArr = info.split(' ');
  const fn = infoArr[0];
  const ln = infoArr[1] ? infoArr[1] : '';

  Customer.findAll({
    where: {
      firstname: {
        [Op.like]: `${fn}%`
      },
      lastname: {
        [Op.like]: `${ln}%`
      }
    }
  }).then(function(results) {
    res.json(results);
  });
};
