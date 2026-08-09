import "../styles/Contact.css"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { useRef } from "react";


function Contact(){
    const form = useRef();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isSent, setIsSent] = useState(false)

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            
        })
    }

     const handleSubmit = (e) => {
        e.preventDefault();

         emailjs.sendForm(
        "service_mwoe2g6",
        "template_1ntbksl",
        form.current,
        {
            publicKey: "yM6DoBMAlJ8kvr3KX"
        }
    )
      .then(() => {
            console.log("Message envoyé !");

            setFormData({
                name: "",
                email: "",
                message: ""
            });

            setIsSent(true);

            setTimeout(() => {
                setIsSent(false);
            }, 3000);
        })
        .catch((error) => {
            console.error("Erreur :", error);
        });
    };

   
    return (
        <section className="contact" id="contact">
            <h2 className="contact-title">Discutons de votre prochain projet</h2>
            <form ref={form} action=""  className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="label">Nom</label>
                <input name="name" id="name" type="text" placeholder="Nom" className="form-input" value={formData.name} onChange={handleChange} required minLength="2"/>

                <label htmlFor="email" className="label">Email</label>
                <input name="email" type="email" placeholder="Email" className="form-input" value={formData.email} onChange={handleChange} required minLength="4"/>

                <label htmlFor="message" className="label">Votre message</label>
                <textarea name="message" id="message" placeholder="Votre message" className="form-textarea" value={formData.message} onChange={handleChange} required minLength="1"></textarea>
                <input  type="submit" value="ME CONTACTER" name="" id="" className="form-button"/>
                
                <div className="contact-send-container">
                    {isSent && (
                         <p className="contact-send">
                            Message envoyé ! Je vous recontacterai au plus vite.
                        </p>
                    )}
</div>
               

            </form>
        </section>
    )
}
export default Contact