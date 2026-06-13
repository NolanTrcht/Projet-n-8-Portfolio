import "../styles/Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

import avatar from "/profil.png"

function Nav() {

const [isOpen, setIsOpen] = useState(true);



return (
  <nav className={isOpen ? "Nav" : "Nav active"}>
    <div className="Nav-logo">
        <img src={avatar} className="Nav-logo_img" />
    </div>
    <ul className={isOpen ? "Nav-all_li" : "Nav-all_li active"}>
      <li className="Nav-li"><a href="#projets">Projets</a></li>
      <li className="Nav-li"><a href="#skills">Compétences</a></li>
      <li className="Nav-li"><a href="#parcours">Parcours</a></li>
      <li className="Nav-li"><a href="#contact">Contact</a></li>
     </ul>

    <div className="Nav-contact">
      <button className="Nav-contact_link" href="#"><FontAwesomeIcon icon={faPhone} className="Nav-contact_phone"/></button>
      <FontAwesomeIcon icon={faBars} className={isOpen ? "Nav-contact_menumobile" : "Nav-contact_menumobile active"} onClick={() => setIsOpen(!isOpen)}/>
      <FontAwesomeIcon icon={faXmark} className={isOpen ? "Nav-contact_cross" : "Nav-contact_cross active"} onClick={() => setIsOpen(!isOpen)}/>
    </div>


  </nav>
)
}

export default Nav