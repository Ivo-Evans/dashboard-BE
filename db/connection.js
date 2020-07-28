const pg = require('pg');

const herokuConfig = process.env.DATABASE_URL && {
    connectionString: process.env.DATABASE_URL
}

// if herokuConfig is undefined pg looks in the environment for variables that it uses to make its own url
const db = new pg.Pool(herokuConfig)

module.exports = db