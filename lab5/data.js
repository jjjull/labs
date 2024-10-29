//1 завдання
function validateForm() {
    // Отримання значень полів
    const fullName = document.getElementById("fullName");
    const group = document.getElementById("group");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const email = document.getElementById("email");

    // Скидання класу error для всіх полів
    fullName.classList.remove("error");
    group.classList.remove("error");
    phone.classList.remove("error");
    address.classList.remove("error");
    email.classList.remove("error");

    // Валідація ПІБ (мінімум 3 символи)
    if (fullName.value.trim().length < 3) {
        alert('Заповніть поле "ПІБ" (мінімум 3 символи)');
        fullName.classList.add("error");
        return false;
    }

    // Валідація Групи (мінімум 4 символи)
    if (group.value.trim().length < 4) {
        alert('Заповніть поле "Група" (мінімум 4 символи)');
        group.classList.add("error");
        return false;
    }

    // Валідація Телефону (мінімум 12 символів, формат українського номера)
    if (phone.value.trim().length < 12) {
        alert('Поле "Телефон" повинно містити мінімум 12 символів');
        phone.classList.add("error");
        return false;
    }
    if (!/^(\+?380\d{9}|0\d{9})$/.test(phone.value.trim())) {
        alert('Телефон вказано невірно (допустимі формати: +380XXXXXXXXX або 0XXXXXXXXX)');
        phone.classList.add("error");
        return false;
    }

    // Валідація Email (правильний формат електронної пошти)
    if (email.value.trim().length < 6) {
        alert('Дуже малий "E-Mail"');
        email.classList.add("error");
        return false;
    }
    if (!/^[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())) {
        alert('Введіть правильний E-Mail');
        email.classList.add("error");
        return false;
    }

    // Виведення введених даних у блок результатів
    document.getElementById("resultFullName").innerText = `ПІБ: ${fullName.value.trim()}`;
    document.getElementById("resultGroup").innerText = `Група: ${group.value.trim()}`;
    document.getElementById("resultPhone").innerText = `Телефон: ${phone.value.trim()}`;
    document.getElementById("resultAddress").innerText = `Адреса: ${address.value.trim()}`;
    document.getElementById("resultEmail").innerText = `Пошта: ${email.value.trim()}`;

    alert("Дані успішно введені!");
    return true;
}




//2 завдання
const colorPicker = document.getElementById("colorPicker");
const table = document.getElementById("myTable");

table.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "TD" && event.target.textContent === "10") {
        event.target.style.backgroundColor = getRandomColor();
    }
});

table.addEventListener("click", (event) => {
    if (event.target.tagName === "TD" && event.target.textContent === "10") {
        event.target.style.backgroundColor = colorPicker.value;
    }
});

table.addEventListener("dblclick", (event) => {
    if (event.target.tagName === "TD" && event.target.textContent === "10") {
        const rowIndex = event.target.parentElement.rowIndex;
        const startIndex = event.target.cellIndex;
        changeRowColors(rowIndex, startIndex);
    }
});


function changeRowColors(rowIndex, startIndex) {
    if (rowIndex < table.rows.length) {
        const cells = table.rows[rowIndex].cells;
        for (let i = startIndex; i < cells.length; i += 2) {
            cells[i].style.backgroundColor = getRandomColor();
        }
    }
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
