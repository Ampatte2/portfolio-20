import React, { useState } from 'react';
import styled from 'styled-components';
import { quiz, mtg, portfolio } from '../assets/images';
import { OverlayImg, Button, AnchorLink, BaseText } from '../components';
import { flex } from '../globals/Flex';
import { media } from '../utils';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

interface ProjectsProps {
    animationDelay: number;
}

export const ProjectsDisplay: React.FC<ProjectsProps> = ({
    ...props
}): React.ReactElement => {
    const [index, setIndex] = useState(0);
    return <ProjectsDiv {...props}>
        <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            selectedItem={index}>
            <TitleDiv>
                <BaseText
                    size="4vmin"
                    shadow={2}
                    color="white"
                    bold
                    margin="10px">
                    Magic The Gathering Deck Builder
                </BaseText>
            </TitleDiv>
            <TitleDiv>
                <BaseText
                    size="4vmin"
                    shadow={2}
                    color="white"
                    bold
                    margin="10px">
                    Portfolio
                </BaseText>
            </TitleDiv>
            <TitleDiv>
                <BaseText
                    size="4vmin"
                    shadow={2}
                    color="white"
                    bold
                    margin="10px">
                    Angular Quiz Application
                </BaseText>
            </TitleDiv>
        </Carousel>
        <Carousel
            width="100%"
            showArrows
            showStatus={false}
            onChange={(i) => setIndex(i)}
            selectedItem={0}
            autoPlay
        >
            <OverlayImg
                source={mtg}
                width="100%"
                height="100%"
                backgroundColor="transparent">
                <AnchorLink
                    href="https://github.com/Ampatte2/mtgbuilder_server"
                    target="_blank"
                    margin="0 20px 0 0">
                    <Button
                        size="h1"
                        backgroundColor="primary"
                        color="background"
                        onHover="background-color:#663399"
                    >
                        Code
                    </Button>
                </AnchorLink>
                <AnchorLink
                    href="https://mtg-builder-application.herokuapp.com/"
                    target="_blank">
                    <Button
                        size="h1"
                        backgroundColor="primary"
                        color="background"
                        onHover="background-color:#663399">
                        Demo
                    </Button>
                </AnchorLink>
            </OverlayImg>
            <OverlayImg
                source={portfolio}
                width="100%"
                height="100%"
                backgroundColor="transparent">
                <AnchorLink
                    href="https://github.com/Ampatte2/portfolio-20"
                    target="_blank"
                    margin="0 20px 0 0">
                    <Button
                        size="h1"
                        backgroundColor="primary"
                        color="background"
                        onHover="background-color:#663399"
                        border="1px solid black"
                    >
                        Code
                    </Button>
                </AnchorLink>
            </OverlayImg>
            <OverlayImg
                source={quiz}
                width="100%"
                height="100%"
                backgroundColor="transparent">
                <AnchorLink
                    href="https://github.com/Ampatte2/Angular-Quiz-App"
                    target="_blank"
                    margin="0 20px 0 0">
                    <Button
                        size="h1"
                        backgroundColor="primary"
                        color="background"
                        onHover="background-color:#663399"
                    >
                        Code
                    </Button>
                </AnchorLink>
                <AnchorLink
                    href="https://angular-quiz-app-mysql.herokuapp.com/"
                    target="_blank"
                    margin="0 20px 0 0">
                    <Button
                        size="h1"
                        backgroundColor="primary"
                        color="background"
                        onHover="background-color:#663399"
                    >
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
    top:40%;
    transform: translate(-50%, -50%);
    width:60vw;
    height:80vh;
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
        top:50%;
        width:90vw;
        height:70vh;
    `,
    )}
`;

const TitleDiv = styled.div`
    width:100%;
    ${flex('center')}
`;