import ReactModal from 'react-modal';
import tie from '../../images/tie-icon.png';
import notes from '../../images/notes-icon.png';
import CustomModal from '../CustomModal/customModal.jsx';
import dresses from '../../images/dresses.png';
import suits from '../../images/suits.png';
import avoid from '../../images/avoidDress.png';

import './moreinfo.css';

const qa = [
  {
    question: "¿Hasta cuándo puedo confirmar mi asistencia?", 
    answer: "Tienes hasta el 10 de enero de 2024 para confirmar. De no poder confirmar hasta esa fecha se entenderá de que no podrán asistir."
  }, {
    question: "Si me quiero hospedar en el hotel después del evento, ¿Cómo sería la logística?", 
    answer: "Para reservas de habitación, contamos con tarifa especial para nuestros invitados y la misma tiene un costo de $105 en Sheraton y $85 en Aloft por noche. Estos precios son para 2 dos personas con desayuno incluidos y por persona adicional (persona mayor a 13 años) serian $30 en Sheraton y $25 en Aloft hasta 4 personas por habitación. Niños de 0-5 años solo pagarían el 50% del desayuno y 6-13 años pagan $14. Para reservas o más información contactar a los correos: reservas@sheratongrandpanama.com / reservas@aloftpanama.com e indicar que para la boda del Felipe y Alicia del día 27 de enero.Teléfono de contacto en el hotel: 305-6560"
  }, {
    question: "¿Puedo asistir para la ceremonia civil?",
    answer: "Tenemos puestos limitados para la ceremonia civil, puedes confirmar con nosotros al privado por puestos adicionales."
  }, {
    question: "¿Puedo traer a un plus +1?",
    answer: "Confirma con nosotros para puestos adicionales."
  }
];
const dressType = [
  {
    caption: "Gentlemen",
    image: suits,
    children: ""
  }, {
    caption: <div>&darr;</div>,
    image: "",
    children: ""
  }, {
    caption: "Ladies",
    image: dresses,
    children: ""
  }, {
    caption: "EVITA ESTOS COLORES",
    image: avoid,
    children: ""
  }
];

const dressCodeBtn = <div>SUGERENCIAS</div>;
const infoBtn = <div>+ INFO</div>;

const dressCodeModalHTML = <div className="dressCode-modal-body">
  <div className="dressCode-title">Formal</div>
  <div className="dressCode-info">
    {
      dressType.map(({caption, image, children}) => {
      return <div key={caption} className="dressCode-info-slide">
        <div className='dressCode-caption'>{caption}</div>
        <img src={image} alt="" />
        {children}
      </div>})
    }
  </div>
</div>;

const infoModalHTML = <div key={16} className="info-modal-body">
  <div className="info-title">Q & A</div>
  { qa.map(({question, answer}) => {
    return (<><div key={question} className='info-question'>{question}</div>
    <div key={answer.length} className='info-answer'>{answer}</div></>)
  })}
</div>;

function MoreInfo() {
  return (
    <div id="moreinfo">
      <div className="card-body">
        <div className="card-content">
          <div className="card-title">Código de Vestimenta</div>
          <div className="card-icon"><img src={tie}/></div>
          <div className="card-caption">Una orientación para tu vestuario</div>
        </div>
        <CustomModal buttonID="sugerenciaModal" content={dressCodeModalHTML} caption={dressCodeBtn} classes="button card-button"></CustomModal>
      </div>
      <div className="card-body">
        <div className="card-content">
          <div className="card-title">Q & A</div>
          <div className="card-icon"><img src={notes}/></div>
          <div className="card-caption">Información adicional del evento</div>
        </div>
        <CustomModal buttonID="infoModal" content={infoModalHTML} caption={infoBtn} classes="button  card-button"></CustomModal>
      </div>
    </div>
  );
}

export default MoreInfo;
