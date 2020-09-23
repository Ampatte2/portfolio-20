import React from 'react';
import styled from 'styled-components';
import { AnchorLink, AnimatedCircle } from '../components';
import { DimensionsProps } from './Landing';
import { icons } from '../assets/icons';

interface AboutLinksProps {
    animationDelay: number;
    dimensions: DimensionsProps
}

export const AboutLinks: React.FC<AboutLinksProps> = ({
    animationDelay,
    dimensions,
}): React.ReactElement => {
    return <AnimatedCircle
        id="resumeLink"
        animation="2s ease-out forwards"
        xInitial={dimensions.width * 0.5}
        yInitial={dimensions.height}
        xFinal={dimensions.width * 0.5}
        yFinal={dimensions.height * 0.85}
        animationDelay={animationDelay}
        backgroundColor="transparent"
        width="1px">
        <AnchorLink
            href="https://github.com/Ampatte2"
            target="_blank">
            <StyledIcon as={icons.Github} />
        </AnchorLink>
        <AnchorLink
            href="https://www.linkedin.com/in/andrewmpatterson/"
            target="_blank">
            <StyledIcon as={icons.LinkedIn} />
        </AnchorLink>
        <AnchorLink
            href="https://www.linkedin.com/in/andrewmpatterson/"
            target="_blank">
            <StyledIcon as={icons.Document} />
        </AnchorLink>       
    </AnimatedCircle>;
};

const StyledIcon = styled.svg`
    width:5vh;
    color: white;
    margin:0 10px;
`;