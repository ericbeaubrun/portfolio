import './ContactPicture.scss';

import ppIcon from '/resources/avatar.png';

const ContactPicture = ({altText}) => {
    return (
        <div className="profile-picture-container">
            <img src={ppIcon} alt={altText} className="profile-picture"/>
        </div>
    );
};

export default ContactPicture;
