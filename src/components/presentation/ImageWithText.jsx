import '../presentation/ImageWithText.scss';
import ImageCarousel from './ImageCarousel.jsx';


const ImageWithText = ({ images, paragraphs }) => {
    return (
        <div className="image-text-container">
            <ImageCarousel images={images} />
            <div className="text-container">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="paragraph-text">{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default ImageWithText;
