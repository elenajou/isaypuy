
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input/input'
import { collection, getDocs, query, where, limit, doc, updateDoc} from 'firebase/firestore';
import { db } from '../../../scripts/firebase.js';

// Function to add guest
const firestoreModifyGuest = async (name, oldPhone, reservedSeats) => {
  if (!name || !oldPhone || !reservedSeats){
    return <div className="error">El nombre, celular y puestos no pueden estar vacios</div>
  }
  const invitadosRef = collection(db, 'invitados');
  const q = query(
    invitadosRef,
    where('phone', '==', oldPhone), // Using the phone variable to filter
    limit(1)
  );

  try {
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      return <div className="error">Ese numero no existe</div>
    } else {
      const guestDoc = snapshot.docs[0];
      const data = {
        name: name,
        reservedSeats: parseFloat(reservedSeats),
      }
      await updateDoc(doc(db, 'invitados', guestDoc.id), data); // Add the document
      console.log("Document written with ID: ", guestDoc.id); // Log the document ID
      return <div>Se modifico exitosamente: {name}, {phone}, {reservedSeats}</div>
    }
  } catch (error) {
    console.error("Error adding doc:", error);
    return <div className="error">Hubo un error</div>
  }
};

function ModifyGuest() {
  const [name, setName] = useState();
  const [oldPhone, setOldPhone] = useState();
  const [newPhone, setNewPhone] = useState();
  const [reservedSeats, setReservedSeats] = useState();
  const [log, setLog] = useState();

  const modifyGuest = async () => {
    const log = await firestoreModifyGuest(name, oldPhone, reservedSeats);
    if (log) setLog(log);
  }

  useEffect(() => {
    setLog(log);
  });
  return (
    <div className="section-add-guest">
      <h2>Aqui modificas invitaciones </h2>
      <div className="field">
        <div className="label" htmlFor="addGuestPhone">Numero de Celular para buscar</div>
        <PhoneInput
          id="oldGuestPhone"
          placeholder="+507 6222 2222"
          value={oldPhone}
          onChange={setOldPhone} />
      </div>
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
      <button type="button" className="button" onClick={modifyGuest}>MODIFICAR</button>
      {log}
    </div>
  );
}

export default ModifyGuest;