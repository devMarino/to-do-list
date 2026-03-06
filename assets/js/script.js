tarefas = []

const addTarefa = document.querySelector('#addTarefa')
const campoTarefa = document.querySelector('#campoTarefa')
const listaTarefa = document.querySelector(".listaTarefa") 
// após o click do botão cria a tarefa


// cria tarefa
addTarefa.addEventListener('click', (evento) =>{
    // pega valor da tarefa
    const textoTarefa = campoTarefa.value.trim()
    // evento: evita recarregamento depois de salvar 
    evento.preventDefault()
    if (campoTarefa.value !== ''){
        tarefas.push({text: textoTarefa, concluido: false})
        campoTarefa.value = ''
        mostrarTarefas()
    } else {
        console.log("está vazio")
    }
})

function mostrarTarefas(){
   listaTarefa.innerHTML = ''
   tarefas.forEach(
    (tarefa, index) => {
    const li = document.createElement('li');
    li.classList.toggle('completo', tarefa.concluido)
    li.innerHTML = `<span>${tarefa.text}</span>
    <input type = "checkbox" ${tarefa.concluido ? 'checked' : ''}
    onClick = "tarefaConcluida(${index})">
    <button class = "editar" onclick="editarTarefa(${index})">Editar</button>
    <button class = "remover" onclick="removerTarefa(${index})"></button>
    `
    listaTarefa.appendChild(li)
   })
};

function removerTarefa(index){
    // remove pelo indice construido no mostrarTarefas
    if(confirm('você deseja excluir essa tarefa?')){
        tarefas.splice(index,1)
        mostrarTarefas()
    }

}

function editarTarefa(index){
    // prompt com validação de campo nulo ou espaços indesejados
    const novaTarefa = prompt(`editando a tarefa: ${tarefas[index].text}`)
    if (novaTarefa !== null && novaTarefa.trim() !== ''){
        tarefas[index].text = novaTarefa.trim()
        mostrarTarefas()
    }
}

function tarefaConcluida(index){
    // concluido vem falso, se for diferente disso acaba sendo um valor true
    tarefas[index].concluido = !tarefa[index].concluido
    mostrarTarefas()
}