document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.querySelector('#data-container');
    const loader = document.querySelector('#loader');

    setLoaderVisibility(true, loader);
    setTimeout(() => { // для имитации долгой загрузки
        fetch('https://jsonplaceholder.typicode.com/users'
        ).then(response => {
            if (!response.ok) {
                throw new Error("Ошибка запроса");
            }
            return response.json();
        }).then((users) => { renderListItems(users, dataContainer) }
        ).catch(error => console.error(error)
        ).finally(setLoaderVisibility(false, loader));
    }, 1500);
});

function setLoaderVisibility(show, loader) {
    if (show) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '')
    }
}

function renderListItems(users, elementToAppend) {
    console.log(users);

    for (const user of users) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${user.username}</a>`;

        elementToAppend.append(li);
    }
}