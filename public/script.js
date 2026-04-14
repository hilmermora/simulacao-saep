async function carregar() {
    const res = await fetch('http://localhost:3000/tarefas');
    const tarefas = await res.json();

    document.getElementById('a_fazer').innerHTML = '';
    document.getElementById('fazendo').innerHTML = '';
    document.getElementById('pronto').innerHTML = '';

    tarefas.forEach(t => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${t.descricao}</p>
            <p>${t.setor}</p>
            <p>${t.prioridade}</p>
            <p>${t.nome}</p>

            <select onchange="mudarStatus(${t.id}, this.value)">
                <option ${t.status=='a fazer'?'selected':''}>a fazer</option>
                <option ${t.status=='fazendo'?'selected':''}>fazendo</option>
                <option ${t.status=='pronto'?'selected':''}>pronto</option>
            </select>

            <button onclick="deletar(${t.id})">Excluir</button>
        `;

        document.getElementById(t.status.replace(' ', '_')).appendChild(div);
    });
}

async function mudarStatus(id, status) {
    await fetch(`http://localhost:3000/tarefas/${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ status })
    });
    carregar();
}

async function deletar(id) {
    if(confirm('Deseja excluir?')){
        await fetch(`http://localhost:3000/tarefas/${id}`, { method: 'DELETE' });
        carregar();
    }
}

carregar();