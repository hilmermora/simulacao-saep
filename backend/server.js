const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const usuarioRoutes = require('./routes/usuarios');
const tarefaRoutes = require('./routes/tarefas');

app.use('/usuarios', usuarioRoutes);
app.use('/tarefas', tarefaRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});