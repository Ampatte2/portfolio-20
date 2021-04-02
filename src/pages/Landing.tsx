import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Link as L, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ParallaxStars, BaseText, FlipCard, Navigation } from '../components';
import { Paths } from '../transitions';
import Mixins from '../mixins';
import { useMounted, useSwipeNavigation } from '../utils';

export interface DimensionsProps {
    radius: number;
    leg: number;
    height: number;
    width: number;
}

const INITIAL_ANIMATION_DELAY = 1500;
const ANIMATION_TIME          = '400ms';
const FLIP_CARD_HEIGHT        = '100px';
const FLIP_CARD_WIDTH         = '450px';

export const Landing = () => {
    const [left, right] = useSwipeNavigation(Paths.Contact, Paths.About);
    

    return (
        <LandingDiv>
            <ParallaxStars/>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='Contact'
                navigationRightText='About'
            />
            <BaseText
                size='h1'
                shadow={1}
                margin='20px 0'
            >
                Andrew Michael Patterson
            </BaseText><BaseText
                size='h2'
                shadow={1}
                margin='20px 0'
            >
                Front-End Developer
            </BaseText>
            <BaseText
                size='h2'
                shadow={1}
                margin='20px 0'
            >
                React Typescript/Javascript
            </BaseText>
            <BaseText
                size='h2'
                shadow={1}
                margin='20px 0'
            >
                UI/UX Designer
            </BaseText>
        </LandingDiv>
    );
};

const LandingDiv = styled.div`
    ${({ theme }) => `background-color: ${theme.colors.background};`}
    ${Mixins.flex('column','center')}
    ${Mixins.scroll}
    position: fixed;
    top: 0;
    left: 0;
    width:100vw;
    height:100vh;
`;