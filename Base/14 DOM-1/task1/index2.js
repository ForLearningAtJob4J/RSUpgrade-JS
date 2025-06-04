/*<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>*/

const form = document.createElement('form');
form.className = 'create-user-form';

const nameLabel = document.createElement('label');
nameLabel.textContent = 'Имя';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'userName';
nameInput.placeholder = 'Введите ваше имя';
nameLabel.append(nameInput);
form.append(nameLabel);

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Пароль';
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.name = 'password';
passwordInput.placeholder = 'Придумайте Пароль';
passwordLabel.append(passwordInput);
form.append(passwordLabel);

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Подтвердить';
form.append(submitButton);

document.body.append(form);