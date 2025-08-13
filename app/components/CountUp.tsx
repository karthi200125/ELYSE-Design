"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
    from?: number;
    to: number;
    duration?: number;
}

const CountUp = ({ from = 0, to, duration = 2 }: CountUpProps) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, { duration });
            return controls.stop;
        }
    }, [isInView, count, to, duration]);

    return (
        <motion.span ref={ref}>
            {rounded}
        </motion.span>
    );
};

export default CountUp;
