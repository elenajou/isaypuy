import countdown from '../../images/casual.png';
import './countdown.css';

function Countdown() {
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 25, 2025 18:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hr").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("clock").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div id="countdown">
      <img id="countdown-img" src={countdown} alt="IsaYPuy"/>
      
      <h2><span>F</span>ALTA</h2>
      <div id="clock">
        <div className="count">
          <span id="days"></span>
          <span id="hr"></span>
          <span id="min"></span>
          <span id="sec"></span>
        </div>
        <div className="caption">          
          <span id="dias">Dias</span>
          <span id="horas">Horas</span>
          <span id="minutos">Minutos</span>
          <span id="segundos">Segundos</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
