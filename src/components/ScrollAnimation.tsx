import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';

interface IScrollAnimationProps {
    initialAnimation : string;
    finalAnimation: string;
}

export const ScrollAnimation : React.FC<IScrollAnimationProps> = ({
    initialAnimation,
    finalAnimation,
    children
}): React.ReactElement => {
    const [isAnimating, setIsAnimating] = useState(false);
    const scrollContainerRef            = useRef(null);

    const onScroll = () => {
        console.log('scroll');
        if (scrollContainerRef.current) {
            //@ts-ignore
            const topPosition    = scrollContainerRef.current.getBoundingClientRect().top;
            const scrollPosition = window.scrollY + window.innerHeight;
            
            if (topPosition < scrollPosition) {
                setIsAnimating(true);
            } else {
                setIsAnimating(false);
            }
        }
        
    };

    useLayoutEffect(() => {
        window.addEventListener('elementScroll', onScroll);
        return () => window.removeEventListener('elementScroll', onScroll); 
    }, []);

    return (
        <AnimatibleContainer
            isAnimating={isAnimating}
            initialAnimation={initialAnimation}
            finalAnimation={finalAnimation} 
            ref={scrollContainerRef}
        >
            {children}
        </AnimatibleContainer>
    );
};

interface IAnimatibleContainerProps extends IScrollAnimationProps {
    isAnimating : boolean;
}

const AnimatibleContainer = styled.div<IAnimatibleContainerProps>`
    transition: all 1s;
    background-color: red;
    ${({ isAnimating, initialAnimation, finalAnimation }) => isAnimating ? finalAnimation : initialAnimation}
`;