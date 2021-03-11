import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Link as L, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedBackground, BaseText, Button } from '../components';
import { LandingIntro, Header, AboutLinks, SkillsDisplay } from '../sections';
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
            <Button
                backgroundColor='blue'
                onClick={navToProject}
                loading={isLoading}>
                Home
            </Button>
        </LandingDiv>
    );
};



const LandingDiv = styled.div`
    background-color: red;
    width:100vw;
    height:100vh;
`;