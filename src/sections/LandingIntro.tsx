import React from 'react';
import styled from 'styled-components';
import { AnimatedIcon } from '../components';
import { icons } from '../assets/icons';
import { flex } from '../globals/Flex';

const TITLE_ARRAY = ['Github', 'NodeJs', 'Postgresql', 'Docker', 'Typescript', 'MongoDB', 'GraphQL', 'React', 'Andrew Patterson'];

export interface Dimensions {
    leg: number;
    radius: number;
}

interface LandingIntroProps {
    isChecked: boolean;
    index: number;
    dimensions: Dimensions;
    delay: number;
}

export const LandingIntro: React.FC<LandingIntroProps> = ({
    isChecked,
    index,
    dimensions,
    delay = 0
}): React.ReactElement => {
    return (
        <Container
            isChecked={isChecked}
        >
            <TitleDiv>
                {TITLE_ARRAY[index]}
            </TitleDiv>
            <AnimatedIcon
                id="move1"
                x={-dimensions.radius}
                y={0}
                delay={delay}
                icon={icons.Github}/>
            <AnimatedIcon
                id="move2"
                x={-dimensions.leg}
                y={-dimensions.leg}
                delay={delay + 1}
                icon={icons.NodeJs}/>
            <AnimatedIcon
                id="move3"
                x={0}
                y={-dimensions.radius}
                delay={delay + 2}
                icon={icons.Postgresql}/>
            <AnimatedIcon
                id="move4"
                x={dimensions.leg}
                y={-dimensions.leg}
                delay={delay + 3}
                icon={icons.Docker}/>
            <AnimatedIcon
                id="move5"
                x={dimensions.radius}
                y={0}
                delay={delay + 4}
                icon={icons.Typescript}/>
            <AnimatedIcon
                id="move6"
                x={dimensions.leg}
                y={dimensions.leg}
                delay={delay + 5}
                icon={icons.MongoDB}/>
            <AnimatedIcon
                id="move7"
                x={0}
                y={dimensions.radius}
                delay={delay + 6}
                icon={icons.GraphQL}/>
            <AnimatedIcon
                id="move8"
                x={-dimensions.leg}
                y={dimensions.leg}
                delay={delay + 7}
                icon={icons.React}/>
        </Container>
    );
};

interface ContainerProps {
    isChecked: boolean;
}

const Container = styled.div<ContainerProps>`
    display: inline;
    width: 100%;
    height: 100%;
    top: 0;
    margin-top: 0;
    left: 0;
    margin-left: 0;
    z-index: 1;
    border-radius: 0;
    ${flex('center')};
    ${({ theme, ...props }) => `
        background: ${theme.colors.primary};
        ${props.isChecked && `
            background: ${theme.colors.background};
            border-radius: 50%;
            width: 100%
            height: 0px;
            position: absolute;
            top: 100%;
            
        `}
`}
    transition: all 1.5s ease-in-out;

    
`;
const TitleDiv  = styled.div`
    ${({ theme }) => `
        background: ${theme.colors.background};
        font-size: ${theme.font.size.h1};
        color: ${theme.colors.primary};
    `};
    ${flex('center')};
    border-radius: 999px;
    width: 25vmin;
    height: 15vmin;
    border: 1px solid transparent;
    z-index: 2;
    animation: spin 2s ease-in-out forwards;
    animation-delay: 8s;
    @keyframes spin {
            0% {
                transform: scale(1);
            }
            40% {
                transform: rotate(0deg) scale(1.25);
            }
            100% {
                transform: rotate(360deg) scale(1.25);
                opacity:0;
            }
    };
`;
