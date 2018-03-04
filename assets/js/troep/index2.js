var dData = function() {
  return Math.round(Math.random() * 90) + 10
};

var barChartData = {
  labels: ["graden", "graden 2", "graden 3", "graden 4", "graden 5", "graden 6", "graden 7", "graden 8", "graden 9", "graden 10"],
  datasets: [{
    fillColor: "rgba(0,60,100,1)",
    strokeColor: "black",
    data: [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()]
  }]
}

var index = 11;
var ctx = document.getElementById("canvas").getContext("2d");
var barChartDemo = new Chart(ctx).Bar(barChartData, {
  responsive: true,
  barValueSpacing: 2
});
setInterval(function() {
  barChartDemo.removeData();
  barChartDemo.addData([dData()], "graden " + index);
  index++;
}, 3000);