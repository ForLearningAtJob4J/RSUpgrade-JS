const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const dataContainer = document.querySelector('#data-container');

document.addEventListener('DOMContentLoaded', () => renderAlbums())

async function renderAlbums() {
    setLoaderVisibility(true);
    try {
        const response = await fetch(`${ALBUMS_URL}`);
        (await response.json()).forEach(el => addAlbum(el.title));
    } catch (error) {
        showError();
    } finally {
        setLoaderVisibility(false);
    }
}

function addAlbum(title) {
    const newLi = document.createElement('li');
    newLi.textContent = title;
    dataContainer.append(newLi);
}

function setLoaderVisibility(show) {
    const loader = document.querySelector('#loader');
    if (show) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '')
    }
}

function showError() {
    const dc = document.querySelector('#data-container');
    const errorText = document.createElement('span');
    errorText.textContent = 'Произошла ошибка в получении данных об альбомах...';
    dc.append(errorText);
}