// MENAMBAHKAN DATE DI TAG P
const spanDate = document.getElementById('dateContent');
const date = new Date();
const getDate = date.getDate();
const getMonth = date.getMonth() + 1;
const getYear = date.getFullYear();

const getFullDate = `${getDate}/${getMonth}/${getYear}`; // Format penulisan tanggal di Indonesia
spanDate.textContent = getFullDate;