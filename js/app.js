Chart.defaults.color = '#000';
Chart.defaults.font.family = '"Rethink Sans", serif';

const chartColor = '#C6C7D9';
const chartBackgroundColor = 'rgba(116, 119, 191, 0.2)';
const gridColor = 'rgba(255, 255, 255, 0.4)';

const trafficCanvas = document.getElementById('traffic');
const dailyTraffic = document.getElementById('dailyTraffic');
const mobileTraffic = document.getElementById('mobileTraffic');

const hourlyLable = [ "00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00" ];
const hourlyData = [ 2186, 1802, 609, 1131, 1684, 761, 2146, 2275, 1657, 1982, 822, 1439, 1545, 1432, 1869, 2004, 863, 337, 341, 1618, 616, 2300, 1459, 812 ];

const dailyLable = ["00-03", "03-06", "06-09", "09-12", "12-15", "15-18", "18-21", "21-24"];
const dailyData = [2091, 658, 1263, 1653, 1678, 609, 415, 985];

const weeklyLable = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const weeklyData = [700, 1250, 1000, 2000, 1500, 1700, 1225, 1800, 2300, 1500, 2500];

const monthlyLable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const monthlyData = [1176, 418, 1692, 1490, 1371, 1470, 205, 1843, 358, 1032, 900, 1291, 1304, 482, 1676, 1896, 1385, 1949, 48, 2226, 1011, 779, 1622, 1327, 1438, 1852, 1724, 897, 1940, 951];

const trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: {
    labels: hourlyLable,
    datasets: [{
      data: hourlyData,
      borderWidth: 1,
      borderColor: chartColor,
      backgroundColor: chartBackgroundColor,
    }]
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false,
    elements: {
      line: {
        fill: true,
        tension: 0.4,
      },
      point: {
        pointRadius: 5,
      }
    },
    plugins: {
      legend: { 
        display: false,
      }
    },
    scales: {
      x: { // Standardinställningar för x-axeln
        ticks: {
          beginAtZero: true,
        }
      },
      y: { // Standardinställningar för y-axeln
        ticks: {
          beginAtZero: true,
        }
      }
    }
  }
});



// Doughnut Mobile Traffic
new Chart(mobileTraffic, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
      data: [60, 20, 20],
      borderWidth: 0,
      backgroundColor: [
        '#7477BF',
        '#81C98F',
        '#51B6C8'
      ],
    }]
  },
  options: {
    responsive: true, 
  maintenanceAspectRatio: false,
    elements: {
      bar: {
        borderColor: chartColor,
        backgroundColor: chartBackgroundColor,
      },
    },
      plugins: {
          legend:{ 
            position: 'right',
            }
      },
      scales: {
          y: {
              beginAtZero: true,
              display: false,
                grid: {
                    display: false,
                },
      }
    }
  }
});


function updateConfigByMutating(arr) {
  traffic.data.datasets[0].data = arr.map(row => row.count);
  traffic.update();
}





const trafficBtnGroup = document.getElementById('trafficBtnGroup');

// Event listner to the alert icon that remvoes message
const alertBtn = document.getElementById('alertBtn').addEventListener('click', (e) => {
    const alertMessage = document.getElementById('alertMessage').style.display = 'none';
});


trafficBtnGroup.addEventListener('click', (e) => {

    if (e.target.textContent === "Hourly") {
        updateChartData(trafficChart, hourlyLable, hourlyData)

    } else if (e.target.textContent === "Daily") {
        updateChartData(trafficChart, dailyLable, dailyData)

    } else if (e.target.textContent === "Weekly") {
        updateChartData(trafficChart, weeklyLable, weeklyData)
        
    } else if (e.target.textContent === "Monthly") {
        updateChartData(trafficChart, monthlyLable, monthlyData)
    }
});


function updateChartData(chart, newLabels, newData) {
    chart.data.labels = newLabels;
  
    if (chart.data.datasets.length > 0) {
      chart.data.datasets[0].data = newData;
    }

    chart.update();
  }