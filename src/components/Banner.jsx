import "../styles/Banner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
import avatar from '/profil.png'
import nolan from '../assets/portrait1.png'

function Banner (){
    const words = ["Développeur","Passionné","Travailleur"];





    return(
    <div className="banner">
        
        <div className="banner-branding">
            <h1>Nolan TRANCHANT</h1>
            <p>"Derrière chaque projet réussi se cache une curiosité sans limite.
Continue d'apprendre,<br></br> le meilleur code est celui que tu écriras demain."</p>

            <div className="banner-button">
                  <a className="banner-button_skills" href="#projets">Projets<FontAwesomeIcon icon={faBriefcase} className="banner-button_icon" /></a>
                  <a className="banner-button_project" href="#skills">Compétences<FontAwesomeIcon icon={faArrowTrendUp} className="banner-button_icon" /></a>
            </div>
        </div>

            <div className="banner-sentences">
                <h2 className="banner-sentences_title">Je suis un<span className="banner-sentences_span"></span> </h2>
                
            </div>
        
        <div className="banner-img">
            <img src={nolan} alt="" className="banner-img_portrait" />
        </div>



    </div>

    )
}

export default Banner