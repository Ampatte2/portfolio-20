import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';

export enum ClipTypes {
    ELLIPSE = 'ellipse',
    CIRCLE = 'circle'
}

interface AnimatedCircleProps extends React.HTMLAttributes<HTMLDivElement> {
    clipStart?: string;
    clipEnd?: string;
    type?: ClipTypes;
    backgroundColor: string;
    animation?: string;
    animationDelay?: number;
    xInitial?: number;
    yInitial?: number;
    xFinal?: number;
    yFinal?: number;
    id?: string;
    width?: string;
    height?: string;
    widthFinal?: string;
    heightFinal?: string;
}

export const AnimatedCircle: React.FC<AnimatedCircleProps> = ({
    children,
    ...props
}) => {
    return ( 
        <AnimatedCircleDiv {...props}>
            {children}
        </AnimatedCircleDiv>
    );
};

const AnimatedCircleDiv = styled.div<AnimatedCircleProps>`
    position: fixed;
    z-index: 2;
    ${Mixins.flex('center')};
    border-radius: 999px;
    width: ${props => props.width};
    height: ${props => props.height};
    ${({
        theme,
        animationDelay,
        animation,
        xInitial,
        yInitial,
        xFinal,
        yFinal,
        clipStart,
        clipEnd,
        backgroundColor,
        id,
        type,
    }): string => `
        clip-path: ${type}(0%);
        animation: ${id + ' ' + animation};
        animation-delay: ${animationDelay}s;
        background-color: ${theme.colors[backgroundColor] || backgroundColor};
        opacity:0;
        @keyframes ${id} {
                    0% {
                        transform: translate(${xInitial}px, ${yInitial}px);
                        clip-path: ${type}(${clipStart});
                    }
                    100%{
                        opacity:1;
                        transform: translate(${xFinal}px, ${yFinal}px);
                        clip-path: ${type}(${clipEnd});
                    }
                } `
};
`;