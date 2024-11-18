import { useState } from 'react';
import PhoneInput from 'react-phone-number-input/input';
import { collection, getDocs, query, where, limit, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../scripts/firebase.js';

function DeleteGuest() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [log, setLog] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [guestToDelete, setGuestToDelete] = useState(null);

  // Function to delete guest from Firestore
  const deleteGuestID = async () => {
    try {
      const guestRef = doc(db, 'invitados', guestToDelete);
      await deleteDoc(guestRef);
      setLog(<div>Se eliminó a {name} exitosamente. Refresca la pagina para ver tus cambios.</div>);
      setShowConfirmation(false);  // Hide confirmation after deletion
    } catch (error) {
      console.error("Error deleting guest:", error);
      setLog(<div className="error">Hubo un error al eliminar al invitado.</div>);
    }
  };

  // Function to handle the confirmation and show the dialog
  const confirmGuest = async () => {
    if (!phone) {
      setLog(<div className="error">El celular no puede estar vacío.</div>);
      return;
    }
    setLog();
    const invitadosRef = collection(db, 'invitados');
    const q = query(invitadosRef, where('phone', '==', phone), limit(1));

    try {
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        setLog(<div className="error">Ese número no existe.</div>);
      } else {
        const guestDoc = snapshot.docs[0];
        setName(guestDoc.data().name);
        setGuestToDelete(guestDoc.id);  // Store the guest's data to delete
        setShowConfirmation(true);  // Show confirmation
      }
    } catch (error) {
      console.error("Error fetching guest:", error);
      setLog(<div className="error">Hubo un error al obtener los datos del invitado.</div>);
    }
  };

  const deniedDelete = function() {
    setShowConfirmation(false);
    setPhone();
    setName();
  }

  return (
    <div className="section-add-guest">
      <h2>Aquí eliminas invitaciones</h2>
      <div className="field">
        <div className="label" htmlFor="addGuestPhone">Número de Celular que deseas eliminar</div>
        <PhoneInput
          id="guestPhone"
          placeholder="+507 6222 2222"
          value={phone}
          onChange={setPhone} />
      </div>
      <button type="button" className="button" onClick={confirmGuest}>MODIFICAR</button>
      {log}

      {/* Show the confirmation UI if needed */}
      {showConfirmation && guestToDelete && (
        <><div>Segura que deseas eliminar a {name}?</div>
          <button type="button" className="button" onClick={deleteGuestID}>Si</button>
          <button type="button" className="button" onClick={deniedDelete}>No</button>
        </>
      )}
    </div>
  );
}

export default DeleteGuest;
