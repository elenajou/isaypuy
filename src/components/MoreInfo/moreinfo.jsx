import tie from '../../images/tie-icon.png';
import notes from '../../images/notes-icon.png';

import './moreinfo.css';

function MoreInfo() {
  return (
    <div id="moreinfo">
      <div class="card">
        <div class="card-title">Dress Code</div>
        <div class="card-icon"><img src={tie}/></div>
        <div class="card-caption">Una orientacion para tu vestuario</div>
        <div class="button card-button">SUGERENCIAS</div>
      </div>
      <div class="card">
        <div class="card-title">Tips y Notas</div>
        <div class="card-icon"><img src={notes}/></div>
        <div class="card-caption">Information adicional para tener en cuenta</div>
        <div class="button card-button">+ INFO</div>
      </div>
    </div>
  );
}

export default MoreInfo;
