import { useRef, useLayoutEffect } from 'react';

export const useScroll = () => {
    const ref      = useRef(null);
    const onScroll = () => {
        console.log('elementscroll');
        window.dispatchEvent(new CustomEvent('elementScroll'));
    };
    useLayoutEffect(() => {
        //@ts-ignore
        ref.current.addEventListener('scroll', onScroll);
        //@ts-ignore
        return () => ref.current.removeEventListener('scroll', onScroll);
    }, []);
    return ref;
};
    
