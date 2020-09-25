import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AnimatedBackground, AnchorLink, AnimatedCircle, ClipTypes, BaseText } from '../components';
import { LandingIntro, Header, AboutLinks, Projects } from './index';
import { useMounted } from '../utils';
import { icons } from '../assets/icons';

export interface DimensionsProps {
    radius: number;
    leg: number;
    height: number;
    width: number;
}

export const Landing = () => {
    const targetRef                   = useRef<HTMLDivElement>(null);
    const isMounted                   = useMounted();
    const [index, setIndex]           = useState(0);
    const [isChecked, setChecked]     = useState(false);
    const [dimensions, setDimensions] = useState<DimensionsProps>({ radius: 250, leg: 250, height: 250, width: 250 });

    useLayoutEffect(() => {
        if (targetRef.current) {
            const { height, width } = targetRef.current.getBoundingClientRect();
            const radius            = Math.min(height, width) / 2;
            const leg               = 0.707106781 * radius;
            if (isMounted) {
                setDimensions({ radius: radius, leg: leg, height: height, width: width });
            }
        }
    },[]);
    

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(state => state + 1);
        }, 1000);
        setTimeout( () => {
            setChecked(true);
            clearInterval(id);
        }, 10000);
    }, []);

    return (
        <LandingDiv ref={targetRef}>
            <LandingIntro
                delay={0}
                dimensions={dimensions}
                index={index}
                isChecked={isChecked}/>
            <Header
                animationDelay={12}
                dimensions={dimensions}/>
            <Projects
                animationDelay={12}
                dimensions={dimensions}></Projects>
            <AnimatedCircle
                clipStart="100% 0% at 50% 50%"
                clipEnd="100% 100% at 50% 50%"
                id="github"
                animation="3s ease-out forwards"
                xInitial={dimensions.width}
                yInitial={dimensions.height * 0.1}
                xFinal={dimensions.width * 0.6}
                yFinal={dimensions.height * 0.2}
                type={ClipTypes.ELLIPSE}
                animationDelay={12}
                backgroundColor="transparent">
                <AnchorLink
                    href="https://github.com/Ampatte2"
                    target="_blank">
                    <StyledIcon as={icons.Github} />
                    <BaseText
                        size="4vmin"
                        shadow={2}
                        color="white"
                        margin="0 0 0 20px"
                    >
                        Recent
                    </BaseText>
                </AnchorLink>
            </AnimatedCircle>
            <AnimatedCircle
                clipStart="100% 0% at 50% 50%"
                clipEnd="100% 100% at 50% 50%"
                id="project"
                animation="3s ease-out forwards"
                xInitial={-100}
                yInitial={dimensions.height * 0.1}
                xFinal={dimensions.width * 0.075}
                yFinal={dimensions.height * 0.2}
                type={ClipTypes.ELLIPSE}
                animationDelay={12}
                backgroundColor="transparent">
                <StyledIcon as={icons.Project} />
                <BaseText
                    size="4vmin"
                    shadow={2}
                    color="white"
                    margin="0 0 0 20px"
                >
                    Projects
                </BaseText>
            </AnimatedCircle>
            <AboutLinks
                animationDelay={12}
                dimensions={dimensions}/>
            <AnimatedBackground/>
        </LandingDiv>
    );
};

const StyledIcon = styled.svg`
    width:6vh;
    color: white;
`;

const LandingDiv = styled.div`
    width:100%;
    height:100%;
`;

