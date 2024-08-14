import './CenteredImage.scss';
import img from '/resources/parcours.png'
const CenteredImage = ({ alt }) => {
    return (
        <div className={"imageWrapper"}>
            <img className={"responsiveImage"} src={img} alt={alt} />
        </div>
    );
};

export default CenteredImage;
