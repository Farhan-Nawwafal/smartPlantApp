// MENAMBAHKAN DATE DI TAG P
const spanDate = document.getElementById('dateContent');
const date = new Date().toLocaleDateString();
console.log(date);
spanDate.textContent = date;