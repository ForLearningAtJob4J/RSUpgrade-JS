import { getRandomColor } from "./utils";

// файл /src/app.js
export default function initApp() {
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Изменить цвет страницы';
    button.onclick = (e) => { document.body.style.backgroundColor = getRandomColor() };
    document.body.append(button);
}