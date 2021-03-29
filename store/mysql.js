const mysql = require('mysql')

const config = require('../config')

const dbconf = {
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  port: config.dbPort,
}

let connection

function handleCon() {
  connection = mysql.createConnection(dbconf)

  connection.connect((err) => {
    if (err) {
      console.error('[db err]', err)
      setTimeout(handleCon, 2000)
    } else {
      console.log('DB Connected!')
    }
  })

  connection.on('error', (err) => {
    console.error('[db err]', err)
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleCon()
    } else {
      throw err
    }
  })
}

handleCon()

function get(table, start_date) {
  const GROUP_TABLE = 'groupd'
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} 
     LEFT JOIN ${GROUP_TABLE} ON student.group_id = ${GROUP_TABLE}.id 
     WHERE register_date > ${start_date}
     `, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

function upsert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET?`, data, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

module.exports = {
  get,
  upsert,
}
