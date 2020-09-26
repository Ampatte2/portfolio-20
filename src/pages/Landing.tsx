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
            <LandingIntro
                delay={0}
                dimensions={dimensions}
                index={index}
                isChecked={isChecked}/>
            <Header
                animationDelay={animationDelay}
                dimensions={dimensions}/>
            <AboutLinks
                animationDelay={animationDelay}
                dimensions={dimensions}/>
            <AnimatedBackground/>
            <SkillsDisplay animationDelay={animationDelay}/>
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

const Link = styled(L)`
    text-decoration: none;
    cursor: pointer;
    ${flex('center')}
    &:hover {
        opacity: 0.75;
    }
`;
