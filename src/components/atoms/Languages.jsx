import Mundo from '../../assets/img/Mundo.svg';
import { information } from '../../data/information';

function Languages() {
  return (  
    <>
      <div>
        <h1 className='TitleFull'><img src={Mundo} alt="" />{information.contactTitle[3]}</h1>
        <p className='fullDescription A2'>{information.languages1}</p>
      </div>
    </>
  );
}

export default Languages;