const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

let weight = require('./routes/weight')
let mongo_url = `mongodb://admin:admin@ds261838.mlab.com:61838/sirclotes`

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/weight', weight)

mongoose.connect(mongo_url, (err, res) => {
  console.log(err? err : 'connected to mongoose')
})

app.listen(4444)