import { tasks, addNewTask, findTaskByText, deleteTaskById } from './task.js';
import { tasksDOMRoot, addModalWindowToDOM, addTaskToDOM, deleteTasksByIdsFromDOM } from './DOM.js';

let taskIdToDelete = null;
document.addEventListener('DOMContentLoaded',
    () => {
        tasksDOMRoot.replaceChildren();
        tasks.forEach(e => addTaskToDOM(e));

        addModalWindowToDOM();

        addDeleteButtonHandler();
        addModalDialogButtonHandler();
        document.querySelector('.create-task-block').addEventListener('submit', submitCreateTask);
        document.querySelector('.create-task-block__input').addEventListener('input', () => document.querySelector('.error-message-block')?.remove());
    }
);

/**** я бы, наверное, все повесил на body, но в задании написано, что эти кнопки надо повесить на .tasks-list */
function addDeleteButtonHandler() {
    tasksDOMRoot.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            taskIdToDelete = e.target.closest('.task-item').dataset.taskId;
            console.log('delete-button', taskIdToDelete);
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
            console.log('confirm-button', taskIdToDelete);

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