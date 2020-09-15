import React from 'react'
import styled from 'styled-components';
import { AnimatedDivProps } from './AnimatedDiv';
import { flex } from '../globals/Flex';

interface AnimatedCircleProps extends AnimatedDivProps {
    clipStart?: number;
    clipEnd?: number;
}

export const AnimatedCircle: React.FC<AnimatedCircleProps> = ({
    children,
    ...props
}) => {
    return (
        <AnimatedCircleDiv {...props}>
                {children}
        </AnimatedCircleDiv>
    )
}

const AnimatedCircleDiv = styled.div<AnimatedCircleProps>`
    position: fixed;
    top:50%;
    left:50%;
    z-index: 2;
    ${flex("center")};
    background: orange;
    clip-path: circle(0%);
    height: 200px;
    transition: clip-path 1s;
    width: 200px;
    animation: circleout 2s ease-in-out forwards;
    @keyframes ${props=>`
                ${props.id} {
                0% {
                    transform: translate(${props.xInitial}px, ${props.yInitial}px);
                    clip-path: circle(${props.clipStart}%);
                }
                100%{
                    transform: translate(${props.xFinal}px, ${props.yFinal}px);
                    clip-path: circle(${props.clipEnd}%);
                }
            } `
        };

`