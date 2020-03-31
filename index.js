const express = require('express')
// const path = require('path')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require("body-parser")
const usersRouter = require('./routes/api/users')
const spotsRouter = require('./routes/api/spots')
// const logger = require('./middleware/logger')





// Init middleware
// app.use(logger);

//Body Parser Middleware
//Raw json handler
// app.use(express.json());
//Form Submission handler
// app.use(express.urlencoded({extended: false}))


// Set static folder
// app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/spots', spotsRouter)
// app.use('/social', require('./routes/api/social'))

// app.get('/', function(req,res) {
//   res.send('Frenzied Fish')
// })

// app.get('/about', (req, res) => {
//   res.send('about bitches')
// })

app.listen(port, () =>
console.log(`Example app listening on ${port}!`))


//geolocation api key = AIzaSyC0K8jeR2V8lGvgvIiN0GK8OTfeQ7WeXt0
//javascript maps api key = AIzaSyC0K8jeR2V8lGvgvIiN0GK8OTfeQ7WeXt0