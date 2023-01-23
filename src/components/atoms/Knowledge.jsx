import Computadora from '../../assets/img/Computadora.svg';
import { information } from '../../data/information';

function Knowledge() {
  return (  
    <>
      <div>
        <h1 className='TitleFull'><img src={Computadora} alt="" />{information.contactTitle[1]}</h1>
        <div className='fullDescription'>
          <li>C++</li>
          <li>Requerimientos de Software</li>
          <li>MySQL</li>
          <li>JavaScript</li>
        </div>
      </div>
    </>
  );
}

export default Knowledge;