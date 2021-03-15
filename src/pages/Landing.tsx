import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Link as L, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedBackground, BaseText, Button } from '../components';
import { LandingIntro, Header, AboutLinks, SkillsDisplay } from '../sections';
import Mixins from '../mixins';
import { useMounted } from '../utils';

export interface DimensionsProps {
    radius: number;
    leg: number;
    height: number;
    width: number;
}

export const Landing = () => {
    const targetRef                 = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const isMounted                 = useMounted();
    const history                   = useHistory();

    const navToProject = () => {
        setIsLoading(true);
        history.push('/projects');
    };


    return (
        <LandingDiv ref={targetRef}>
            <BaseText
                type='h1'
            >
                My name is Andrew Patterson
            </BaseText>
            <BaseText
                size='h3'
            >
                I am an experienced Javascript/Typescript React Developer
            </BaseText>
            <BaseText
                size='h3'
            >
                I have a passion for designing a great user experience
            </BaseText>
            <Button
                backgroundColor='blue'
                onClick={navToProject}
                loading={isLoading}>
                Home
            </Button>
        </LandingDiv>
    );
};

const InitText = styled(BaseText)`
    font-family: Ubuntu Mono;
    width: 100%;
    text-align: left;
`;

const LandingDiv = styled.div`
    ${({ theme }) => `background-color: ${theme.colors.background};`}
    ${Mixins.flex('column','center')}
    position: fixed;
    top: 0;
    left: 0;
    width:100vw;
    height:100vh;
`;