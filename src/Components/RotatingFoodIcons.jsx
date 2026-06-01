import { motion } from "framer-motion";
import { Pizza, Beef, Sandwich, Cookie, IceCream, Coffee } from "lucide-react";

const foodIcons = [
    { Icon: Pizza, delay: 0 },
    { Icon: Beef, delay: 1 },
    { Icon: Sandwich, delay: 2 },
    { Icon: Cookie, delay: 3 },
    { Icon: IceCream, delay: 4 },
    { Icon: Coffee, delay: 5 }
];

export function RotatingFoodIcons() {
    const radius = 140; // malo veći krug

    return (
        <div className="relative w-96 h-96 flex items-center justify-center">
            {foodIcons.map(({ Icon, delay }, index) => {
                const angle = (index * 360) / foodIcons.length;

                return (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{
                            left: "50%",
                            top: "50%",
                            marginLeft: -32,
                            marginTop: -32
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }} // sporije
                    >
                        <motion.div
                            style={{
                                transform: `rotate(${angle}deg) translateX(${radius}px)`
                            }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    y: [0, -12, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: delay * 0.5
                                }}
                                whileHover={{ scale: 1.3 }} // hover efekt
                            >
                                <Icon
                                    className="w-28 h-28 text-orange-600 drop-shadow-xl cursor-pointer"
                                    strokeWidth={1.5}
                                    fill="currentColor"
                                    fillOpacity={0.25}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Središnji krug */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="w-56 h-56 rounded-full border-2 border-dashed border-orange-400/40 backdrop-blur-sm"
                />
            </div>
        </div>
    );
}
