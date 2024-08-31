// import "./ContactForm.scss"
import "/src/components/contact/ContactForm.scss"

import {useState} from 'react';
import emailjs from 'emailjs-com';

export const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n0ckxdy', 'template_q8yzqaj', e.target, 'mexDdWEEhs-E5pxJW')
            .then((result) => {
                console.log(result.text);
                alert("Messsage envoyé avec succès !");
            }, (error) => {
                console.log(error.text);
                alert("Une erreur s'est produite, veuillez réessayer.");
            });

        setFormData({name: '', email: '', message: ''});
    };

    return (<>
            <div className="contactForm">
                <h2>Envoyer un message</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nom :</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Entrez votre nom"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Entrez votre email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message :</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Entrez votre message"
                            required
                        />
                    </div>
                    <button id="form-submit-btn" type="submit">&#x27A4;&nbsp;&nbsp;Envoyer&nbsp;</button>
                </form>

            </div>
            <div className="spacing"></div>
        </>
    );
};


