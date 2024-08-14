import React from "react";
import {motion} from "framer-motion";

const Wrapper = (props) => {
    return <span className="word-wrapper">{props.children}</span>;
};

const tagMap = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2"
};

const AnimatedText = (props) => {
    const itemVariants = {
        hidden: {
            y: "150%",
            color: "#0055FF",
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
        },
        visible: {
            y: 0,
            color: "#323b4c",
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75}
        }
    };

    const splitWords = props.text.split(" ");
    const words = splitWords.map((word) => [...word.split(""), "\u00A0"]);

    const Tag = tagMap[props.type];

    return (
        <Tag>
            {
                words.map((word, index) => (
                <Wrapper key={index}>
                    {
                        word.map((letter, index) => (
                        <span
                            style={{
                                overflow: "hidden",
                                display: "inline-block"
                            }}
                            key={index}
                        >
                            <motion.span
                                style={{display: "inline-block"}}
                                variants={itemVariants}
                            >
                                {letter}
                            </motion.span>
                        </span>
                    ))}
                </Wrapper>
            ))}
        </Tag>
    );
};

export default AnimatedText;
