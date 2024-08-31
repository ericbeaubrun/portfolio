// import '../ImageWithText.scss';
import '/src/components/ImageWithText.scss';

// import ImageCarousel from './ImageCarousel';
import ImageCarousel from '/src/components/ImageCarousel';


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
