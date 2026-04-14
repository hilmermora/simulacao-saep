const db = require('../database/db');

// criar tarefa
exports.criar = async (id_usuario, descricao, setor, prioridade) => {
    const result = await db.query(
        `INSERT INTO tarefas 
        (id_usuario, descricao, setor, prioridade) 
        VALUES ($1, $2, $3, $4) RETURNING *`,
        [id_usuario, descricao, setor, prioridade]
    );
    return result.rows[0];
};

// listar tarefas
exports.listar = async () => {
    const result = await db.query(`
        SELECT t.*, u.nome 
        FROM tarefas t
        JOIN usuarios u ON u.id = t.id_usuario
        ORDER BY t.id
    `);
    return result.rows;
};

// atualizar tarefa
exports.atualizar = async (id, descricao, setor, prioridade, status) => {
    const result = await db.query(
        `UPDATE tarefas 
         SET descricao=$1, setor=$2, prioridade=$3, status=$4 
         WHERE id=$5 RETURNING *`,
        [descricao, setor, prioridade, status, id]
    );
    return result.rows[0];
};

// deletar tarefa
exports.deletar = async (id) => {
    await db.query('DELETE FROM tarefas WHERE id=$1', [id]);
};