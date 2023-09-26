const user = {
    name: 'Jane Doe',
    age: 25,
    email: 'jane@mail.com',
    favFilms: ['Spencer', 'Ice Age 3', 'Se7en', 'Inception', 'SAW'],
}

function createUser(user) {
    document.getElementById('username').textContent = user.name;
    document.getElementById('age').textContent = user.age;
    document.getElementById('mail').textContent = user.email;

    const ul = document.getElementById('fav-films');
    ul.innerHTML = ''; // Limpiar la lista actual

    user.favFilms.forEach((film) => {
        const li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);
    });
}

createUser(user);

// Eventos

const inputName = document.getElementById('name');
const userName = document.getElementById('username');
const profileBtn = document.getElementById('ProfileBtn');

profileBtn.addEventListener('click', () => {
    user.name = inputName.value; // Actualizar el nombre en el objeto user
    createUser(user); // Volver a crear la lista de películas con el nombre actualizado
});
