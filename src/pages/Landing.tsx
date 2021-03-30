import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Link as L, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderRow, BaseText, FlipCard, Navigation } from '../components';
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
    const [left, right] = useSwipeNavigation(Paths.Projects, Paths.About);
    

    return (
        <LandingDiv>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='Projects'
                navigationRightText='About'
            />
            <FlipCard
                height={FLIP_CARD_HEIGHT}
                width={FLIP_CARD_WIDTH}
                margin='20px auto'
                frontElement={
                    <BaseText
                        type='h3'
                    >
                        Hi, I'm Andrew Patterson
                    </BaseText>
                }
                backElement={<BaseText
                    size='h3'
                >
                    Front-End Developer
                </BaseText>}
                animationId='Developer'
                animationTime={ANIMATION_TIME}
                animationDelay={`${INITIAL_ANIMATION_DELAY}ms`}
            />
            <FlipCard
                height={FLIP_CARD_HEIGHT}
                width={FLIP_CARD_WIDTH}
                margin='20px auto'
                frontElement={
                    <BaseText
                        type='h3'
                    >
                        Card Game Enthusiast
                    </BaseText>
                }
                backElement={<BaseText
                    size='h3'
                >
                    React Typescript/Javascript
                </BaseText>}
                animationId='Language'
                animationTime={ANIMATION_TIME}
                animationDelay={`${INITIAL_ANIMATION_DELAY + 1000}ms`}
                rotationType='rotateX'
            />
            <FlipCard
                height={FLIP_CARD_HEIGHT}
                width={FLIP_CARD_WIDTH}
                margin='20px auto'
                frontElement={
                    <BaseText
                        type='h3'
                    >
                        Arduino Technician
                    </BaseText>
                }
                backElement={<BaseText
                    size='h3'
                >
                    UI/UX Designer
                </BaseText>}
                animationId='Research'
                animationTime={ANIMATION_TIME}
                animationDelay={`${INITIAL_ANIMATION_DELAY + 2000}ms`}
            />
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