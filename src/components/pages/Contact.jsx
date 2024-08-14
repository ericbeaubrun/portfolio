import {ContactForm} from "../contact/ContactForm.jsx";
import Footer from "../Footer.jsx";
import {ContactCard} from "../contact/ContactCard.jsx";
import {ProfilePicture2} from "../contact/ProfilePicture2.jsx";

export const Contact = () => {
    return (
        <>
            {/*<div>*/}
            {/*    <ProfilePicture2*/}
            {/*        imageUrl="./resources/profilePicture2.png" // Remplacez par l'URL de la photo de profil*/}
            {/*        altText="Photo de profil"*/}
            {/*    />*/}
            {/*</div>*/}
            <ContactCard/>
            <ContactForm/>
            {/*<Footer/>*/}
        </>
    );
};
