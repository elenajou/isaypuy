import React, { useState, useEffect } from 'react';
import CustomModal from '../CustomModal/customModal.jsx';
import Search, { ceremoniaBtn } from './search.jsx';
import './schedule.css';
import './invitation.css';

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
  const [ceremoniaModal, setCeremoniaModal] = useState(null);

  const toggleSearchModalContent = () => {
    setCeremoniaModal(<Search />);
  };

  const toggleInvitacionModalContent = () => {
      setCeremoniaModal(<Search />);
  };

  // Set initial modal content
  useEffect(() => {
    if (!ceremoniaModal) {
      setCeremoniaModal(<Search />);
    }
  }, [ceremoniaModal]);
  return (
    <>
      <div id="schedule">
        <h2><span>Dia del</span><br></br>EVENTO</h2>
        <p><span>25 de Enero de 2025</span></p>
        <ol id="schedule-all-events">
          {scheduleItems.map(({id, icon, time, description}) => {
            return <li key={id} className='schedule-event'><img src={icon} alt="" /><div>{time} </div><div>{description}</div></li>
          })}
        </ol>
      </div>
      <div id="invitation">
        <div className="information">
          <div id="lugar" className="lugar">
            <h2>Lugar</h2>
            <p>Hacienda Los Molinos Boutique</p>
            <p>Boquete, Chiriqui</p>
            <div>
              <div><a className="button waze" href="https://waze.com/ul/hd1t379pm8">Waze</a></div>
              <div><a className="button" href="https://maps.app.goo.gl/EDzE9D7C2dytm77G8">Google Maps</a></div>
            </div>
          </div>
          <div className="ceremonia">
            <h2>Ceremonia</h2>
            <p><span>25 de Enero de 2025</span></p>
            <CustomModal 
              buttonID="ceremonia" 
              content={ceremoniaModal} 
              caption={ceremoniaBtn} 
              classes="button" 
              onBtnClick={toggleSearchModalContent}>
            </CustomModal>
          </div>
        </div>
    </div>
    </>
  );
}

export default Schedule;