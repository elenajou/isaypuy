import './schedule.css';

const scheduleItems = [
  { icon: "https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/external-wedding-rings-wedding-kmg-design-detailed-outline-kmg-design.png",
    time: "4:00 PM", description: "Ceremonia" },
  { icon: "https://img.icons8.com/dotty/80/cocktail.png", time: "5:00 PM", description: "Cocktail y Bocados" },
  { icon: "https://img.icons8.com/dotty/80/meal.png", time: "7:00 PM", description: "Recepcion" },
  { icon: "https://img.icons8.com/dotty/80/wedding-cake.png", time: "8:30 PM", description: "Pastel" },
  { icon: "https://img.icons8.com/ios/50/ballroom-dance.png", time: "9:00 PM", description: "Primer Baile" },
  { icon: "https://img.icons8.com/ios/50/disco-ball.png", time: "10:00 PM", description: "Empieza la rumba!" },
];

function Schedule() {
  return (
    <div id="schedule">
      <h2><span>Dia del</span><br></br>EVENTO</h2>
      <p><span>25 de Enero de 2025</span></p>
      <ol id="schedule-all-events">
        {scheduleItems.map(({icon, time, description}) => {
          return <li className='schedule-event'><img src={icon} alt="" /><div>{time} </div><div>{description}</div></li>
        })}
      </ol>
    </div>
  );
}

export default Schedule;
<img width="64" height="64" src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/external-wedding-rings-wedding-kmg-design-detailed-outline-kmg-design.png" alt="external-wedding-rings-wedding-kmg-design-detailed-outline-kmg-design"/>