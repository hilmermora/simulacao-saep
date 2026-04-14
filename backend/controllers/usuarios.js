const usuarioModel = require('../models/usuarios');

// criar usuario
exports.criarUsuario = async (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }

    try {
        const usuario = await usuarioModel.criar(nome, email);

        res.json({
            mensagem: 'Usuário cadastrado com sucesso',
            usuario
        });

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

// listar usuarios
exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioModel.listar();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};