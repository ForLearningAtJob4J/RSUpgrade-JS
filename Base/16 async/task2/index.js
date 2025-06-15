document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { // для имитации долгой загрузки
        getUsersByIds([5, 6, 2, 1]);
    }, 1500);
});

function getUsersByIds(iDs) {
    const loader = document.querySelector('#loader');
    setLoaderVisibility(true, loader);

    Promise.all(
        iDs.map(e => fetch(`https://jsonplaceholder.typicode.com/users/${e}`
        )))
        .then(responses => {
            const results = responses.map(response => {
                if (!response.ok)
                    throw new Error('Ошибка запроса', response)
                return response.json();
            });
            return Promise.all(results);
        })
        .then(users => renderListItems(users))
        .catch(error => console.log(error))
        .finally(setLoaderVisibility(false, loader));
}

function setLoaderVisibility(show, loader) {
    if (show) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '')
    }
}

function renderListItems(users) {
    const dataContainer = document.querySelector('#data-container');

    for (const user of users) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${user.username}</a>`;

        dataContainer.append(li);
    }
}