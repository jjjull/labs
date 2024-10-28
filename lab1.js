//функція для збільшення зображення
function increaseImage() {
    const img = document.getElementById('vienna-image');
    if (img) {
        img.style.width = `${img.offsetWidth * 1.2}px`;
        img.style.height = `${img.offsetHeight * 1.2}px`;
    }
}

//функція для зменшення зображення
function decreaseImage() {
    const img = document.getElementById('vienna-image');
    if (img) {
        img.style.width = `${img.offsetWidth * 0.8}px`;
        img.style.height = `${img.offsetHeight * 0.8}px`;
    }
}

//функція для видалення зображення
function removeImage() {
    const img = document.getElementById('vienna-image');
    if (img) {
        img.remove();
    }
}

//функція для додавання зображення
function addImage() {
    const imageContainer = document.getElementById('image-container');
    const img = document.getElementById('vienna-image');

    if (!imageContainer) {
        console.error("Контейнер для зображення не знайдено");
        return;
    }

    if (!img) {
        const newImg = document.createElement('img');
        newImg.id = 'vienna-image';
        newImg.src = './img/Vienna-собор-Святого-Стефана-1024x667.jpg';
        newImg.alt = 'Wien';
        newImg.style.width = '600px';
        newImg.style.height = '400px';
        imageContainer.appendChild(newImg);
        alert("Зображення додано до контейнера");
    } else {
        alert("Зображення вже існує");
    }
}


// JavaScript код для зміни кольору елементів
let firstClick = true; // Перевірка на перший клік
let lastClickedElement = null; // Останній клікнутий елемент

function changeColors(element) {
    // Випадкові кольори
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const randomTextColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    element.style.backgroundColor = randomColor;
    element.style.color = randomTextColor;
}

// Додаємо обробник кліку на перший елемент (заголовок)
const header = document.getElementById('header');
header.addEventListener('click', () => {
    changeColors(header); // Змінюємо кольори
    firstClick = false; // Змінюємо статус на "клікнули"
});

// Додаємо обробник кліку на другий елемент (дата народження)
const birthdate = document.querySelector('#birthdate');
birthdate.addEventListener('click', () => {
    if (firstClick) {
        changeColors(birthdate); // Змінюємо кольори для другого елемента
    } else {
        const secondElement = document.querySelector('#birthdate');
        changeColors(secondElement); // Змінюємо кольори з використанням querySelector
    }
});