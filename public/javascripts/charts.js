let currentChart = null;
let parameter = null;

// Mengambil elemen button chart
const suhuUdara = document.getElementById("b-suhu-udara");
const kelembapanTanah = document.getElementById("b-kelembapan-tanah");
const totalPenyiraman = document.getElementById("b-total-penyiraman");
const kedalamanAir = document.getElementById("b-kedalaman-air");
const titleChart = document.getElementById("titleChart");
const canvasChart = document.getElementById("canvas-chart");
const buttonShowBy = document.getElementById('dropdown');


// Fungsi untuk membuat grafik
const createChart = (ctx, parameter, data, labels) => {
  if (currentChart) currentChart.destroy();

  if (!parameter) parameter = null;

  currentChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: `Parameter ${parameter}`,
          data: data,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
  });
};

// Fungsi untuk update chart
async function updateChart(parameter) {
  // Create a chart
  const ctx = document.getElementById("canvas-chart").getContext("2d");
  const labels = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'a't",
    "Sabtu",
    "Minggu",
  ];
  let data;
  switch (parameter) {
    case "Suhu Udara":
      data = [29.5, 30.1, 28.7, 29.3, 30.5, 27.8, 28.9];
      createChart(ctx, parameter, data, labels);
      break;

    case "Kelembapan Tanah":
      data = [765, 802, 710, 745, 815, 690, 720];
      createChart(ctx, parameter, data, labels);
      break;

    case "Total Penyiraman":
      data = [7, 10, 5, 8, 6, 9, 4];
      createChart(ctx, parameter, data, labels);
      break;
  }
}

// Event listener untuk setiap tombol
const buttons = [suhuUdara, kelembapanTanah, totalPenyiraman];
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    parameter = button.getAttribute("value");
    titleChart.textContent = parameter;

    buttons.forEach((btn) => btn.classList.replace("btn-dark", "btn-light"));
    buttons.forEach((btn) => btn.classList.replace("text-light", "text-black"));
    button.classList.replace("btn-light", "btn-dark");
    button.classList.replace("text-black", "text-light");

    updateChart(parameter);
  });
});

// Memberi 'event/trigger' ketika tombol diklik
// suhuUdara.addEventListener("click", () => {
//   parameter = suhuUdara.value;
//   titleChart.textContent = parameter;
//   // canvasChart.style.visibility = 'visible';

//   suhuUdara.classList.replace("btn-light", "btn-dark");
//   suhuUdara.classList.replace("text-black", "text-light");

//   kelembapanTanah.classList.replace("btn-dark", "btn-light");
//   kelembapanTanah.classList.replace("text-light", "text-black");

//   totalPenyiraman.classList.replace("btn-dark", "btn-light");
//   totalPenyiraman.classList.replace("text-light", "text-black");

//   updateChart();
// });

// kelembapanTanah.addEventListener("click", () => {
//   parameter = kelembapanTanah.value;
//   titleChart.textContent = parameter;
//   // canvasChart.style.visibility = 'visible';

//   suhuUdara.classList.replace("btn-dark", "btn-light");
//   suhuUdara.classList.replace("text-light", "text-black");

//   kelembapanTanah.classList.replace("btn-light", "btn-dark");
//   kelembapanTanah.classList.replace("text-black", "text-light");

//   totalPenyiraman.classList.replace("btn-dark", "btn-light");
//   totalPenyiraman.classList.replace("text-light", "text-black");

//   updateChart();
// });

// totalPenyiraman.addEventListener("click", () => {
//   parameter = totalPenyiraman.value;
//   titleChart.textContent = parameter;
//   // canvasChart.style.visibility = 'visible';

//   suhuUdara.classList.replace("btn-dark", "btn-light");
//   suhuUdara.classList.replace("text-light", "text-black");

//   kelembapanTanah.classList.replace("btn-dark", "btn-light");
//   kelembapanTanah.classList.replace("text-light", "text-black");

//   totalPenyiraman.classList.replace("btn-light", "btn-dark");
//   totalPenyiraman.classList.replace("text-black", "text-light");

//   updateChart();
// });

// Fungsi fetchData yang sudah disesuaikan
// async function fetchData(parameter) {
//   try {
//     // Kirim request ke endpoint API yang sudah kamu buat
//     const response = await fetch(`/api/data?parameter=${parameter}`); // endpoint sesuai dengan routes yang kamu buat
//     if (!response.ok) {
//       throw new Error('Gagal mengambil data');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// }

// const createChart = (ctx, parameter, labels, values) => {
//   if (currentChart) currentChart.destroy();

//   currentChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: labels,
//         datasets: [{
//             label: `Parameter ${parameter}`, // Pastikan ini sesuai dengan parameter yang dipilih
//             data: values,
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1
//         }],
//     },
//   });
// };

// // Fungsi untuk update chart
// const updateChart = async (parameter) => {
//   if (!parameter) return;

//   const data = await fetchData(parameter);

//   if (data) {
//     const labels = data.map((entry) => entry.tanggal);
//     const values = data.map((entry) => entry.nilai);
//     const ctx = document.getElementById("canvas-chart").getContext("2d");
//     createChart(ctx, parameter, labels, values);
//   }
// };
