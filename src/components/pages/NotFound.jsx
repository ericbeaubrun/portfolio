// import './NotFound.scss';
import '/src/components/pages/NotFound.scss';

import notFoundImage from '/resources/404.gif';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <img
                    src={notFoundImage}
                    alt="Page Not Found"
                    className="not-found-gif"
                />
                <h1 className="not-found-text">Oups ! Page non trouvée.</h1>
                <p className="not-found-description">
                    La page que vous recherchez est introuvable.&nbsp;
                    <a href={"/portfolio/"}>Cliquez ici</a>
                    &nbsp; pour aller à l'accueil.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
