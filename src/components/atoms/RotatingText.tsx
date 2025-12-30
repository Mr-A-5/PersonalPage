import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type RotatingTextProps = {
    words: string[];
    durations: number[]; // in milliseconds, same length as words
    className?: string;
};

export function RotatingText({
    words,
    durations,
    className,
}: RotatingTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
    const id = setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
    }, durations[index]);
        return () => clearTimeout(id);
    }, [index, durations, words.length]);

    return (
        <span className={className}>
        <AnimatePresence mode="wait">
        <motion.span
            key={words[index]}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="block"
        >
            {words[index]}
        </motion.span>
        </AnimatePresence>
    </span>
);
}
