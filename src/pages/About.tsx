import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';
import { Link as L, useHistory } from 'react-router-dom';
import { Paths } from '../transitions';
import { FlipCard, Navigation, BaseText, ScrollAnimation, AnimatedCircle, ParallaxStars } from '../components';
import { Skills, SocialLinks, Background, Interests } from '../sections';
import { useScroll, useSwipeNavigation } from '../utils';

interface IAboutProps {
}

const INITIAL_ANIMATION_DELAY = 1500;
const ANIMATION_TIME          = '400ms';
const FLIP_CARD_HEIGHT        = '100px';
const FLIP_CARD_WIDTH         = '250px';
export const About : React.FC<IAboutProps> = ({
    
}): React.ReactElement => {
    const [left, right] = useSwipeNavigation(Paths.Home, Paths.Projects);
    const ref           = useScroll();
    return (
        <LandingDiv ref={ref}>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='Home'
                navigationRightText='Showcase'
            />
            <ParallaxStars/>
            <ScrollAnimation
                initialAnimation={Mixins.transform([{ transformation: 'translateY', value: '0px' }])}
                finalAnimation={Mixins.transform([{ transformation: 'translateY', value: '0px' }])}>
                <PaddingDiv />
            </ScrollAnimation>
            <ScrollAnimation
                initialAnimation={Mixins.transform([{ transformation: 'translateY', value: '0px' }])}
                finalAnimation={Mixins.transform([{ transformation: 'translateY', value: '0px' }])}>
                <Background />
            </ScrollAnimation>
            <ScrollAnimation
                initialAnimation={Mixins.transform([{ transformation: 'translateY', value: '200px' }])}
                finalAnimation={Mixins.transform([{ transformation: 'translateY', value: '0px' }])}>
                <AboutMeContainer>
                    <BaseText
                        type='h1'
                        bold
                    >
                        Accomplishments
                    </BaseText>
                    <Interests/>
                </AboutMeContainer>
            </ScrollAnimation>
            <ScrollAnimation
                initialAnimation={Mixins.transform([{ transformation: 'translateY', value: '200px' }])}
                finalAnimation={Mixins.transform([{ transformation: 'translateY', value: '0px' }])}>
                <SkillsContainer>
                    <BaseText
                        type='h1'
                        bold
                    >
                        Technical Skills
                    </BaseText>
                    <Skills/>
                </SkillsContainer>
            </ScrollAnimation>
            <ScrollAnimation
                initialAnimation={Mixins.transform([{ transformation: 'translateY', value: '200px' }])}
                finalAnimation={Mixins.transform([{ transformation: 'translateY', value: '0px' }])}>
                <SkillsContainer>
                    <BaseText
                        type='h1'
                        bold
                    >
                        Links and Resume
                    </BaseText>
                    <SocialLinks hoverColor='secondary'/>
                </SkillsContainer>
            </ScrollAnimation>
            <ScrollAnimation
                initialAnimation={Mixins.transform([{ transformation: 'translateY', value: '200px' }])}
                finalAnimation={Mixins.transform([{ transformation: 'translateY', value: '0px' }])}>
                <PaddingDiv />
            </ScrollAnimation>
        </LandingDiv>
    );
};

const LandingDiv = styled.div`
    overflow-y: scroll;
    &::-webkit-scrollbar {
       width:0;
    }
    &::-moz-scrollbar {
        width:0;
    }
    scrollbar-width: none;
    ${Mixins.flex('column', 'flex-start', 'center')}
    width:100vw;
    height:100vh;
`;

const PaddingDiv       = styled.div`
    height: 100px;
`;
const AboutMeContainer = styled.div`
    ${Mixins.flex('column', 'center')}
    margin: auto;
    ${({ theme }) => `background-color: ${theme.colors.background};`}
`;
const SkillsContainer  = styled.div`
    ${Mixins.flex('column', 'center')}
`;
