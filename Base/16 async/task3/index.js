document.addEventListener('DOMContentLoaded', () => {
    getFastestLoadedPhoto([60, 12, 55]);
});

function getFastestLoadedPhoto(ids) {
    setLoaderVisibility(true);

    Promise.race(ids.map(id =>
        fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => data.photo)
            .catch(error => console.log(error))))
        .then(fastest => renderPhoto(fastest))
        .catch(error => console.log(error))
        .finally(setLoaderVisibility(false));
}

function setLoaderVisibility(show) {
    const loader = document.querySelector('#loader');
    if (show) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '')
    }
}

function renderPhoto(photo) {
    const dataContainer = document.querySelector('#data-container');

    const li = document.createElement("li");
    li.innerHTML = `
        <li class="photo-item">
        <img class="photo-item__image" src="${photo ? photo.url : 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/27d/4c0/107/27d4c01077eda339e3ddf69ae8c0827c.jpg'}">
        <h3 class="photo-item__title">
            accusamus beatae ad facilis cum similique qui sunt
        </h3>
        </li>
    `;

    dataContainer.append(li);
}