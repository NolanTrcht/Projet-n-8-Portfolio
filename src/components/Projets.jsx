import "../styles/Projets.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import data from "../data/data.json"

function Projets() {

    return(
        <section className="project" id="projets">
            <h2 className="project-title">Mes Projets</h2>
            <p className="project-text">Des projets concrets pour mettre en pratique mes compétences.</p>
            <div className="project-cards">
                {data.map((item) => (
                    <a key={item.id} href={item.github} className="card" target="_blank">
                        <div className="card-image" key={item.id}>
                            
                            <img  src={item.pictures[0]} alt={item.title}/>
                        </div>

                        <div className="card-content">
                            <div className="container-title">
                            {item.travaux === true ? <FontAwesomeIcon icon={faHammer} className="card-image_icon"/> : null}
                            <h3 className="card-content_title">{item.title}</h3>
                            </div>

                            <p className="card-content_text1">{item.description[0]}</p>
                            <p className="card-content_text2">{item.description[1]}</p>
                            <p className="card-content_text3">{item.description[2]}</p>
                             <ul className="card-content_skills">
                                 {item.skills.map((skill, index) => (
                                 <li className="card-content_tags" key={index}>{skill}</li>
                                 ))}
                            </ul>
                     </div>
                   </a> ))}
            </div>
        </section>
    )
}

export default Projets