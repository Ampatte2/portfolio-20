import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Link as L } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedBackground, AnchorLink, AnimatedCircle, ClipTypes, BaseText } from '../components';
import { LandingIntro, Header, AboutLinks, SkillsDisplay } from '../sections';
import { useMounted } from '../utils';
import { flex } from '../globals/Flex';
import { icons } from '../assets/icons';

export interface DimensionsProps {
    radius: number;
    leg: number;
    height: number;
    width: number;
}

export const Landing = () => {
    const targetRef                           = useRef<HTMLDivElement>(null);
    const isMounted                           = useMounted();
    const [index, setIndex]                   = useState(0);
    const [animationDelay, setAnimationDelay] = useState(12);
    const [isChecked, setChecked]             = useState(false);
    const [dimensions, setDimensions]         = useState<DimensionsProps>({ radius: 250, leg: 250, height: 250, width: 250 });

    useLayoutEffect(() => {
        if (targetRef.current) {
            const { height, width } = targetRef.current.getBoundingClientRect();
            const radius            = Math.min(height, width) / 2;
            const leg               = 0.707106781 * radius;
            if (isMounted) {
                setDimensions({ radius: radius, leg: leg, height: height, width: width });
            }
        }
        if (window.sessionStorage.getItem('intro')) {
            if (isMounted) {
                setChecked(true);
                setAnimationDelay(1);
            }
        } else {
            if (isMounted) {
                setChecked(false);
            }
        }
    },[]);
    

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(state => state + 1);
        }, 1000);
        setTimeout( () => {
            if (isMounted) {
                setChecked(true);
                window.sessionStorage.setItem('intro', 'false');
            };
            clearInterval(id);
        }, 10000);
    }, []);

    return (
        <LandingDiv ref={targetRef}>
            <Link
                to="/projects"
                animationDelay={animationDelay}>
                <BaseText
                    size="3vmin"
                    shadow={1}
                    color="white"
                    bold
                    margin="10px">
                    Projects
                </BaseText>
                <ProjectsIcon
                    as={icons.ArrowForward}
                />
            </Link>
            <Header animationDelay={animationDelay}/>
            <LandingIntro
                delay={0}
                dimensions={dimensions}
                index={index}
                isChecked={isChecked}/>
            <AboutLinks
                animationDelay={animationDelay}
                dimensions={dimensions}/>
            <AnimatedBackground/>
            <SkillsDisplay animationDelay={animationDelay}/>
        </LandingDiv>
    );
};

interface LinkProps {
    animationDelay: number
}

const ProjectsIcon = styled.svg`
    width: 3vh;
    ${({
        theme,
    }): string => `
        color: ${theme.colors.background};
    `}
    
`;

const LandingDiv = styled.div`
    width:100%;
    height:100%;
`;

const Link = styled(L)<LinkProps>`
    position: fixed;
    top: 20px;
    right:20px;
    text-decoration: none;
    cursor: pointer;
    ${flex('center')}
    animation: LinkSpin 1s ease-in-out forwards;
    animation-delay: ${props => props.animationDelay + 2}s;
    opacity:0;
    @keyframes LinkSpin {
            0% {
                
                transform: rotate(10deg);
            }
            40% {
                transform: rotate(-10deg);
            }
            100% {
                transform: rotate(0deg);
                opacity:1;
            }
    };
    &:hover {
        opacity: 0.75;
    }
`;
