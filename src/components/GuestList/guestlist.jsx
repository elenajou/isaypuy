
import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../scripts/firebase.js';
import AddGuest from './AddGuest/addGuest.jsx';
import ModifyGuest from './modifyGuest/modifyGuest.jsx';
import DeleteGuest from './DeleteGuest/deleteGuest.jsx'
import './guestlist.css';
// Function to fetch guests
const getAllGuests = async () => {
  const invitadosRef = collection(db, 'invitados');
  const q = query(invitadosRef, orderBy('name'));
  try {
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const guests = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      return guests; // Return the array of guests
    } else {
      console.log("No guests found.");
    }
  } catch (error) {
    console.error("Error reading docs:", error);
  }
  return []; // Return null if no guests found or on error
};

function GuestList() {
  const [allGuests, setAllGuests] = useState([]);

  // Function to calculate the total reserved seats
  const calculateTotalRSeats = () => {
    console.log()
    return allGuests.reduce((total, guest) => total + guest.reservedSeats, 0);
  };
  // Function to calculate the total confirmed seats
  const calculateTotalCSeats = () => {
    return allGuests.reduce((total, guest) => total + guest.confirmedSeats, 0);
  };
  // Use effect to fetch guests when the component mounts
  useEffect(() => {
    const fetchGuests = async () => {
      const guests = await getAllGuests();
      if (guests) {
        setAllGuests(guests); // Set the guests in state
        document.body.classList.remove('body-lock');
      }
    };
    fetchGuests();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (<div id="guestList">
    <AddGuest/>
    <ModifyGuest/>
    <DeleteGuest/>

    <div id="allGuestList">
      <h2>Aqui estan todos los invitados en el sistema</h2>
      <h3>Puestos Reservados: {calculateTotalRSeats()}</h3>
      <h3>Puestos Confirmados: {calculateTotalCSeats()}</h3>
      {allGuests.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th className="name">Nombre</th>
              <th className="phone">Numero</th>
              <th className="reservedSeats">Puestos Reservados</th>
              <th className="confirmedSeats">Puestos Confirmados</th>
              <th className="confirm">Confirmaron</th>
              <th className="confirm">Rechazaron</th>
              <th className="msg">Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {allGuests.map(guest => (
              <tr key={guest.id}>
                <td className="name">{guest.name}</td>
                <td className="phone">{guest.phone}</td>
                <td className="reservedSeats">{guest.reservedSeats}</td>
                <td className="confirmedSeats">{guest.confirmedSeats}</td>
                <td className="confirm">
                  {guest.confirmed ? (<div>Si</div>) : (<div>No</div>)}
                  </td>
                <td className="confirm">
                  {guest.declined ? (<div>Si</div>) : (<div>No</div>)}
                </td>
                <td className="msg">{guest.msg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No guests found.</p> // Optional: show a message if no guests are available
      )}
    </div>
  </div>);
}

export default GuestList;