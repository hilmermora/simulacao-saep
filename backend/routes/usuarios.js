const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarios');

router.post('/', controller.criarUsuario);
router.get('/', controller.listarUsuarios);

module.exports = router;