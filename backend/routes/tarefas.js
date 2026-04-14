const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefas');

router.post('/', controller.criarTarefa);
router.get('/', controller.listarTarefas);
router.put('/:id', controller.atualizarTarefa);
router.delete('/:id', controller.deletarTarefa);

module.exports = router;