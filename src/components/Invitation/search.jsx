import { useState, useEffect } from 'react';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { db } from '../../scripts/firebase.js';

const ceremoniaBtn = <div>Confirmar Asistencia</div>;

function SearchFields ({ onSearch }) { 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSearch = async () => {
    await onSearch({ name, phone });
  }
  return <div id="populateForm">
    <input 
      type="text" 
      id="rsvp-search-name" 
      className="rsvp-input" 
      name="name" 
      placeholder="Nombre / Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input 
      type="number" 
      id="rsvp-search-number" 
      className="rsvp-input" 
      name="whatsapp" 
      placeholder="Whatsapp / Phone Number" 
      min="60000000" 
      max="9999999999"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
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
        <div id="populateForm">
          <div className="rsvp-name">{thisDoc.name}</div>
          <div className="rsvp-phone">
            <div>Numero de Contacto:</div>
            <div>{thisDoc.phone}</div>
          </div>
          <div className="rsvp-seats">
            <div>Puestos Reservados:</div>
            <div>{thisDoc.reservedSeats}</div>
          </div>
          <label htmlFor="rsvp-msg" className="rsvp-caption">Deja un mensaje</label>
          <input type="text" id="rsvp-msg" />
          <div className="rsvp-btn">
            <button className="button">Estare ahi!</button>
            <button className="button">No puedo :&#40;</button>
          </div>
        </div>
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

  const handleSearch = async ({ name, phone }) => {
    setInviteDetails(<div>Loading...</div>);
    const details = await fetchInviteData({ name, phone });
    if (!details) {
      // If no data is found, update the search message
      setInviteDetails(<><div id="searchMsg">No encuentro su invitacion. Intenta denuevo</div><SearchFields onSearch={handleSearch} /></>);
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
  
  return <form className="rsvp-modal-body form-inputs">
    <div className="rsvp-title">RSVP</div>
    {inviteDetails}
  </form>;
}

export default Search;
export { ceremoniaBtn };