import Cabeza from '../../assets/img/Cabeza.svg';
import { information } from '../../data/information';

function Skills() {
  return (  
    <>
      <div>
        <h1 className='TitleFull'><img src={Cabeza} alt="" />{information.contactTitle[2]}</h1>
        <div className='fullDescription'>
          <li>Capacidad de trabajo en equipo</li>
          <li>Mente abierta</li>
          <li>Capacidad de adaptacion</li>
          <li>Pro activo</li>
        </div>
      </div>
    </>
  );
}

export default Skills;