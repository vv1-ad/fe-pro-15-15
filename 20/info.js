async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = users
        .map(user => `<p>${user.name} (${user.email})</p>`)
        .join('');
}

async function fetchPlanets() {
    const response = await fetch('https://swapi.dev/api/planets/');
    const data = await response.json();
    const planetsContainer = document.getElementById('planets');
    planetsContainer.innerHTML = data.results
        .map(planet => {
            const links = planet.residents
                .map(url => `<a href="${url}" target="_blank">Resident Link</a>`)
                .join(', ');
            return `<div><h3>${planet.name}</h3><p>Climate: ${planet.climate}</p><p>${links}</p></div>`;
        })
        .join('');
}

async function fetchPlanetDetails(planetId) {
    const response = await fetch(`https://swapi.dev/api/planets/${planetId}/`);
    const planet = await response.json();
    console.log(`Name: ${planet.name}, Climate: ${planet.climate}`);
}

document.getElementById('fetchPlanets').addEventListener('click', fetchPlanets);

fetchUsers();
