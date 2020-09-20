import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledIcon } from 'styled-icons/types';

interface AnimatedIconProps {
    x: number;
    y: number;
    icon: StyledIcon;
    delay?: number;
    id: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
    x,
    y,
    icon,
    delay,
    id
}): React.ReactElement => {

    const [points, setPoints] = useState<string[]>([]);
    useLayoutEffect((): void => {
        const layoutArray = [];
        for (let i = 3; i > 0; i--) {
            let translateY  = y - (y / i);
            let translateX  = x - (x / i);
            let transformer = translateX + 'px, ' + translateY + 'px';
            layoutArray.push(transformer); 
        }
        setPoints(layoutArray);
    }, [x, y]);


    return (
        <TheIcon
            id={id}
            x={x}
            y={y}
            first={points[0]}
            second={points[1]}
            last={points[2]}
            as={icon}
            time={delay}/>
    );
};

interface IconProps {
    x: number;
    y: number;
    first: string;
    second: string;
    last: string;
    time?: number;
}

const TheIcon = styled.svg<IconProps>`
    width:7vh;
    color:white;
    position: fixed;
    animation: ${props => props.id} 1s linear;
    z-index:1;
    opacity:0;
    animation-delay: ${props => props.time}s;
    @keyframes ${props => `
            ${props.id} {
            0% {
                transform: translate(${props.x}px, ${props.y}px);
            }
            30% {
                transform: translate(${props.first});
                opacity:1;
            }
            50% {
                transform: translate(${props.second});
                opacity:1;
            }
            80% {
                transform: translate(${props.second});
                opacity:1;
            }
            100%{
                transform: translate(${props.last});
                opacity:1;
            }
        } `
}
  
`;