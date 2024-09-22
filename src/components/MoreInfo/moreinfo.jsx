import ReactModal from 'react-modal';
import tie from '../../images/tie-icon.png';
import notes from '../../images/notes-icon.png';
import CustomModal from '../CustomModal/customModal.jsx';
import dresses from '../../images/dresses.png';
import suits from '../../images/suits.png';

import './moreinfo.css';

const dressCodeHTML = <div className="dressCode-modal-body">
  <div className="dressCode-title">Formal</div>
  <div className='dressCode-info'>
    <div className="dressCode-info-slide">
      <div className='dressCode-caption'>Gentlemen</div>
      <img src={suits} alt="" />
    </div>
    <div className="dressCode-info-slide">
      <div className='dressCode-caption'>Ladies</div>
      <img src={dresses} alt="" />
    </div>
    <div className="dressCode-info-slide">
      <div className='dressCode-caption'>AVOID THIS</div>
      <ul>
        <li>Red dresses</li>
        <li>Navy Green dresses</li>
        <li>White Suit</li>
      </ul>
    </div>
  </div>
</div>;

const infoModalHTML = <div className="modal-body">
  <div className="rsvp-title">TBD</div>
</div>;

const dressCodeBtn = <div>+ INFO</div>;
const infoBtn = <div>SUGERENCIAS</div>;

function MoreInfo() {
  return (
    <div id="moreinfo">
      <div className="card">
        <div>
          <div className="card-title">Codigo de Vestimenta</div>
          <div className="card-icon"><img src={tie}/></div>
          <div className="card-caption">Una orientacion para tu vestuario</div>
        </div>
        <CustomModal buttonID="sugerenciaModal" content={dressCodeHTML} caption={infoBtn} classes="button card-button"></CustomModal>
      </div>
      <div className="card">
        <div>
          <div className="card-title">Tips y Notas</div>
          <div className="card-icon"><img src={notes}/></div>
          <div className="card-caption">Information adicional para tener en cuenta</div>
        </div>
        <CustomModal buttonID="infoModal" content={infoModalHTML} caption={dressCodeBtn} classes="button  card-button"></CustomModal>
      </div>
    </div>
  );
}

export default MoreInfo;
