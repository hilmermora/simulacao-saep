const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Saep',
    password: 'root',
    port: 5432,
});

module.exports = pool;