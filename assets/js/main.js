document.getElementById('menu').onclick = function() {
    var navigation = document.getElementById('myTopnav');
    
    if (navigation.className === 'topnav') {
        navigation.className += ' active';
    } else {
        navigation.className = 'topnav';
    }
};

/**
 * Eten + / -
 */
$('#eten_plus').on('click', function(){
  // Pak de huidige array waardes en voeg 1 toe aan blikken
  var original = [myChart.data.datasets[0].data[0], (myChart.data.datasets[0].data[1]+500)];
  addData2(myChart, original, 0);
});

$('#eten_min').on('click', function(){
  // Pak de huidige array waardes en haal 1 weg bij blikken en voeg 1 toe aan leeg 
  var original = [(myChart.data.datasets[0].data[0]+500), (myChart.data.datasets[0].data[1]-500)];
  addData2(myChart, original, 0);
});


/**
 * water + / -
 */
$('#water_plus').on('click', function(){
  // Pak de huidige array waardes en voeg 1 toe aan water
  var original = [myPie.data.datasets[0].data[0], (myPie.data.datasets[0].data[1]+500)];
  addData2(myPie, original, 0);
});

$('#water_min').on('click', function(){
  // Pak de huidige array waardes en haal 1 weg bij water en voeg 1 toe aan leeg 
  var original = [(myPie.data.datasets[0].data[0]+500), (myPie.data.datasets[0].data[1]-500)];
  addData2(myPie, original, 0);
});





//PIE CHART GEGEVENS (VOEDSEL)
        var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Leeg", "blikken eten"],
    datasets: [{
      backgroundColor: [
        "#95a5a6",
        "#2ecc71",
      ],
      data: [50000, 40000]
    }]
  }
});


//PIE CHART GEGEVENS
        var ctx = document.getElementById("myPie").getContext('2d');
var myPie = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Leeg", "flessen Water"],
    datasets: [{
      backgroundColor: [
        "#95a5a6",
        "#3498db",
      ],
      data: [50000, 19000]
    }]
  }
});





// Data toevoegen aan een chart
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function addData2(chart, data, datasetIndex) {
   chart.data.datasets[datasetIndex].data = data;
   chart.update();
}

// Data verwijderen van een chart
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}


      
 

