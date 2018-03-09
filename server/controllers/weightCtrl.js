let Weight = require('../models/weight')

const create = (req, res) => {
  let w = {}

  if (typeof req.body.min !== 'undefined') w.min = req.body.min
  else res.send({err: 'Min must be filled'})

  if (typeof req.body.max !== 'undefined') w.max = req.body.max
  else res.send({err: 'Max must be filled'})

  if (typeof req.body.date !== 'undefined') w.date = req.body.date

  w.variance = parseInt(req.body.max) - parseInt(req.body.min)

  let weight = new Weight(w)
  weight.save((err, s_weight) => {
    if (err) {
      res.header(500)
      res.send({err:err})
    } else res.send(s_weight)
  })
}
const update = (req, res) => {
  Weight
    .findById(req.params.id)
    .exec((err, weight) => {
      if (err) {
        res.header(500)
        res.send({err:err})
      } else {
        if (typeof req.body.min !== 'undefined') weight.min = req.body.min
        if (typeof req.body.max !== 'undefined') weight.max = req.body.max
        if (typeof req.body.variance !== 'undefined') weight.variance = req.body.variance
        if (typeof req.body.date !== 'undefined') weight.date = req.body.date

        weight.save((err, u_weight) => {
          if (err) {
            res.header(500)
            res.send({err:err})
          } else res.send(u_weight)

        })
      }
    })
}
const remove = (req, res) => {
  Weight
    .findById(req.params.id)
    .exec((err, weight) => {
      if (err) {
        res.header(500)
        res.send({err:err})
      } else {
        weight.remove((err, d_weight) => {
          if (err) {
            res.header(500)
            res.send({err:err})
          } else res.send(d_weight)
        })
      }
    })
}
const getOne = (req, res) => {
  Weight
    .findById(req.params.id)
    .select('date max min variance')
    .exec((err, weight) => {
      if (err) {
        res.header(500)
        res.send({err:err})
      } else res.send(weight)
    })
}
const getAll = (req, res) => {
  Weight
    .find({})
    .sort('-date')
    .exec((err, weights) => {
      if (err) {
        res.header(500)
        res.send({err:err})
      } else res.send(weights)
    })
}

module.exports = {
  create,
  update,
  remove,
  getAll,
  getOne
}