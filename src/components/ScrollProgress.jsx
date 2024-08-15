import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressLine = () => {
    const { scrollYProgress } = useScroll();
    const [scrollYValue, setScrollYValue] = useState(0);

    useEffect(() => {
        return scrollYProgress.onChange(latest => {
            setScrollYValue(latest);
        });
    }, [scrollYProgress]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${scrollYValue * 100}%`,
                height: '5px',
                backgroundColor: '#383735',
                zIndex: 100,
            }}
        />
    );
};

export default ScrollProgressLine;
