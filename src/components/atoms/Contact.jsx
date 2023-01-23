import Telefono from '../../assets/img/Telefono.svg';
import Gmail from '../../assets/img/Gmail.svg';
import Facebook from '../../assets/img/Facebook.svg';
import Ubicacion from '../../assets/img/Ubicacion.svg';
import { information } from '../../data/information';
import '../../assets/styles/index.css'


function Contact({telefono, titulo, correo, red, ubicacion}) {
  return (  
    <>
      <div className='container-conct'>

            <div>
              <h1 className='TitleFull'>{titulo}</h1>
            </div>

            <div className='content-Redes'>
              <h1 className='informa'><img src={Telefono} alt="" /> {information.phoneNumber}</h1>
            </div>

            <div className='content-Redes'>
              <h1 className='informa'><img src={Gmail} alt="" /> {information.myEmail}</h1>
            </div>

            <div className='content-Redes'>
              <h1 className='informa' ><img src={Facebook} alt="" /> {information.myFacebook}</h1>
            </div>

            <div className='content-Redes'>
              <h1  className='informa'><img src={Ubicacion} alt="" /> {information.myUbication}</h1>
            </div>
      </div>

    </>
  );
}

export default Contact;