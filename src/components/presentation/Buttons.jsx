import './Buttons.scss';

export const Buttons = () => {
    const handleLinkedinButton = () => {
        window.location.href = "https://www.linkedin.com/in/eric-adelaide-beaubrun/";
    };

    const handleCvButton = () => {
        window.location.href = "/resources/cv_eric_adelaide_beaubrun.pdf";
    };

    return (
        <div className="buttonWrapper">
            <button className="btn btn-dark" onClick={handleLinkedinButton}>Linkedin</button>
            <button className="btn btn-light" onClick={handleCvButton}>CV</button>
        </div>
    );
};

