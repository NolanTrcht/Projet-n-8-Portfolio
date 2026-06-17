import "../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return(
        <footer className="footer">
            <a href="https://github.com/NolanTrcht?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} className="footer-icon" /></a>
            <a href="https://www.linkedin.com/in/nolan-tranchant-6b43a6153/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="footer-icon"/></a>
           <a href="mailto:Nolan.Tranchant@hotmail.fr?subject=Contact&body=Bonjour, je vous contacte car..." target="_blank"> <FontAwesomeIcon icon={faEnvelope} className="footer-icon"/></a>
        </footer>
    )
}

export default Footer