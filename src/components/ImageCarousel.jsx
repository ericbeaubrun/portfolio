import  { useEffect, useRef } from 'react';
// import './ImageCarousel.scss';
import '/src/components/ImageCarousel.scss';

const ImageCarousel = ({ images }) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const firstImage = carouselRef.current.firstElementChild;
                carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
                carouselRef.current.style.transform = 'translateX(-100%)';

                setTimeout(() => {
                    carouselRef.current.style.transition = 'none';
                    carouselRef.current.appendChild(firstImage);
                    carouselRef.current.style.transform = 'translateX(0)';
                }, 500);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel" ref={carouselRef}>
                {images.map((src, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={src} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
