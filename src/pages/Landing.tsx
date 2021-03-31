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
            <FlipCard
                height={FLIP_CARD_HEIGHT}
                width={FLIP_CARD_WIDTH}
                margin='20px auto'
                backElement={<BaseText
                    size='h1'
                >
                    Andrew Michael Patterson
                </BaseText>}
                frontCardColor='transparent'
                backCardColor='transparent'
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
                        type='h2'
                    >
                        Hi, I'm Andrew Patterson
                    </BaseText>
                }
                backElement={<BaseText
                    size='h2'
                >
                    Front-End Developer
                </BaseText>}
                frontCardColor='secondary'
                backCardColor='transparent'
                animationId='Developer'
                animationTime={ANIMATION_TIME}
                animationDelay={`${INITIAL_ANIMATION_DELAY + 200}ms`}
            />
            <FlipCard
                height={FLIP_CARD_HEIGHT}
                width={FLIP_CARD_WIDTH}
                margin='20px auto'
                frontElement={
                    <BaseText
                        type='h2'
                    >
                        Card Game Enthusiast
                    </BaseText>
                }
                backElement={<BaseText
                    size='h2'
                >
                    React Typescript/Javascript
                </BaseText>}
                frontCardColor='secondary'
                backCardColor='transparent'
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
                        type='h2'
                    >
                        Arduino Technician
                    </BaseText>
                }
                backElement={<BaseText
                    size='h2'
                >
                    UI/UX Designer
                </BaseText>}
                frontCardColor='secondary'
                backCardColor='transparent'
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