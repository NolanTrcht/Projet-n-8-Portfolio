import "../styles/Projets.css"
import data from "../data/data.json"

function Projets() {

    return(
        <div className="project" id="projets">
            <h2 className="project-title">Mes Projets</h2>
            <p className="project-text">J'ai beaucoup de projets a présenter blavblablabalbalbablababl</p>
            <div className="project-cards">
                {data.map((item) => (
                    <a key={item.id} href={item.github} className="card">
                        <div className="card-image" key={item.id}>
                            <img  src={item.pictures[0]} alt={item.title}/>
                        </div>

                        <div className="card-content">
                            <h3 className="card-content_title">{item.title}</h3>
                             <ul className="card-content_skills">
                                 {item.skills.map((skill, index) => (
                                 <li className="card-content_tags" key={index}>{skill}</li>
                                 ))}
                            </ul>
                     </div>
                   </a> ))}
            </div>
        </div>
    )
}

export default Projets