import React from 'react';
import styled from 'styled-components';

export interface AnimatedDivProps {
    animation?: string;
    animationDelay?: number;
    xInitial?: number;
    yInitial?: number;
    xFinal?: number;
    yFinal?: number;
    id?: string;
    width?: string;
    height?: string;
}

export const AnimatedDiv: React.FC<AnimatedDivProps> = ({
    children,
    ...props
}) => {
    return (
        <Animation {...props}>
            {children}
        </Animation>
    );
};

const Animation = styled.div<AnimatedDivProps>`
    animation: ${props => props.id + ' ' + props.animation} forwards;
    z-index:1;
    opacity:0;
    position: absolute;
    width: ${props => props.width};
    height: ${props => props.height};
    animation-delay: ${props => props.animationDelay}s;
    @keyframes ${props => `
            ${props.id} {
            0% {
                transform: translate(${props.xInitial}px, ${props.yInitial}px);
            }
            100%{
                transform: translate(${props.xFinal}px, ${props.yFinal}px);
                opacity: 1;
            }
        } `
}
`;
