import "../styles/Contact.css"


function Contact(){
    return (
        <div className="contact" id="contact">
            <h2 className="contact-title">Démarrons un projet ensemble, n'hésitez pas à me contacter</h2>
            <form action=""  className="contact-form">
                <label htmlFor="name" className="label">Nom</label>
                <input id="name" type="text" placeholder="Nom" className="form-input"/>

                <label htmlFor="email" className="label">Email</label>
                <input type="email" placeholder="Email" className="form-input"/>

                <label htmlFor="textarea" className="label">Votre message</label>
                <textarea name="textarea" id="" placeholder="Votre message" className="form-textarea"></textarea>
                <input type="submit" value="ME CONTACTER" name="" id="" className="form-button"/>

            </form>
        </div>
    )
}
export default Contact