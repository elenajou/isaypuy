import { useState, useEffect } from 'react';
import { collection, doc, query, where, limit, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../scripts/firebase.js';

const ceremoniaBtn = <div>Confirmar Asistencia</div>;

function SearchFields ({ onSearch }) { 
  const [phone, setPhone] = useState('');

  const handleSearch = async () => {
    await onSearch({ phone });
  }
  return <div id="populateForm">
    <input 
      type="text" 
      id="rsvp-search-number" 
      className="rsvp-input" 
      name="whatsapp" 
      placeholder="WhatsApp / Numero de celular" 
      min="60000000" 
      max="9999999999"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
    />
    <button 
      type="button" 
      onClick={handleSearch} 
      id="populateBtn" 
      className="button rsvp-btn"
    >
      BUSCAR
    </button>
  </div>
}

function InviteData({docID, name, phone, reservedSeats, msg}) {
  const [message, setMessage] = useState(msg);
  const [seats, setSeats] = useState(reservedSeats);
  const [confirmation, setConfirmation] = useState("");
  function acceptRSVP() {
    try {
      const docRef = doc(db, 'invitados', docID);
      updateDoc(docRef, {
        msg: message,
        confirmedSeats: seats,
        confirmed: true,
        declined: false
      });
      changeConfirmation(true);
      console.log("RSVP successfully updated");
    } catch (error) {
      console.log('docID: ', docID);
      console.error('Error saving RSVP: ', error);
    }
  }
  function declineRSVP() {
    try {
      const docRef = doc(db, 'invitados', docID);
      updateDoc(docRef, {
        msg: message,
        confirmedSeats: seats,
        confirmed: false,
        declined: true
      });
      changeConfirmation(false);
      console.log("RSVP successfully updated");
    } catch (error) {
      console.log('docID: ', docID);
      console.error('Error saving RSVP: ', error);
    }
  }
  const handleSeatChange = (e) => {
    const value = Number(e.target.value); // Convert to number
    if (value >= 0 && value <= reservedSeats) {
      setSeats(value);
    } else {
      // Optionally handle cases where the input is out of bounds
      if (value > reservedSeats) {
        setSeats(reservedSeats); // Set to max if exceeded
      } else if (value < 0) {
        setSeats(0); // Reset to 0 if negative
      }
    }
  }
  function changeConfirmation(type) {
    if (type == true) {
      setConfirmation("¡Estamos emocionados de verte en nuestra boda!");
    } else {
      setConfirmation("Extrañaremos tu presencia :(");
    }
  }
  return <div id="populateForm">
    <div className="rsvp-name">{name}</div>
    <div className="rsvp-caption">
      <div>Numero de Contacto:</div>
      <div className='rsvp-phone '>{phone}</div>
    </div>
    <div className="rsvp-caption">
      <label htmlFor="">Puestos Reservados:</label>
      <div className="rsvp-info" >{reservedSeats}</div>
    </div>
    <div className="">
      <label className="" htmlFor="rsvp-seats">Confirmar Puestos:</label>
      <input 
        id="rsvp-seats" 
        className="" 
        type="number"
        value={seats}
        onChange={handleSeatChange}
      />
    </div>
    <label htmlFor="rsvp-msg" className="rsvp-msg">Deja un mensaje</label>
    <input 
      type="text" 
      id="rsvp-msg" 
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <div className="rsvp-btn">
      <button className="button" onClick={acceptRSVP}>Estare ahi!</button>
      <button className="button" onClick={declineRSVP}>No puedo</button>
    </div>
    <div className="sad">{confirmation}</div>
  </div>
}

async function fetchInviteData({ name, phone }) {
  
  const invitadosRef = collection(db, 'invitados');
  const q = query(
    invitadosRef,
    where('phone', '==', phone), // Using the phone variable to filter
    limit(1)
  );

  try {
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      const thisDoc = doc.data();

      return (
        <InviteData 
          docID={doc.id}
          name={thisDoc.name}
          phone={thisDoc.phone}
          reservedSeats={thisDoc.reservedSeats}
          msg={thisDoc.msg}
        />
      );
    } else {
      console.log("No matching documents found.");
    }
  } catch (error) {
    console.error('Error accessing guests: ', error);
  }
}

function Search() {
  const [inviteDetails, setInviteDetails] = useState(null);

  const handleSearch = async ({ phone }) => {
    setInviteDetails(<div className="rsvp-caption">Loading...</div>);
    const details = await fetchInviteData({ phone });
    if (!details) {
      // If no data is found, update the search message
      setInviteDetails(<><SearchFields onSearch={handleSearch} /><div className="sad" id="searchMsg">No encuentro su invitacion. Intenta denuevo</div></>);
    } else {
      setInviteDetails(details);
    }
  }
  // Set initial modal content
  useEffect(() => {
      if (!inviteDetails) {
        setInviteDetails(<SearchFields onSearch={handleSearch} />);
      }
    }, [inviteDetails]);
  
  return <div className="rsvp-modal-body form-inputs">
    <div className="rsvp-title">RSVP</div>
    {inviteDetails}
  </div>;
}

export default Search;
export { ceremoniaBtn };