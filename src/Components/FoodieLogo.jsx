import { motion } from "motion/react";
import "./FoodieLogo.css";

const Flame = () => (
    <motion.svg
        width="28"
        height="28"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transformOrigin: "50% 85%" }}
        animate={{
            scale: [1, 1.04, 1],
            opacity: [0.9, 1, 0.9],
        }}
        transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    >
        <motion.path
            d="M32 6C32 6 46 21 46 35C46 47 39 56 32 56C25 56 18 47 18 35C18 23 25 15 32 6Z"
            fill="#FFC400"
        />
    </motion.svg>
);

export default function FoodieLogo() {
    const letters = [
        { char: "F", color: "#E52D12" },
        { char: "o", color: "#E52D12" },
        { char: "o", color: "#FFC400" },
        { char: "d", color: "#E52D12" },
        { char: "i", color: "#E52D12", hasFlame: true, customClass: "foodie-i" },
        { char: "e", color: "#E52D12" },
    ];

    const letterDelay = 0.18;
    const cursorDelay = letters.length * letterDelay + 0.35;

    return (
        <div className="foodie-logo-wrapper">
            <motion.div
                className="foodie-logo"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {letters.map((item, index) => (
                    <motion.div
                        key={index}
                        className="letter-wrapper"
                        initial={{
                            opacity: 0,
                            y: 24,
                            scale: 0.94,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.55,
                            delay: index * letterDelay,
                        }}
                    >
                        {item.hasFlame && (
                            <motion.div
                                className="flame-wrapper"
                                initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                    y: 8,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * letterDelay + 0.16,
                                }}
                            >
                                <Flame />
                            </motion.div>
                        )}

                        <div
                            className={`logo-letter ${item.customClass || ""}`}
                            style={{ color: item.color }}
                        >
                            {item.char}
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    className="cursor-wrapper"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: cursorDelay,
                    }}
                >
                    <div className="cursor-line"></div>
                </motion.div>
            </motion.div>
        </div>
    );
}