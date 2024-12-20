const trafficBtnGroup = document.getElementById('trafficBtnGroup');
const messageForm = document.getElementById('messageForm');


// Colors and utilites for charts
Chart.defaults.color = '#000';
Chart.defaults.font.family = '"Rethink Sans", serif';
const chartColor = '#C6C7D9';
const chartBackgroundColor = 'rgba(116, 119, 191, 0.2)';
const gridColor = 'rgba(255, 255, 255, 0.4)';

// Get canvas for Charts
const trafficCanvas = document.getElementById('traffic');
const dailyTraffic = document.getElementById('dailyTraffic');
const mobileTraffic = document.getElementById('mobileTraffic');

// Mockdata for traffic chart
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


function updateConfigByMutating(arr) {
  traffic.data.datasets[0].data = arr.map(row => row.count);
  traffic.update();
}


// Event listner to the alert icon that remvoes message
const alertBtn = document.getElementById('alertBtn').addEventListener('click', (e) => {
    const alertMessage = document.getElementById('alertMessage').style.display = 'none';
});

// Event listner to the button group for traffic chart
trafficBtnGroup.addEventListener('click', (e) => {

    const children = trafficBtnGroup.children;
    
    for (let i = 0; i < children.length; i++) {
        children[i].className = 'btn-tertiary'
    }

    if (e.target.textContent === "Hourly") {
        updateChartData(trafficChart, hourlyLable, hourlyData);
       e.target.className = 'btn-tertiaryActive';

    } else if (e.target.textContent === "Daily") {
        updateChartData(trafficChart, dailyLable, dailyData);
        e.target.className = 'btn-tertiaryActive';

    } else if (e.target.textContent === "Weekly") {
        updateChartData(trafficChart, weeklyLable, weeklyData);
         e.target.className = 'btn-tertiaryActive';
        
    } else if (e.target.textContent === "Monthly") {
        updateChartData(trafficChart, monthlyLable, monthlyData);
         e.target.className = 'btn-tertiaryActive';
    }
});


// Function to call when you want to update charts
function updateChartData(chart, newLabels, newData) {
    chart.data.labels = newLabels;
  
    if (chart.data.datasets.length > 0) {
      chart.data.datasets[0].data = newData;
    }

    chart.update();
  }


// When the user clicks on the button, toggle between hiding and showing the dropdown content
function notificationMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Funcionallity for to show autocomplete suggestions
const searchUser = document.getElementById('searchUser');
const suggestionsContainer = document.getElementById('suggestions-container');
const userNames = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];

searchUser.addEventListener('input', (e) => {

  const input = e.target.value.toLowerCase();

  const filteredNames = userNames.filter(user => 
    user.toLowerCase().includes(input)
  );

  suggestionsContainer.innerHTML = '';

  if (filteredNames.length > 0) {

    filteredNames.forEach(name => {
      const listItem = document.createElement('a');
      listItem.textContent = name;
      listItem.className = 'autoItem'

      listItem.addEventListener('click', () => {
        searchUser.value = name;
        suggestionsContainer.innerHTML = ''; 
      });

      suggestionsContainer.appendChild(listItem);
      
    });
  } else {
    const noResults = document.createElement('a');
    noResults.textContent = 'No user found';
    suggestionsContainer.appendChild(noResults);
  }
});

const suggestionItem = document.getElementById('autoItem')

document.addEventListener('click', (e) => {
  if (e.target != suggestionItem) {
    suggestionsContainer.innerHTML = '';
  }
    
});


// When message form is submitted
messageForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchUser = document.getElementById('searchUser');
  const messageInput = document.getElementById('messageUser');

  if ( messageInput.value === '' || searchUser.value === '' ) {
    alert(`Make sure you filled in all fields.`);
  } else {
    messageInput.value = '';
    searchUser.value = '';
    alert(`Message has been sent!`);
  }

});

// Functions for localstorage to save switch settings
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  const savedStatus = localStorage.getItem(checkbox.id);
  checkbox.checked = savedStatus === 'true';
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
      localStorage.setItem(checkbox.id, checkbox.checked);
  });
});

// Functions for localstorage to save timezone settings
const timeZone = document.getElementById('chooseTimezone');
const savedTimeZone = localStorage.getItem('selectedOption');

if (savedTimeZone) {
  timeZone.value = savedTimeZone;
}

timeZone.addEventListener('change', () => {
  localStorage.setItem('selectedOption', timeZone.value);
});

const clearSettingStorage = document.getElementById('clearSettingStorage');
clearSettingStorage.addEventListener('click', () => {
  localStorage.clear();
});

