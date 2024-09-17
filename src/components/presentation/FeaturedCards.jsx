import './FeaturedCards.scss';

const FeaturedCards = ({ imageSrc, title, subtitle, links }) => {
    return (
        <div className="featured-card">
            <div className="featured-card-content">
                <div className="imgBx">
                    <img src={imageSrc} alt={title} />
                </div>
                <div className="contentBx">
                    <h3>
                        {title}
                        <br />
                        <span>{subtitle}</span>
                    </h3>
                </div>
            </div>
            <ul className="sci">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CardContainer = () => {
    const cardsData = [
        {
            imageSrc: "",
            title: "Lion",
            subtitle: "Happy Birthday",
            links: [
                { href: "#", text: "github.io" },
                // { href: "#", text: "birth" },
                // { href: "#", text: "day" },
            ],
        },
        {
            imageSrc: "https://skillicons.dev/icons?i=react",
            title: "Frog",
            subtitle: "Happy Birthday",
            links: [
                { href: "#", text: "github.io" },
                // { href: "#", text: "birth" },
                // { href: "#", text: "day" },
            ],
        },
        {
            imageSrc: "https://skillicons.dev/icons?theme=light&i=react",
            title: "Giraffe",
            subtitle: "Happy Birthday",
            links: [
                { href: "#", text: "github.io" },
                // { href: "#", text: "birth" },
                // { href: "#", text: "day" },
            ],
        },
    ];

    return (
            <div className="featured-card-container">
                {cardsData.map((card, index) => (
                    <FeaturedCards
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

export default CardContainer;
