import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Link as L, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedBackground, BaseText, Button, Navigation } from '../components';
import { Paths } from '../transitions';
import Mixins from '../mixins';
import { useMounted, useSwipeNavigation } from '../utils';

export interface DimensionsProps {
    radius: number;
    leg: number;
    height: number;
    width: number;
}

export const Landing = () => {
    const [left, right] = useSwipeNavigation(Paths.Projects, Paths.About);
    

    return (
        <LandingDiv>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='Projects'
                navigationRightText='About'
            />
            <BaseText
                type='h1'
            >
                Hi I'm Andrew
            </BaseText>
            <BaseText
                size='h3'
            >
                I am a developer
            </BaseText>
            <BaseText
                size='h3'
            >
                I am a psychologist
            </BaseText>
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