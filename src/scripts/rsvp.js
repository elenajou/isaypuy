let familia;
let whatsapp;
let populate;
let invitadosRef;
let populateBtn;
let formInputs;

function populateData() {
  guestName = document.getElementById("rsvp-name").value.toLowerCase();
  guestPhone = parseInt(document.getElementById("rsvp-phone").value);
  // guestEmail = parseInt(document.getElementById("email").value);
  populateField = document.getElementById("populateField");
  populateBtn = document.getElementById("populateBtn");
  formInputs = document.querySelector(".form-inputs");
  invitadosRef = db.collection("invitados");

  invitadosRef
    .where('phone', '==', guestPhone)
    .limit(1)
    .get()
    .then(snapshot => {
      try {
        if (!snapshot.empty) {
          removeMsg();
          snapshot.forEach(doc => {
            const thisDoc = doc.data();      
            const ID = doc.id;
            const thisName = thisDoc.name;
            const thisPhone = thisDoc.phone;
            const reservedSeats = thisDoc.reservedSeats;

            formInputs.innerHTML = `
              <div>Familia /Nombre Completo: <br><span>${thisName}</span></div>
              <div>Numero de Contacto: <span>${thisPhone}</span</div>
              <label for="quantity">Puestos Reservados</label>
              <input type="number" id="${ID}" class="numOfGuests" name="quantity" min="1" max="${reservedSeats}" value="${reservedSeats}" required></input>
              <label for="comentario">Comentario</label>
              <input type="text" id="comentario-${ID}" class="comentario" name="comentario" maxlength="100">
              <button type="button" onclick="confirmGuest()" class="btn btn-light form-btn" name="submit">Estare ahi!</button>
              <button type="button" onclick="rejectGuest()" class="btn btn-light form-btn" id="rejectBtn">No podre asistir</button>`;
          })
        } else {
          throw new Exception();
        }
      } catch {
        removeMsg();
        setTimeout(errorMsg, 100);
        console.log("error accessing guests");
      }
    })
}

function confirmedMsg() {
  // document.getElementById("confirmedMsg").innerHTML = "";
  document.getElementById("searchMsg").classList.add("confirmed");
  document.getElementById("searchMsg").innerHTML = "Asistencia confirmada!";
}

function errorMsg() {
  // document.getElementById("errorMsg").innerHTML = "";
  document.getElementById("searchMsg").classList.add("error");
  document.getElementById("searchMsg").innerHTML = "Lo siento, no encuentro su invitacion";
}

function sadMsg(){
  document.getElementById("searchMsg").className = "error";
  document.getElementById("searchMsg").innerHTML = "Es una lastima :(";
}

function removeMsg(){
  document.getElementById("searchMsg").className = "";
  document.getElementById("searchMsg").innerHTML = "";
}

// function confirmGuest() {
//   try {
//     const guestNum = document.querySelector(".numOfGuests");
//     const guestMsg = document.querySelector(".rsvp-msg");
//     const ID = guestNum.id;
//     const num = parseInt(guestNum.value);
//     console.log("successfully got", ID);

//     const docRef = db.collection('invitados').doc(ID);

//     const updateField = {};
//     updateField['confirmaron'] = true;
//     updateField['rechazaron'] = false;
//     updateField['puestosConfirmados'] = num;
//     updateField['comentario'] = comentario.value;

//     docRef.update(updateField)
//       .then(() => {
//         removeMsg();
//         confirmedMsg();
//       })
//   } catch {
//     removeMsg();
//     setTimeout(errorMsg, 100);
//     console.log("error updating");
//   }
// }

// function rejectGuest() {
//   try {
//     const guestNum = document.querySelector(".numOfGuests");
//     const ID = guestNum.id;
//     const num = 0;
//     const comentario = document.querySelector(".comentario").value;

//     const docRef = db.collection('invitados').doc(ID);
//     console.log("successfully got", ID);


//     const updateField = {};
//     updateField['rechazaron'] = true;
//     updateField['confirmaron'] = false;   
//     updateField['puestosConfirmados'] = num;
//     updateField['comentario'] = comentario;

//     docRef.update(updateField)
//       .then(() => {
//         removeMsg();
//         sadMsg();
//       })
//   } catch (error) {
//     console.log(error);
//     removeMsg();
//     setTimeout(errorMsg, 100);
//     console.log("error updating");
//   }
// }