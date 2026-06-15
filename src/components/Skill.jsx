import '../styles/Skill.css'
import logoreact from '../assets/React_logo.jpg'
import logohtml from '../assets/html.jpg'
import logocss from '../assets/css.jpg'
import logojs from '../assets/js.jpg'
import logonode from '../assets/nodejs.jpg'
import { useEffect, useRef, useState } from "react";


function Skill(){


      const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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


    return(
        <section className="skills-container" id='skills' ref={ref}>
            <h1 className="skills-title">Mes Compétences</h1>
            <p className="skills-text">Les technologies que je maîtrise et utilise régulièrement</p>
        <div className="skills-progress_div">

        <div className="skills-progress_barre">
            <img src={logohtml}className="skills-progress_icon" alt='logo html'/>
            <span className={`skills-progress_span ${visible ? "show-1" : ""}`}></span>
            <p className="skills-progress_text">95%</p>
        </div>

        <div className="skills-progress_barre">
            <img src={logocss}className="skills-progress_icon"  alt='logo css'/>
            <span className={`skills-progress_span ${visible ? "show-2" : ""}`}></span>
            <p className="skills-progress_text">90%</p>
        </div>

        <div className="skills-progress_barre">
            <img src={logoreact}className="skills-progress_icon"  alt='logo react'/>
            <span  className={`skills-progress_span ${visible ? "show-3" : ""}`}></span>
            <p className="skills-progress_text">80%</p>
        </div>

        <div className="skills-progress_barre">
            <img src={logojs}className="skills-progress_icon"  alt='logo javascript'/>
            <span  className={`skills-progress_span ${visible ? "show-4" : ""}`}></span>
            <p className="skills-progress_text">70%</p>
        </div>

         <div className="skills-progress_barre">
            <img src={logonode}className="skills-progress_icon"  alt='logo node.js'/>
            <span  className={`skills-progress_span ${visible ? "show-5" : ""}`}></span>
            <p className="skills-progress_text">60%</p>
        </div>
     </div>
    </section>
    )
}

export default Skill