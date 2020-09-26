import React from 'react';
import styled from 'styled-components';
import { quiz, mtg } from '../assets/images';
import { OverlayImg, Button, AnchorLink } from '../components';
import { media } from '../utils';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

interface ProjectsProps {
    animationDelay: number;
}

export const ProjectsDisplay: React.FC<ProjectsProps> = ({
    ...props
}): React.ReactElement => {
    return <ProjectsDiv {...props}>
        <Carousel
            width="100%"
            showArrows
            showStatus={false}
        >
            <OverlayImg
                source={mtg}
                width="100%"
                height="100%"
                backgroundColor="primary">
                <AnchorLink
                    href="https://github.com/Ampatte2/mtgbuilder_server"
                    target="_blank"
                    margin="0 20px 0 0">
                    <Button
                        size="h1"
                        onHover="opacity: 1;">
                        Code
                    </Button>
                </AnchorLink>
                <AnchorLink
                    href="https://mtg-builder-application.herokuapp.com/"
                    target="_blank">
                    <Button size="h1">
                        Demo
                    </Button>
                </AnchorLink>
            </OverlayImg>
            <OverlayImg
                source={quiz}
                width="100%"
                height="100%"
                backgroundColor="primary">
                <AnchorLink
                    href="https://github.com/Ampatte2/Angular-Quiz-App"
                    target="_blank">
                    <Button size="h1">
                        Code
                    </Button>
                </AnchorLink>
                <AnchorLink
                    href="https://angular-quiz-app-mysql.herokuapp.com/"
                    target="_blank"
                    margin="0 20px 0 0">
                    <Button
                        size="h1">
                        Demo
                    </Button>
                </AnchorLink>
            </OverlayImg>
        </Carousel>
    </ProjectsDiv>;
};

const ProjectsDiv = styled.div<ProjectsProps>`
    position: absolute;
    overflow:hidden;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    width:60vw;
    height:60vh;
    ${({
        animationDelay,
    }): string => `
        clip-path: ellipse(0%);
        animation: projectsAnimation 4s ease-out forwards;
        animation-delay: ${animationDelay}s;
        opacity:0;
        @keyframes projectsAnimation {
                    0% {
                        clip-path: ellipse(100% 0% at 50% 50%);
                    }
                    100%{
                        opacity:1;
                        clip-path: ellipse(100% 100% at 50% 50%);
                    }
                } `
};
    ${media(
        'tablet',
        `
        width:90vw;
    `,
    )}
`;