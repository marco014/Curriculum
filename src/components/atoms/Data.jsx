import Usuario from '../../assets/img/Usuario.svg';
import Bandera from '../../assets/img/Bandera.svg';
import Calendario from '../../assets/img/Calendario.svg'
import '../../assets/styles/index.css'
;
function Data() {
  return (  
    <>
      <div className='container-Data'>
          <div>
            <h1 className='inforP'><img src={Usuario} alt="" /> 21 Años</h1>
          </div>
          <div>
            <h1 className='inforP'><img src={Bandera} alt="" /> Nacionalidad Mexicana</h1>
          </div>
          <div>
            <h1 className='inforP'><img src={Calendario} alt="" /> 13 de Abril de 2001</h1>
          </div>
      </div>

    </>
  );
}

export default Data;
