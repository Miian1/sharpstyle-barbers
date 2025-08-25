
import { useEffect, useRef, useState } from 'react';

type AnimationOptions = {
    threshold?: number;
    triggerOnce?: boolean;
};

const useScrollAnimation = <T extends HTMLElement>(options?: AnimationOptions) => {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    const { threshold = 0.1, triggerOnce = true } = options || {};

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else {
                    if (!triggerOnce) {
                        setIsVisible(false);
                    }
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, threshold, triggerOnce]);

    return { ref, isVisible };
};

export default useScrollAnimation;
