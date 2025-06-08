import { tasks, addNewTask } from './task.js';
import { tasksRoot, addTaskToDOM } from './DOM.js';

document.addEventListener('DOMContentLoaded',
    () => {
        tasksRoot.replaceChildren();
        tasks.forEach(e => addTaskToDOM(e));
        document.querySelector('.create-task-block').addEventListener('submit', submitCreateTask);
    }
);

function submitCreateTask(event) {
    event.preventDefault();
    addTaskToDOM(
        addNewTask(document.querySelector('.create-task-block__input').value)
    );
}