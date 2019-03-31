const User = require('../models').User;
const PerformanceReview = require('../models').PerformanceReview;

module.exports = {
  create(req, res) {
    return User
      .create({ name: req.body.name, })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return User
      .findAll({
        include: [{
          model: PerformanceReview,
          as: 'performanceReviews',
        }],
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return User
      .findByPk(req.params.userId, {
        include: [{
          model: PerformanceReview,
          as: 'performanceReviews',
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },
};
