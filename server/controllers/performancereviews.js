const PerformanceReview = require('../models').PerformanceReview;

module.exports = {
  create(req, res) {
    return PerformanceReview
      .create({
        name: req.body.name,
        userId: req.params.userId,
      })
      .then(performanceReview => res.status(201).send(performanceReview))
      .catch(error => res.status(400).send(error));
  },
};
