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

const getUsersByCity = (req,res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? = ? LIMIT 100';
  const replacements = ['users', 'city', req.params.city]
  sql = mysql.format(sql,replacements)

  pool.query(sql, (err, rows) => {
    if(err) return handleSQLError(res,err)
    return res.json(rows)
  })
}

const getUsersByState = (req,res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? = ? LIMIT 50';
  const replacements = ['users', 'state', req.params.state]
  sql = mysql.format(sql,replacements)

  pool.query(sql, (err, rows) => {
    if(err) return handleSQLError(res,err)
    return res.json(rows)
  })
}

const createUser = (req,res) => {
  //Insert into users userID, city, state
  let sql = "INSERT INTO users (??, ??, ??) VALUES (? , ?, ?)"
  //WHAT GOES IN THE BRACKETS
  const replacements= [
    "username",
    "city",
    "state",
    req.body.username,
    req.body.city,
    req.body.state
  ]
  sql = mysql.format(sql,replacements)

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res,err)
    return res.json({ newId: results.insertId})
  })
}

const updateUserById = (req,res) => {
  //Updates users and set city and state where id = req.params.user_id
  let sql = "UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?"
  const replacements = [
    "users",
    "city",
    req.body.city,
    "state",
    req.body.state,
    "user_id",
    req.params.user_id
  ]
  sql = mysql.format(sql,replacements)

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json({msg: `Updated user: ${results.user_id}`});
  })
}

module.exports = {
  getUsers, getUsersById, getUsersByCity, getUsersByState, createUser, updateUserById
}