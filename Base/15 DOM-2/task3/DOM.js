export const tasksDOMRoot = document.querySelector('.tasks-list');

function createElementWithClass(owner, tagName, className) {
    const newElement = owner.createElement(tagName);
    newElement.className = className;
    return newElement;
}

export function addTaskToDOM(task) {
    const checkboxInput = createElementWithClass(document, 'input', 'checkbox-form__checkbox');
    checkboxInput.type = 'checkbox';
    checkboxInput.id = 'task-' + task.id;
    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = 'task-' + task.id;

    const checkboxForm = createElementWithClass(document, 'form', 'checkbox-form');
    checkboxForm.appendChild(checkboxInput);
    checkboxForm.appendChild(checkboxLabel);

    const taskText = createElementWithClass(document, 'span', 'task-item__text');
    taskText.textContent = task.text;

    const mainContent = createElementWithClass(document, 'div', 'task-item__main-content');
    mainContent.appendChild(checkboxForm);
    mainContent.appendChild(taskText);

    const deleteButton = createElementWithClass(document, 'button', 'task-item__delete-button default-button delete-button');
    deleteButton.textContent = 'Удалить';

    const taskItem = createElementWithClass(document, 'div', 'task-item');
    taskItem.setAttribute('data-task-id', task.id);

    const mainContainer = createElementWithClass(document, 'div', 'task-item__main-container');
    mainContainer.appendChild(mainContent);
    mainContainer.appendChild(deleteButton);

    taskItem.appendChild(mainContainer);
    tasksDOMRoot.appendChild(taskItem);
}

export function deleteTasksByIdsFromDOM(tasksIds) {
    console.log(tasksIds);
    tasksIds.forEach(taskId => document.querySelector(`[data-task-id="${taskId}"]`).remove());
}

export function addModalWindowToDOM() {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="modal-overlay modal-overlay_hidden">
            <div class="delete-modal">
                <h3 class="delete-modal__question">
                    Вы действительно хотите удалить эту задачу?
                </h3>
                <div class="delete-modal__buttons">
                    <button class="delete-modal__button delete-modal__cancel-button">
                        Отмена
                    </button>
                    <button class="delete-modal__button delete-modal__confirm-button">
                        Удалить
                    </button>
                </div>
            </div>
        </div>`);
}