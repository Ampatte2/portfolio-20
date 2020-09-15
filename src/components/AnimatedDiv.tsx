import React from 'react'
import styled from 'styled-components';

export interface AnimatedDivProps {
    animation?: string;
    animationDelay?: number;
    xInitial?: number;
    yInitial?: number;
    xFinal?: number;
    yFinal?: number;
    id?: string;
}

export const AnimatedDiv: React.FC<AnimatedDivProps> = ({
    children,
    ...props
}) => {
    return (
        <Animation {...props}>
                {children}
        </Animation>
    )
}

const Animation = styled.div<AnimatedDivProps>`
    animation: ${props=> props.id + " " + props.animation} forwards;
    z-index:1;
    opacity:1;
    position: absolute;
    animation-delay: ${props=>props.animationDelay}s;
    @keyframes ${props=>`
            ${props.id} {
            0% {
                transform: translate(${props.xInitial}px, ${props.yInitial}px);
            }
            100%{
                transform: translate(${props.xFinal}px, ${props.yFinal}px);
            }
        } `
    }
`
