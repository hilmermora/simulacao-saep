const tarefaModel = require('../models/tarefas');

// criar tarefa
exports.criarTarefa = async (req, res) => {
    const { id_usuario, descricao, setor, prioridade } = req.body;

    if (!id_usuario || !descricao || !setor || !prioridade) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }

    try {
        const tarefa = await tarefaModel.criar(
            id_usuario,
            descricao,
            setor,
            prioridade
        );

        res.json({
            mensagem: 'Tarefa criada com sucesso',
            tarefa
        });

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

// listar tarefas
exports.listarTarefas = async (req, res) => {
    try {
        const tarefas = await tarefaModel.listar();
        res.json(tarefas);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

// atualizar tarefa
exports.atualizarTarefa = async (req, res) => {
    const { id } = req.params;
    const { descricao, setor, prioridade, status } = req.body;

    try {
        const tarefa = await tarefaModel.atualizar(
            id,
            descricao,
            setor,
            prioridade,
            status
        );

        res.json({
            mensagem: 'Atualizada com sucesso',
            tarefa
        });

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

// deletar tarefa
exports.deletarTarefa = async (req, res) => {
    const { id } = req.params;

    try {
        await tarefaModel.deletar(id);

        res.json({
            mensagem: 'Tarefa excluída com sucesso'
        });

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};