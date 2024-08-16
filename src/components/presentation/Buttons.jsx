import './Buttons.scss';

export const Buttons = ({textBtn1, linkBtn1, textBtn2, linkBtn2}) => {
    const handleLinkedinButton = () => {
        window.location.href = linkBtn1 ;
    };

    const handleCvButton = () => {
        window.location.href = linkBtn2;
    };

    return (
        <div className="buttonWrapper">
            <button className="btn btn-dark" onClick={handleLinkedinButton}>{textBtn1}</button>
            <button className="btn btn-light" onClick={handleCvButton}>{textBtn2}</button>
        </div>
    );
};

