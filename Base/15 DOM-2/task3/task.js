export let tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: true,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

export function addNewTask(text) {
    const newTask = { id: '' + Date.now(), completed: false, text };
    tasks.push(newTask);
    return newTask;
}

export function deleteTaskById(id) {
    const idx = tasks.findIndex((value) => value.id === id);
    if (idx == -1)
        return null;

    return tasks.splice(idx, 1);
}

export function findTaskByText(text) {
    return tasks.some((t) => t.text === text);
}

