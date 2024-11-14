Chart.defaults.color = '#fff';
Chart.defaults.font.family = '"Rethink Sans", serif';

const chartColor = '#6F4687';
const chartBackgroundColor = 'rgba(111, 70, 135, 0.06)';
const gridColor = 'rgba(255, 255, 255, 0.4)';

const traffic = document.getElementById('traffic');
const dailyTraffic = document.getElementById('dailyTraffic');
const mobileTraffic = document.getElementById('mobileTraffic');

  
// Chart for Daily Traffic
new Chart(dailyTraffic, {
    type: 'bar',
    data: {
      labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      datasets: [{
        data: [70, 120, 175, 125, 200, 225, 100 ],
        borderWidth: 2
      }]
    },
    options: {
      elements: {
        bar: {
          borderColor: chartColor,
          backgroundColor: chartBackgroundColor,
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
              backgroundColor: '#8A57A8',
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

// Pie Daily Traffic
new Chart(mobileTraffic, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
      data: [60, 20, 20],
      borderWidth: 2
    }]
  },
  options: {
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


