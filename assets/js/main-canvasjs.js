
/**
 * Chart temperatuur 
 */
var chart = new CanvasJS.Chart("chartContainer", {
    backgroundColor: "transparent",
    title: {
        fontColor: "#62c87a",
        text: "Binnen temperatuur",
        fontFamily: 'Roboto',
    },
    axisX:{
        fontFamily: 'Roboto',
        titleFontColor: "#62c87a",
        labelFontColor: "#62c87a",
    },
    axisY: {
        title: "Temperatuur Spaceship (°C)",
        titleFontColor: " #4c98d5",
        labelFontColor: "#4c98d5",
        fontFamily: 'Roboto',
        suffix: " °C"
    },
    data: [{
        type: "column", 
        yValueFormatString: "#,### °C",
        indexLabelFontColor: "#38e8de",
        fontFamily: 'Roboto',
        indexLabel: "{y}",
        dataPoints: [
            { label: "Spaceship", y: 17 },
        ]
    }]
});

//functie voor temperatuur 
function updateChart() {
    var tempratuurColor, deltaY, yVal;
    var dps = chart.options.data[0].dataPoints;
    for (var i = 0; i < dps.length; i++) {
        deltaY = Math.round(2 + Math.random() *(-2-2));
        yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
        tempratuurColor = yVal > 20 ? "#FF2500" : yVal >= 17 ? "#FF6000" : yVal < 17 ? "#6B8E23 " : null;
        dps[i] = {label: "Temperatuur binnen ", y: yVal, color: tempratuurColor};
    }
    chart.options.data[0].dataPoints = dps; 
    chart.render();
};
updateChart();

setInterval(function() {updateChart()}, 2000);





/**
 * chart voor aantal meter per seconden
 */
window.onload = function () {
var dps = []; // dataPoints
var chart = new CanvasJS.Chart("km", {
    backgroundColor: "transparent", //background is transparant
    title :{ 
        fontColor: "#62c87a",
        fontFamily: 'Roboto',
        text: "Aantal meter per seconden"
    },
    axisX:{ // opmaak van de x as voor de aantal seconden
        title: "aantal sec",
        suffix: "sec",
        fontFamily: 'Roboto',
        titleFontColor: "#62c87a",
        labelFontColor: "#62c87a",
        lineColor: "#38e8de",
        
    },
    axisY: { //opmaak van de y as de aantal meters
        title: "Aantal meter",
        suffix: "M",
        fontFamily: 'Roboto',
        titleFontColor: " #4c98d5",
        labelFontColor: " #4c98d5",
        lineColor: " #4c98d5",
        includeZero: false
    },      
    data: [{ // opmaak voor de data van de lijn 
        type: "line",
        fontFamily: 'Roboto',
        lineColor: "#aaa",
        markerColor: "#4c98d5",
        dataPoints: dps
    }]
});

var xVal = 0; // variable om bij 0 te beginnen
var yVal = 500; // tussen de 500m per seconden houden
var updateInterval = 1000; // variabel om per seconden de data te veranderen
var dataLength = 10; // number of dataPoints visible at any point

var updateChart = function (count) {


    count = count || 1;

    for (var j = 0; j < count; j++) {
        yVal = yVal +  Math.round(5 + Math.random() *(-5-5)); // zorg dat het random data komt te staan
        dps.push({
            x: xVal,
            y: yVal
        });
        xVal++;
    }

    if (dps.length > dataLength) {
        dps.shift();
    }

    chart.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);
}