// import  { useState, useEffect } from "react";
// import "./CircleCarousel.scss"; // Le fichier CSS pour la disposition circulaire
//
// const initialArticles = [
//     { id: 1, title: "Article 1", image: "https://via.placeholder.com/150", url: "/article-1" },
//     { id: 2, title: "Article 2", image: "https://via.placeholder.com/150", url: "/article-2" },
//     { id: 3, title: "Article 3", image: "https://via.placeholder.com/150", url: "/article-3" },
//     { id: 4, title: "Article 4", image: "https://via.placeholder.com/150", url: "/article-4" },
//     { id: 5, title: "Article 5", image: "https://via.placeholder.com/150", url: "/article-5" },
//     { id: 6, title: "Article 6", image: "https://via.placeholder.com/150", url: "/article-6" },
// ];
//
// const CircleCarousel = () => {
//     const [articles, setArticles] = useState([]); // Démarrer avec un tableau vide
//     const [index, setIndex] = useState(0); // Un compteur pour l'ajout d'articles
//
//     // Utiliser useEffect pour initialiser les articles lors de l'arrivée sur la page
//     useEffect(() => {
//         if (index < initialArticles.length) {
//             const timer = setTimeout(() => {
//                 setArticles((prevArticles) => [...prevArticles, initialArticles[index]]);
//                 setIndex((prevIndex) => prevIndex + 1);
//             }, 200); // 1 seconde de délai entre chaque ajout d'article
//
//             return () => clearTimeout(timer); // Nettoyage du timer
//         }
//     }, [index]); // Le hook est déclenché chaque fois que l'index change
//
//     return (
//         <div className="circle-carousel">
//             <div className="circle">
//                 {articles.map((article, index) => {
//                     const angle = (360 / articles.length) * index;
//                     return (
//                         <a
//                             key={article.id} // Utilisation de l'id de l'article comme clé unique
//                             href={article.url} // Utilisation de <a> pour rendre l'élément cliquable
//                             className="circle-item"
//                             style={{
//                                 transform: `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`,
//                             }}
//                         >
//                             <img src={article.image} alt={article.title} />
//                             <h3>{article.title}</h3>
//                         </a>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };
//
// export default CircleCarousel;




import { useState, useEffect } from "react";
import { TextEncrypted } from "./TextEncrypted"; // Importer le composant typewriting
import "./CircleCarousel.scss";

const ProjectCarouselCard = ({ imageSrc, title, subtitle, links }) => {
    const [hovered, setHovered] = useState(false); // État pour gérer le hover

    return (
        <div
            className="carousel-project-card"
            onMouseEnter={() => setHovered(true)}  // Activer l'état hovered au survol
            onMouseLeave={() => setHovered(false)} // Désactiver l'état hovered quand la souris quitte
        >
            <div className="carousel-project-card-content">
                <div className="carousel-project-imgBx">
                    <img src={imageSrc} alt={title} />
                </div>
                <div className="carousel-project-contentBx">
                    <h3>
                        {title}
                        <br />
                        <span>{subtitle}</span>
                    </h3>
                </div>
            </div>
            <ul className="carousel-project-sci">
                {links.map((link, index) => (
                    <li key={index}>
                        {/* Utilisation de TextEncrypted pour le lien */}
                        {hovered ? (
                            <a href={link.href}>
                                <TextEncrypted text={link.text} />
                            </a>
                        ) : (
                            <a href={link.href}>{link.text}</a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};


const CarouselCardContainer = () => {
    const cardsData = [
        {
            imageSrc: "https://skillicons.dev/icons?i=react",
            title: "Lion",
            subtitle: "Happy Birthday",
            links: [
                { href: "#", text: "easy-wl-yt.adelaide-beaubrun.fr" },
                // { href: "#", text: "birth" },
                // { href: "#", text: "day" },
            ],
        },
    ];

    return (
        <div className="carousel-project-card-container">
            {cardsData.map((card, index) => (
                <ProjectCarouselCard
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    subtitle={card.subtitle}
                    links={card.links}
                />
            ))}
        </div>
    );
};


const initialArticles = [
    { id: 1, title: "Article 1", image: "https://via.placeholder.com/150", url: "/article-1" },
    { id: 2, title: "Article 2", image: "https://via.placeholder.com/150", url: "/article-2" },
    { id: 3, title: "Article 3", image: "https://via.placeholder.com/150", url: "/article-3" },
    { id: 4, title: "Article 4", image: "https://via.placeholder.com/150", url: "/article-4" },
    { id: 5, title: "Article 5", image: "https://via.placeholder.com/150", url: "/article-5" },
    { id: 6, title: "Article 6", image: "https://via.placeholder.com/150", url: "/article-6" },
];

const CircleCarousel = () => {
    const [articles, setArticles] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < initialArticles.length) {
            const timer = setTimeout(() => {
                setArticles((prevArticles) => [...prevArticles, initialArticles[index]]);
                setIndex((prevIndex) => prevIndex + 1);
            }, 250);

            return () => clearTimeout(timer); // Nettoyage du timer
        }
    }, [index]);

    return (
        <div className="circle-carousel">
            <div className="circle">
                {articles.map((article, index) => {
                    const angle = (360 / articles.length) * index;
                    return (
                        <div
                            key={article.id}
                            className="circle-item"
                            style={{
                                transform: `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`,
                            }}
                        >
                            <CarouselCardContainer
                                imageSrc={article.image}
                                title={article.title}
                                subtitle="Subtitle Here"
                                links={[{ href: article.url, text: "Read More" }]}
                            />
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default CircleCarousel;
