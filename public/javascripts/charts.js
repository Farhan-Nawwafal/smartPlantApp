
let currentChart = null;
let parameter = null;

// Mengambil elemen button chart
const suhuUdara = document.getElementById('b-suhu-udara');
const kelembapanTanah = document.getElementById('b-kelembapan-tanah');
const totalPenyiraman = document.getElementById('b-total-penyiraman');
const kedalamanAir = document.getElementById('b-kedalaman-air')
const titleChart = document.getElementById('titleChart');
const canvasChart = document.getElementById('canvas-chart');

// Fungsi untuk membuat grafik
const createChart = (ctx, param) => {
  if (currentChart) currentChart.destroy();

  if(parameter) parameter = null;

  currentChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
        datasets: [{
            label: `Parameter ${param}`,
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }],
    }, 
    });
};

// Fungsi untuk update chart
async function updateChart() {
  // Create a chart
  const ctx = document.getElementById("canvas-chart").getContext("2d");
  switch (parameter) {
    case "Suhu Udara":
      createChart(ctx, parameter);
    break;
      
    case "Kelembapan Tanah":
      createChart(ctx, parameter);
    break;
        
    case "Total Penyiraman":
      createChart(ctx, parameter);
    break;
        
  };
}


// Memberi 'event/trigger' ketika tombol diklik
suhuUdara.addEventListener('click', () => {
  parameter = suhuUdara.value;
  titleChart.textContent = parameter;
  // canvasChart.style.visibility = 'visible';

  suhuUdara.classList.replace('btn-light', 'btn-dark');
  suhuUdara.classList.replace('text-black', 'text-light');
  
  kelembapanTanah.classList.replace('btn-dark', 'btn-light');
  kelembapanTanah.classList.replace('text-light', 'text-black');
  
  totalPenyiraman.classList.replace('btn-dark', 'btn-light');
  totalPenyiraman.classList.replace('text-light', 'text-black');

  updateChart();
});

kelembapanTanah.addEventListener('click', () => {
  parameter = kelembapanTanah.value;
  titleChart.textContent = parameter;
  // canvasChart.style.visibility = 'visible';

  suhuUdara.classList.replace('btn-dark', 'btn-light');
  suhuUdara.classList.replace('text-light', 'text-black');
            
  kelembapanTanah.classList.replace('btn-light', 'btn-dark');
  kelembapanTanah.classList.replace('text-black', 'text-light');
  
  totalPenyiraman.classList.replace('btn-dark', 'btn-light');
  totalPenyiraman.classList.replace('text-light', 'text-black');

  updateChart();
});

totalPenyiraman.addEventListener('click', () => {
  parameter = totalPenyiraman.value;
  titleChart.textContent = parameter;
  // canvasChart.style.visibility = 'visible';

  suhuUdara.classList.replace('btn-dark', 'btn-light');
  suhuUdara.classList.replace('text-light', 'text-black');
  
  kelembapanTanah.classList.replace('btn-dark', 'btn-light');
  kelembapanTanah.classList.replace('text-light', 'text-black');
  
  totalPenyiraman.classList.replace('btn-light', 'btn-dark');
  totalPenyiraman.classList.replace('text-black', 'text-light');

  updateChart();
});
