import CustomModal from '../CustomModal/customModal.jsx';
import FadeInSection from '../FadeInSection/fadeInSection.jsx';
import transition from '../../images/transition.png';

import balcony from '../../images/pre-boda/balcony.jpeg';
import field from '../../images/pre-boda/field.jpeg';
import blue from '../../images/pre-boda/blue.jpeg';
import lake1 from '../../images/pre-boda/lake-1.jpeg';
import lake2 from '../../images/pre-boda/lake-2.jpeg';
import lake3 from '../../images/pre-boda/lake-3.jpeg';
import lake4 from '../../images/pre-boda/lake-4.jpeg';
import blue2 from '../../images/pre-boda/blue-2.jpeg';
import ring from '../../images/pre-boda/ring.jpeg';

import './retratos.css';

const photos = [
  //row 1 - 2
  { id: 1, link: balcony, classes: "g-s-col-1 g-s-row-1 g-row-s-2" },
  { id: 6, link: field, classes: "g-s-col-2 g-s-row-1" },
  { id: 7, link: blue, classes: "g-s-col-2 g-s-row-2 g-row-s-2" },
  //row 3
  { id: 2, link: ring, classes: "g-s-col-1 g-s-row-3" },
  //row 4
  { id: 3, link: lake1, classes: "g-s-col-1 g-s-row-4" },
  { id: 8, link: lake3, classes: "g-s-col-2 g-s-row-4" },
  //row 5
  { id: 10, link: blue2, classes: "g-s-col-1 g-s-row-5 g-row-s-2" },
  { id: 4, link: lake2, classes: "g-s-col-2 g-s-row-5" },
  //row 6
  { id: 5, link: lake4, classes: "g-s-col-2 g-s-row-6" },

];

function getThumbnail(link) {
  return <img src={link}/>;
}

function Retratos() {
  return (
    <div id="retratos" className="retratos-bg">
      <div className="transition-container"><img className="transition" src={transition} alt="" /></div>
 
      <div className="title">
        <FadeInSection viewHeight="20vh">
          <div className="nuestros">Nuestros</div>
          <div className="retratos-title">Retratos</div>
        </FadeInSection>
      </div>
      <FadeInSection viewHeight="20vh">
        <div className="body-thumbnails">
          {photos.map(({id, link, classes}) => {
            return <FadeInSection viewHeight="5vh" classes={classes}><CustomModal content={getThumbnail(link)} caption={getThumbnail(link)} classes="thumbnail"></CustomModal></FadeInSection>
          })}
        </div>
      </FadeInSection>
    </div>
  );
}

export default Retratos;
