import './ContactPicture.scss';
import ppIcon from '/resources/pp2.jpg';

export const ContactPicture = ({altText}) => {
    return (
        <div className="profile-picture-container">
            <img src={ppIcon} alt={altText} className="profile-picture" />
        </div>
    );
};

