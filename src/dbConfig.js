const maridb = require("mariadb")

const connection = maridb.createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.MARIADB_PORT,
})

const getConnection = () => {
    return connection
}

module.exports = { getConnection }