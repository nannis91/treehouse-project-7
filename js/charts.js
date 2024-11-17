Chart.defaults.color = '#000';
Chart.defaults.font.family = '"Rethink Sans", serif';

const chartColor = '#C6C7D9';
const chartBackgroundColor = 'rgba(116, 119, 191, 0.2)';
const gridColor = 'rgba(255, 255, 255, 0.4)';

const traffic = document.getElementById('traffic');
const dailyTraffic = document.getElementById('dailyTraffic');
const mobileTraffic = document.getElementById('mobileTraffic');


  // Mockdata för Traffic Line
  (async function() {
    const trafficData = [
      { year: "16-22", count: 700 },
      { year: "23-29", count: 1250 },
      { year: "30-5", count: 1000 },
      { year: "6-12", count: 2000 },
      { year: "13-19", count: 1500 },
      { year: "20-26", count: 1700 },
      { year: "27-3", count: 1225 },
      { year: "4-10", count: 1800 },
      { year: "11-17", count: 2300 },
      { year: "18-24", count: 1500 },
      { year: "25-31", count: 2500 },
    ];
  
    
    // Line chart for Traffic
    new Chart(traffic, {
        type: 'line',
        options: {
          elements: {
            line: {
              fill: true,
              tension: 0.4,
              borderColor: chartColor,
              backgroundColor: chartBackgroundColor,
            },
            point: {
              backgroundColor: chartBackgroundColor,
              pointBorderColor: chartColor,
              pointRadius: 5,
            }
          },
  
          plugins: {
            legend:{ 
                display: false,
              }
            }
          },
  
        data: {
          labels: trafficData.map(row => row.year),
          datasets: [
            { 
              label: 'Traffic',
              data: trafficData.map(row => row.count)
            }
          ]
        },
        scales: {
          y: {
            grid: {
              color: gridColor,
            },
          },
        },
      }
    );
  })();

  // Chart for Daily Traffic
new Chart(dailyTraffic, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      data: [70, 120, 175, 125, 200, 225, 100 ],
      borderWidth: 0
    }]
  },
  options: {
  responsive: true, 
  maintenanceAspectRatio: false,
    elements: {
      bar: {

        backgroundColor: '#7477BF',
      },
    },
      plugins: {
          legend:{ 
              display: false,
            }
      },
      scales: {
          y: {
              beginAtZero: true
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

 