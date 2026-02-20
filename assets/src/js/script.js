tarefas = []

const addTarefa = document.querySelector('#addTarefa')
const campoTarefa = document.querySelector('#campoTarefa')
const listaTarefa = document.querySelector(".listaTarefa") 
// após o click do botão cria a tarefa
addTarefa.addEventListener('click', (evento) =>{
    evento.preventDefault()
    if (campoTarefa.value != ''){
        tarefas.push({text: campoTarefa, concluido: false})
        alert("tarefa criada com sucesso!")
        campoTarefa.value = ''
        // mostrarTarefas()
    } else {
        console.log("está vazio")
    }
})
