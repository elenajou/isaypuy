import './guestlist.css';

function GuestList() {
  return (<div id="guestList">
    <div className="section">
      <h2>Aqui agregas nuevos invitados al sistema</h2>
      <div className="field">
        <div className="label" htmlFor="addGuestName">Nombre Completo</div>
        <input type="text" name="guestName" id="guestName"/>
      </div>
      <div className="field">
        <div className="label" htmlFor="addGuestPhone">Numero de Celular</div>
        <input type="text" name="phone" id="addGuestPhone" />
      </div>
      <div className="field">
        <div className="label" htmlFor="addGuestSeats">Puestos Reservados</div>
        <input type="number" name="guestSeats" id="addGuestSeats"/>
      </div>
    </div>
    <div className="section">
      <h2>Aqui modificas invitados que estan en el sistema</h2>
      <div className="field">
        <div className="label" htmlFor="updGuestPhone">Numero de Celular</div>
        <input type="text" name="phone" id="updGuestPhone" />
      </div>
      <div className="field">
        <div className="label" htmlFor="updGuestSeats">Puestos Reservados</div>
        <input type="number" name="guestSeats" id="updGuestSeats"/>
      </div>
    </div>
    <div className="section">
      <h2>Aqui estan todos los invitados en el sistema</h2>
    </div>
  </div>);
}

export default GuestList;