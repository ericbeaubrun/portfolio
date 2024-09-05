import "./ProfileStats.scss"
import {useEffect, useRef, useState} from "react";
import CountUp from "react-countup";

const stats = [
    {
        num: 6,
        text: "Projets",
    },
    {
        num: 4,
        text: "Ans d'expériences",
    },
    {
        num: 1,
        text: "Stage",
    },
];

const ProfileStats = () => {
    const [startCount, setStartCount] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section>
            <div className="stats-container" ref={statsRef}>
                {stats.map((item, index) => (
                    <div key={index}>
                        {startCount && (
                            <CountUp
                                end={item.num}
                                duration={4}
                                delay={0.5}
                                className="stats-number"
                            />
                        )}
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProfileStats;
