import './ProfilePicture2.scss';
import ppIcon from '/resources/profilePicture2.png';

export const ProfilePicture2 = ({altText}) => {
    return (
        <div className="profile-picture-container">
            <img src={ppIcon} alt={altText} className="profile-picture" />
        </div>
    );
};

