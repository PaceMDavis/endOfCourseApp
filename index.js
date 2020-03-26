const express = require('express')
// const path = require('path')
const app = express()
const port = process.env.PORT || 4000
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

app.use('/', require('./routes/api/users'))

// app.get('/', function(req,res) {
//   res.send('Frenzied Fish')
// })

// app.get('/about', (req, res) => {
//   res.send('about bitches')
// })

app.listen(port, () =>
console.log(`Example app listening on ${port}!`))