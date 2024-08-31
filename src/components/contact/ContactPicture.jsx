// import './ContactPicture.scss';
import '/src/components/contact/ContactPicture.scss';

import ppIcon from '/resources/profile_picture3.png';

const ContactPicture = ({altText}) => {
    return (
        <div className="profile-picture-container">
            <img src={ppIcon} alt={altText} className="profile-picture"/>
        </div>
    );
};

export default ContactPicture;
