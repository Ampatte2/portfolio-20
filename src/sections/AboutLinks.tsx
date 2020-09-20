import React from 'react';
import styled from 'styled-components';
import { AnchorLink, AnimatedCircle, ClipTypes, BaseText } from '../components';
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
    return <>
        <AnimatedCircle
            clipStart="100% 0% at 50% 50%"
            clipEnd="100% 100% at 50% 50%"
            id="githubLink"
            animation="3s ease-out forwards"
            xInitial={dimensions.width * 0.4}
            yInitial={dimensions.height}
            xFinal={dimensions.width * 0.4}
            yFinal={dimensions.height * 0.8}
            type={ClipTypes.ELLIPSE}
            animationDelay={animationDelay}
            backgroundColor="transparent">
            <AnchorLink
                href="https://github.com/Ampatte2"
                target="_blank">
                <StyledIcon as={icons.Github} />
            </AnchorLink>
        </AnimatedCircle>
        <AnimatedCircle
            clipStart="100% 0% at 50% 50%"
            clipEnd="100% 100% at 50% 50%"
            id="linkedInLink"
            animation="3s ease-out forwards"
            xInitial={dimensions.width * 0.45}
            yInitial={dimensions.height}
            xFinal={dimensions.width * 0.45}
            yFinal={dimensions.height * 0.8}
            type={ClipTypes.ELLIPSE}
            animationDelay={animationDelay}
            backgroundColor="transparent">
            <AnchorLink
                href="https://www.linkedin.com/in/andrewmpatterson/"
                target="_blank">
                <StyledIcon as={icons.LinkedIn} />
            </AnchorLink>
        </AnimatedCircle>
        <AnimatedCircle
            clipStart="100% 0% at 50% 50%"
            clipEnd="100% 100% at 50% 50%"
            id="resumeLink"
            animation="3s ease-out forwards"
            xInitial={dimensions.width * 0.5}
            yInitial={dimensions.height}
            xFinal={dimensions.width * 0.5}
            yFinal={dimensions.height * 0.8}
            type={ClipTypes.ELLIPSE}
            animationDelay={animationDelay}
            backgroundColor="transparent">
            <AnchorLink
                href="https://www.linkedin.com/in/andrewmpatterson/"
                target="_blank">
                <StyledIcon as={icons.Document} />
            </AnchorLink>
        </AnimatedCircle>
    </>;
};

const StyledIcon = styled.svg`
    width:5vh;
    color: white;
`;