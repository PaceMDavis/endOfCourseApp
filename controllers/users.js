const mysql = require('mysql')
const pool = require('../mysql/connection')
const {handleSQLError} = require('../mysql/error')

const getUsers = (req,res) => {
  pool.query('SELECT * FROM users LIMIT 50', (err, rows) => {
    if(err) return handleSQLError(res,err)
    return res.json(rows)
  })
};

const getUsersById = (req,res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? = ? LIMIT 100';
  const replacements = ['users', 'user_id', req.params.user_id]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if(err) return handleSQLError(res,err)
    return res.json(rows)
  })
}


module.exports = {
  getUsers
}