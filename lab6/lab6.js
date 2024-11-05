 // Обробник події після завантаження DOM
 document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetchUsersButton').addEventListener('click', fetchUsers);
});

// Функція для отримання користувачів
function fetchUsers() {
    fetch('data.json') // Отримуємо 10 користувачів
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const users = data.results; // Отримуємо масив користувачів
            const usersContainer = document.getElementById('usersContainer');
            usersContainer.innerHTML = ''; // Очищуємо контейнер перед додаванням нових даних

            // Додаємо інформацію про кожного користувача в контейнер
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user-info');

                userDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="User Picture">
                    <p><strong>Cell:</strong> ${user.cell}</p>
                    <p><strong>City:</strong> ${user.location.city}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Coordinates:</strong> (${user.location.coordinates.latitude}, ${user.location.coordinates.longitude})</p>
                `;
                usersContainer.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}