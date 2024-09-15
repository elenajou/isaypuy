import ReactModal from 'react-modal';
import tie from '../../images/tie-icon.png';
import notes from '../../images/notes-icon.png';
import CustomModal from '../CustomModal/customModal.jsx';

import './moreinfo.css';

let dressCodeHTML = <div>I am a dress code modal</div>;
let infoModalHTML = <div>I am a tips modal</div>;
let dressCodeBtn = <div>+ INFO</div>;
let infoBtn = <div>SUGERENCIAS</div>;

function MoreInfo() {
  return (
    <div id="moreinfo">
      <div class="card">
        <div className="card-title">Dress Code</div>
        <div className="card-icon"><img src={tie}/></div>
        <div className="card-caption">Una orientacion para tu vestuario</div>
        <CustomModal buttonID="sugerenciaModal" content={dressCodeHTML} caption={infoBtn} classes="button card-button"></CustomModal>
      </div>
      <div class="card">
        <div className="card-title">Tips y Notas</div>
        <div className="card-icon"><img src={notes}/></div>
        <div className="card-caption">Information adicional para tener en cuenta</div>
        <CustomModal buttonID="infoModal" content={infoModalHTML} caption={dressCodeBtn} classes="button  card-button"></CustomModal>
      </div>
    </div>
  );
}

export default MoreInfo;
