const mongoose = require('mongoose')

const weightSchema = mongoose.Schema({
  date: {type: Date, default: Date.now },
  max: {type: Number},
  min: {type: Number},
  variance: {type: Number}
})

const Weight = mongoose.model('Weight', weightSchema)

module.exports = Weight