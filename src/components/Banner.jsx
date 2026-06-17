import "../styles/Banner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
import avatar from '/profil.png'
import nolan from '/portrait1.jpg'

function Banner (){
    const words = ["Développeur","Passionné","Travailleur"];





    return(
    <header className="banner">
        
        <div className="banner-branding">
            <h1>Nolan TRANCHANT</h1>
            <p>"Derrière chaque projet réussi se cache une curiosité sans limite.
<br></br>Continue d'apprendre, le meilleur code est celui que tu écriras demain."</p>

            <div className="banner-button">
                  <a className="banner-button_skills" href="#projets">Projets<FontAwesomeIcon icon={faBriefcase} className="banner-button_icon" /></a>
                  <a className="banner-button_project" href="#skills">Compétences<FontAwesomeIcon icon={faArrowTrendUp} className="banner-button_icon" /></a>
            </div>
        </div>

        
        
        <div className="banner-img">
            <img src={nolan} alt="Nolan Tranchant" className="banner-img_portrait" />
        </div>



    </header>

    )
}

export default Banner