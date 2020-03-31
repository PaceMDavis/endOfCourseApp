const mysql = require('mysql')
const pool = require('../mysql/connection')
const {handleSQLError} = require('../mysql/error')

const getSpots = (req,res) => {
  pool.query('SELECT * FROM spot LIMIT 50', (err, rows) => {
    if(err) return handleSQLError(res,err)
    return res.json(rows)
  })
};


const getSpotsById = (req,res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? = ? LIMIT 50';
  const replacements = ['spot', 'spot_id', req.params.spot_id]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if(err) return handleSQLError(res,err)
    return res.json(rows)
  })
}

const createSpot = (req,res) => {
  //Insert into spot spot_name, spot_latitude, spot_longitude, risk
  let sql = "INSERT INTO spot (??, ??, ??, ??) VALUES (? , ?, ?, ?)"
  //WHAT GOES IN THE BRACKETS
  const replacements= [
    "spot_name",
    "spot_latitude",
    "spot_longitude",
    "risk",
    req.body.spot_name,
    req.body.spot_latitude,
    req.body.spot_longitude,
    req.body.risk
  ]
  sql = mysql.format(sql,replacements)

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res,err)
    return res.json({ newId: results.insertId})
  })
}

const updateSpotById = (req,res) => {
  //Updates users and set city and state where id = req.params.user_id
  let sql = "UPDATE spot SET ?? = ?, ?? = ? WHERE ?? = ?"
  const replacements = [
    "spot_name",
    req.body.spot_name,
    "risk",
    req.body.risk,
    "spot_id",
    req.params.spot_id
  ]
  sql = mysql.format(sql,replacements)

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json({msg: `Updated spot: ${results.spot_id}`});
  })
}

module.exports = {
  getSpots, getSpotsById, createSpot, updateSpotById
}