const mysql = require('mysql')

class Connection {
constructor() { 
if (!this.pool) {
console.log('creating connection...')
this.pool = mysql.createPool({
connectionLimit: 100,
host: '34.69.160.202',
user: 'root',
password: 'password',
database: 'skate_app'
})

return this.pool
}

return this.pool
}
}

const instance = new Connection()

module.exports = instance;