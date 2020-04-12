const endpoint = 'https://www.datos.gov.co/resource/bhdv-kuyy.json';

const municipios = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => municipios.push(...data));

function findMatches(wordToMatch, municipios) {
    return municipios.filter(place => {
        //Aqui se debe comparar si el municipio es el que se esta buscando
        const regex = new RegExp(wordToMatch, 'gi');
        return place.municipio_notificaciones.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, municipios);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const placeName = place.municipio_notificaciones.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${placeName}, ${place.departamento}</span>
                <span class="population">${place.nombre_comercial}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);