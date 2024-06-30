
const tarefas = [
    {
        id: 1,
        description: 'Estudar',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Arrumar quarto',
        isCompleted: true
    }
]

//transforma p JSON
const tarefasJSON = JSON.stringify(tarefas);

//transforma p lista
const tarefasList = JSON.parse(tarefasJSON);

console.log(tarefasJSON);
console.log(tarefasList);