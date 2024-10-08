
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input/input'
import { collection, getDocs, query, where, limit, addDoc} from 'firebase/firestore';
import { db } from '../../../scripts/firebase.js';

// Function to add guest
const firestoreAddGuest = async (name, phone, reservedSeats) => {
  if (!name || !phone || !reservedSeats){
    return <div className="error">El nombre, celular y puestos no pueden estar vacios</div>
  }
  const invitadosRef = collection(db, 'invitados');
  const q = query(
    invitadosRef,
    where('phone', '==', phone), // Using the phone variable to filter
    limit(1)
  );

  try {
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      return <div className="error">Ese numero ya existe</div>
    } else {
      const data = {
        name: name,
        phone: phone,
        reservedSeats: parseFloat(reservedSeats),
        confirmedSeats: 0,
        confirmed: false,
        declined: false,
        msg: ""
      }
      const docRef = await addDoc(invitadosRef, data); // Add the document
      console.log("Document written with ID: ", docRef.id); // Log the document ID
      return <div>Se agrego exitosamente: {name} - {phone} - {reservedSeats}</div>
    }
  } catch (error) {
    console.error("Error adding doc:", error);
    return <div className="error">Hubo un error</div>
  }
};

function AddGuest() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [reservedSeats, setReservedSeats] = useState();
  const [log, setLog] = useState();

  const addGuest = async () => {
    const log = await firestoreAddGuest(name, phone, reservedSeats);
    if (log) setLog(log);
  }

  useEffect(() => {
    setLog(log);
  });
  return (
    <div className="section-add-guest">
      <h2>Aqui agregas nuevos invitados </h2>
      <div className="field">
        <div className="label" htmlFor="addGuestName">Nombre Completo</div>
        <input 
          type="text" 
          name="guestName" 
          id="addGuestName" 
          value={name} 
          onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className="field">
        <div className="label" htmlFor="addGuestPhone">Numero de Celular</div>
        <PhoneInput
          id="addGuestPhone"
          placeholder="+507 6222 2222"
          value={phone}
          onChange={setPhone} />
      </div>
      <div className="field">
        <div className="label" htmlFor="addGuestSeats">Puestos Reservados</div>
        <input 
          type="number" 
          name="guestSeats" 
          id="addGuestSeats" 
          value={reservedSeats} 
          onChange={(e)=>setReservedSeats(e.target.value)} 
          min="1" 
          required/>
      </div>
      <button type="button" className="button" onClick={addGuest}>AGREGAR</button>
      {log}
    </div>
  );
}

export default AddGuest;