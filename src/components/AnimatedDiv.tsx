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
    backgroundColor: string;
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
    z-index:2;
    position: absolute;
    ${({
        theme,
        animationDelay,
        animation,
        xInitial,
        yInitial,
        xFinal,
        yFinal,
        height,
        width,
        backgroundColor,
        id,
    }): string => `
        animation-delay: ${animationDelay}s;
        animation: ${id + ' ' + animation} forwards;
        background-color: ${theme.colors[backgroundColor] || backgroundColor};
        opacity:0;
        width: ${width};
        height: ${height};
        animation-delay: ${animationDelay}s;
        @keyframes ${id} {
            0% {
                transform: translate(${xInitial}px, ${yInitial}px);
            }
            100%{
                transform: translate(${xFinal}px, ${yFinal}px);
                opacity: 1;
            }
        } `
};
    
`;
