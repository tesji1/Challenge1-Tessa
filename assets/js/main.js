
document.getElementById('menu').onclick = function() {
    var navigation = document.getElementById('myTopnav');
    
    if (navigation.className === 'topnav') {
        navigation.className += ' active';
    } else {
        navigation.className = 'topnav';
    }
};

        var config = {
            type: 'line',
            data: {
                labels: ["Januari", "Februari", "Maart", "April", "Mei", "Juni"],
                datasets: [{
                    label: "Aantal km per maand naar mars x10.000",
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    data: [0, 800, 1800, 2900, 4000, 5000],
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                title:{
                    display: true,
                    text: 'Afstand van aarde naar mars'
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo']
                        },
                        ticks: {
                            min: 0,
                            max: 5000,
                            stepSize: 1000
                        }
                    }]
                }
            }
        };

        window.onload = function() {
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx, config);
        };

        var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Leeg", "flessen Water", "blikken eten"],
    datasets: [{
      backgroundColor: [
        "#95a5a6",
        "#3498db",
        "#2ecc71"
      ],
      data: [50000, 19000, 30000]
    }]
  }
});


var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Open Sans";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
    label: "Snelheid (m/s)",
    data: [0, 100, 300, 500, 550, 600, 50],
    lineTension: 0,
    fill: false,
    borderColor: '#2ecc71',
    backgroundColor: 'transparent',
    borderDash: [5, 5],
    pointBorderColor: '#2ecc71',
    pointBackgroundColor: 'rgba(255,150,0,0.5)',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded'
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});



        

