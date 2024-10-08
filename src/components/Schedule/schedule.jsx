import './schedule.css';

const scheduleItems = [
  { id: 1, icon: "https://img.icons8.com/?size=100&id=LmKfm73NqrDb&format=png&color=000000",
    time: "4:00 PM", description: "Ceremonia" },
  { id: 2, icon: "https://img.icons8.com/dotty/80/cocktail.png", time: "5:00 PM", description: "Cocktail y Bocados" },
  { id: 3, icon: "https://img.icons8.com/dotty/80/meal.png", time: "7:00 PM", description: "Recepcion" },
  { id: 4, icon: "https://img.icons8.com/dotty/80/wedding-cake.png", time: "8:30 PM", description: "Pastel" },
  { id: 5, icon: "https://img.icons8.com/?size=100&id=24907&format=png&color=000000", time: "9:00 PM", description: "Primer Baile" },
  { id: 6, icon: "https://img.icons8.com/?size=100&id=25777&format=png&color=000000", time: "10:00 PM", description: "Empieza la rumba!" },
];

function Schedule() {
  return (
    <div id="schedule">
      <h2><span>Dia del</span><br></br>EVENTO</h2>
      <p><span>25 de Enero de 2025</span></p>
      <ol id="schedule-all-events">
        {scheduleItems.map(({id, icon, time, description}) => {
          return <li key={id} className='schedule-event'><img src={icon} alt="" /><div>{time} </div><div>{description}</div></li>
        })}
      </ol>
    </div>
  );
}

export default Schedule;
<img width="64" height="64" src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/external-wedding-rings-wedding-kmg-design-detailed-outline-kmg-design.png" alt="external-wedding-rings-wedding-kmg-design-detailed-outline-kmg-design"/>