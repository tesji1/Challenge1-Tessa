  // variables om afstand in km op te tellen
var counterup = document.getElementById('counterup');
var numbers = 0;

counterup.innerHTML = numbers;
function countUp (){
  
  numbers = numbers + 1
  counterup.innerHTML = numbers;
};
setInterval(countUp,50); // per 50 miliseconden


var timeleft = 280000000; //afstand waarvan hij moet aftellen van de data 280.000.000 km
var countDown = document.getElementById("countdowntimer")
var downloadTimer = setInterval(function(){
  timeleft--;
  countDown.textContent = timeleft;
    if(timeleft <= 1){
        clearInterval(downloadTimer);
        countDown.textContent = "Finished we zijn op MARS!"; // na het aftellen zegt hij FINSHED WE ZIJN OP MARS
    }
},50); // per 50 miliseconden