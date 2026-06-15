import '../styles/Parcours.css'
import { useState, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';


function Parcours(){

    const ref = useRef(null);
      const [visible, setVisible] = useState(false);
      const [step, setStep] = useState(0);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setVisible(entry.isIntersecting);
          },
          {
            threshold: 0.5,
            
          }
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => observer.disconnect();
      }, []);
    
    

    return (
        <section className="parcours" id='parcours' ref={ref}>
               <h2 className="parcours-title">Mon Parcours</h2>
               <p className="parcours-text">Mon évolution vers le métier de développeur Web</p>

        <div className='parcours-container'>
               <div className={`parcours-container_1 ${visible ? "show" : ""}`} onMouseEnter={() => setStep(1)}>
                        <FontAwesomeIcon icon={faGraduationCap}  className='parcours-container_icon'/> 
                            <div className='container'>
                              <h3 className='container_title'>Baccaulérat STI2D - SIN<span> (2014)</span></h3>
                              <p className='container_text'>Formation axée sur les technologies numériques, la programmation, les réseaux et les systèmes informatiques.</p>
                              <a className='container_link' href=''>En savoir plus</a>
                            </div>
               </div>

               <div className={`parcours-container_2 ${visible ? "show" : ""}`}onMouseEnter={() => setStep(2)}>   
                        <FontAwesomeIcon icon={faGraduationCap} className='parcours-container_icon' />    
                            <div className='container'>
                              <h3 className='container_title'>Licence STAPS<br></br><span> (2018)</span></h3>
                              <p className='container_text'>Formation pluridisciplinaire en sciences du sport, physiologie, biomécanique et méthodologie de l’entraînement.</p>
                              <a className='container_link' href=''>En savoir plus</a>
                            </div>           
               </div>

               <div className={`parcours-container_3 ${visible ? "show" : ""}`} onMouseEnter={() => setStep(3)}>  
                        <FontAwesomeIcon icon={faGraduationCap} className='parcours-container_icon'/> 
                            <div className='container'>
                              <h3 className='container_title'>Certification Développeur Web<br></br><span> (2026)</span></h3>
                              <p className='container_text'>Formation professionnalisante en développement web couvrant HTML, CSS, JavaScript, React, Node.js et les bases de données.</p>
                              <a className='container_link' href=''>En savoir plus</a>
                            </div>
               </div>
        </div>

    <div className="parcours-animation">
        <span className={`animation-circle_1 ${step >= 1 ? "active" : ""}`}></span>
        <span className={`animation-line_1 ${step >= 2 ? "active" : ""}`}></span>
        <span className={`animation-circle_2 ${step >= 2 ? "active" : ""}`}></span>
        <span className={`animation-line_2 ${step >= 3 ? "active" : ""}`}></span>
        <span className={`animation-circle_3 ${step >= 3 ? "active" : ""}`}></span>
    </div>
</section>
    )
}

export default Parcours