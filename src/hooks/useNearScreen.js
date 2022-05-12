import { useState, useEffect, useRef } from 'react';

export const useNearScreen = ({ margin = '100px', externalRef, once = true } = {}) => {
    const [isNearScreen, setShow] = useState(false);
    const elementRef = useRef(); //sirve para hacerle una referencia aun elemento del doom
    useEffect(() => {
        let observer;
        const element = externalRef ? externalRef.current : elementRef.current;

        const enChange = (entries, observer) => {
                const el = entries[0];
                if (el.isIntersecting) {
                    setShow(true)
                    once && observer.disconnect()
                } else {
                    !once && setShow(false)
                }
            }
            //promise resolve envuelve una promesa
        Promise.resolve(
            typeof IntersectionObserver === 'undefined' ?
            IntersectionObserver : import ('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(enChange, {
                rootMargin: margin
            })
            if (element) observer.observe(element)
        })
        return () => observer && observer.disconnect();
    });

    return { isNearScreen, elementRef };
}
//