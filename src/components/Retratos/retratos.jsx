import CustomModal from '../CustomModal/customModal.jsx';
import retratos from '../../images/retratos.png';
import './retratos.css';

function getThumbnail(link) {
  return <img src={link}/>;
}
function Retratos() {
  let photo1 = "https://plus.unsplash.com/premium_photo-1674581215484-e6242a37c51e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let photo2 = "https://plus.unsplash.com/premium_photo-1675003662150-2569448d2b3b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let photo3 = "https://images.unsplash.com/photo-1634692843550-8ddff2a880ad?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let photo4 = "https://images.unsplash.com/photo-1609151162377-794faf68b02f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let photo5 = "https://images.unsplash.com/photo-1634729108541-516d16ddceec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let photo6 = "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div id="retratos" class="retratos-bg">
      {/* <img id="retratos-bkg" src={retratos} alt="IsaYPuy"/> */}
      <div class="title">
        <div class="nuestros">Nuestros</div>
        <div class="retratos-title">Retratos</div>
      </div>
      <div class="body-thumbnails">
        {/* Column 1 */}
        <div class="g-s-row-1 g-s-col-1 g-row-s-2"><CustomModal content={getThumbnail(photo1)} caption={getThumbnail(photo1)} classes="thumbnail"></CustomModal></div>
        <div class="g-s-row-4 g-s-col-1"><CustomModal content={getThumbnail(photo6)} caption={getThumbnail(photo6)} classes="thumbnail"></CustomModal></div>
        <div class="g-s-row-3 g-s-col-1"><CustomModal content={getThumbnail(photo4)} caption={getThumbnail(photo4)} classes="thumbnail"></CustomModal></div>

        {/* Column 2 */}
        <div class="g-s-row-1 g-s-col-2"><CustomModal content={getThumbnail(photo5)} caption={getThumbnail(photo5)} classes="thumbnail"></CustomModal></div>
        <div class="g-s-row-2 g-s-col-2 g-row-s-2"><CustomModal content={getThumbnail(photo3)} caption={getThumbnail(photo3)} classes="thumbnail"></CustomModal></div>
        <div class="g-s-row-4 g-s-col-2"><CustomModal content={getThumbnail(photo2)} caption={getThumbnail(photo2)} classes="thumbnail"></CustomModal></div>
      </div>
    </div>
  );
}

export default Retratos;
