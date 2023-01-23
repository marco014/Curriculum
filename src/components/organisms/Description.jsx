import Bandera from '../../assets/img/Bandera.svg';
import Cabeza from '../../assets/img/Cabeza.svg';
import Calendario from '../../assets/img/Calendario.svg';
import Computadora from '../../assets/img/Computadora.svg';
import Facebook from '../../assets/img/Facebook.svg';
import Gmail from '../../assets/img/Gmail.svg';
import Maletin from '../../assets/img/Maletin.svg';
import Marco from '../../assets/img/Marco.svg';
import Sombrero from '../../assets/img/Sombrero.svg';
import Usuario from '../../assets/img/Usuario.svg';
import Data from '../atoms/Data';
import Contact from '../atoms/Contact';
import Knowledge from '../atoms/Knowledge';
import Skills from '../atoms/Skills';
import Languages from '../atoms/Languages';
import { information } from '../../data/information';
import Home from '../../pages/Home';

function Description() {
    return (  
    <header class="container">
        <div class="conetent-cafe">
            <img className='img1' src={Marco} alt="" />
            <div className='content-aboutme'>
                <Data/>
            </div>
            <Contact titulo={information.contactTitle[0]} />
            <div class="content-header-cafe">
                <div className='content-data'>
                    <Knowledge/>
                    <Skills/>
                    <Languages/>
                </div>
            </div>
        </div>


        <div class="content-gris">
            <div class="fondo-gris">
                <div class="tile-fil">
                    <h1 className='title-fill-name'>{information.nombreTitle}</h1>
                    <p className='title-fill-description'>{information.Ing}</p>
                </div>
            </div>

            <div class="informa-person">
                <h1 className='perfilPerson'><img className='imagen1' src={Usuario} alt="" /> Perfil personal</h1>
                <div class="informa-person-paragraft">
                    <p>Estudiante de la carrera de Software, con conocimiento básicos en programación, requerimientos de software, base de datos, entre otros. Con disposición para seguir aprendiendo y trabajar.</p>
                </div>
            </div>

            <div class="informa-person">
                <h1 className='perfilPerson'><img src={Sombrero} alt="" /> Formación Academica</h1>
                <div class="informa-person-paragraft">
                    <p class="IngStundent">Ingenieria en Software (Estudiante)</p>
                    <p>Universidad Politecnica de Chiapas
                        (2021 - actualmente)</p>
                        <p className="ForAcademy">Tecnico Agropecuario</p>
                        <p>CBTA #44 (2016-2019)</p>
                        <p>Secundaria Jose Maria Morelos y Pavón
                        (2013-2016)</p><head></head>
                </div>
            </div>

            <div class="informa-person">
                <h1 className='perfilPerson'><img src={Maletin} alt="" /> Experiencia Laboral</h1>
                <div class="informa-person-paragraft">
                    <p>Proyectos Integradores Estudiantiles</p>
                    <li>En la creación de una aplicacion, desarrollado para el control de tiempo de los usuarios.</li>
                    <li>Participación de una aplicacion de escritorio para el gestionar un consultorio medico.</li>
                </div>
            </div>
        </div>
        </header>
    );
}

export default Description;