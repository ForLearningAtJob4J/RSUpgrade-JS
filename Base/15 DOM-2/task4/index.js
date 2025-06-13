import { tasks, addNewTask, findTaskByText, deleteTaskById } from './task.js';
import { tasksDOMRoot, addModalWindowToDOM, addTaskToDOM, deleteTasksByIdsFromDOM } from './DOM.js';

let taskIdToDelete = null;
let themeIsLight = true;

document.addEventListener('DOMContentLoaded',
    () => {
        const initialBackground = document.body.style.background;
        tasksDOMRoot.replaceChildren();
        tasks.forEach(e => addTaskToDOM(e));

        addModalWindowToDOM();

        addDeleteButtonHandler();
        addModalDialogButtonHandler();
        document.querySelector('.create-task-block').addEventListener('submit', submitCreateTask);
        document.querySelector('.create-task-block__input').addEventListener('input', () => document.querySelector('.error-message-block')?.remove());
        document.addEventListener('keydown', documentKeyDownHandler);
    }
);

function documentKeyDownHandler(e) {
    //console.log(e);
    if (e.key === 'Tab') {
        toggleTheme();
        e.preventDefault();
    }
}

function toggleTheme() {
    themeIsLight = !themeIsLight;

    if (themeIsLight) {
        document.body.style.background = 'initial';
        document.querySelectorAll('.task-item').forEach(e => e.style.color = 'initial');
        document.querySelectorAll('button').forEach(e => e.style.border = 'none');
    } else {
        document.body.style.background = ' #24292E';
        document.querySelectorAll('.task-item').forEach(e => e.style.color = ' #ffffff');
        document.querySelectorAll('button').forEach(e => e.style.border = '1px solid #ffffff');
    }
}

/**** я бы, наверное, все повесил на body, но в задании написано, что эти кнопки надо повесить на .tasks-list */
function addDeleteButtonHandler() {
    tasksDOMRoot.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            taskIdToDelete = e.target.closest('.task-item').dataset.taskId;
            showModal();
        }
    });
}

function addModalDialogButtonHandler() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-modal__cancel-button')) {
            closeModal();
        }

        if (e.target.classList.contains('delete-modal__confirm-button')) {
            deleteTasksByIdsFromDOM(deleteTaskById(taskIdToDelete).map(t => t.id));
            closeModal();
        }
    });
}

function showModal() {
    document.querySelector('.modal-overlay').classList.remove('modal-overlay_hidden');
}

function closeModal() {
    document.querySelector('.modal-overlay').classList.add('modal-overlay_hidden');
}

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