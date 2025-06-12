import { tasks, addNewTask, findTaskByText } from './task.js';
import { tasksDOMRoot, addTaskToDOM } from './DOM.js';

document.addEventListener('DOMContentLoaded',
    () => {
        tasksDOMRoot.replaceChildren();
        tasks.forEach(e => addTaskToDOM(e));
        document.querySelector('.create-task-block').addEventListener('submit', submitCreateTask);
        document.querySelector('.create-task-block__input').addEventListener('keypress', () => document.querySelector('.error-message-block')?.remove());
    }
);

function submitCreateTask(event) {
    event.preventDefault();
    const v = validate(document.querySelector('.create-task-block__input').value);

    document.querySelector('.error-message-block')?.remove();

    if (v) {
        showError(v);
        return;
    }

    addTaskToDOM(
        addNewTask(document.querySelector('.create-task-block__input').value)
    );
}

function validate(text) {
    if (!text) {
        return 'Название задачи не должно быть пустым';
    }

    if (findTaskByText(text)) {
        return 'Задача с таким названием уже существует.';
    }

    return null;
}

function showError(text) {
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message-block';
    errorSpan.textContent = text;

    document.querySelector('.create-task-block').append(errorSpan);
}