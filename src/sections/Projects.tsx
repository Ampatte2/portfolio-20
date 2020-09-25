import React from 'react';
import styled from 'styled-components';
import { quiz, mtg } from '../assets/images';
import { AnimatedCircle, BaseText, ClipTypes } from '../components';
import { DimensionsProps } from './Landing';

interface ProjectsProps {
    animationDelay: number;
    dimensions: DimensionsProps
}

export const Projects: React.FC<ProjectsProps> = ({
    animationDelay,
    dimensions,
}): React.ReactElement => {
    return <>
        <AnimatedCircle
            clipStart="100% 0% at 50% 50%"
            clipEnd="100% 100% at 50% 50%"
            id="MTGProject"
            animation="3s ease-out forwards"
            xInitial={dimensions.width}
            yInitial={dimensions.height * 0.3}
            xFinal={dimensions.width * 0.6}
            yFinal={dimensions.height * 0.3}
            type={ClipTypes.ELLIPSE}
            animationDelay={animationDelay}
            backgroundColor="transparent">
            <ColorDiv src={mtg}/>
        </AnimatedCircle>
        <AnimatedCircle
            clipStart="100% 0% at 50% 50%"
            clipEnd="100% 100% at 50% 50%"
            id="QUIZProject"
            animation="3s ease-out forwards"
            xInitial={-100}
            yInitial={dimensions.height * 0.3}
            xFinal={dimensions.width * 0.075}
            yFinal={dimensions.height * 0.3}
            type={ClipTypes.ELLIPSE}
            animationDelay={animationDelay}
            backgroundColor="transparent">
            <ColorDiv src={quiz}/>
        </AnimatedCircle>
    </>;
};

const ColorDiv = styled.img`
    background-color:red;
    cursor:pointer;
    width:50vmin;
    height:35vmin;
    z-index: 2;
`;