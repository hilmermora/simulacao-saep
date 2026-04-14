const db = require('../database/db');

// criar usuario
exports.criar = async (nome, email) => {
    const result = await db.query(
        'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *',
        [nome, email]
    );

    return result.rows[0];
};

// listar usuarios
exports.listar = async () => {
    const result = await db.query('SELECT * FROM usuarios ORDER BY id');
    return result.rows;
};

