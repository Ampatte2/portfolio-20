import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';
import { Link as L, useHistory } from 'react-router-dom';
import { Paths } from '../transitions';
import { FlipCard, Navigation, BaseText } from '../components';
import { useSwipeNavigation } from '../utils';

interface IAboutProps {
}

const INITIAL_ANIMATION_DELAY = 1500;
const ANIMATION_TIME          = '400ms';
const FLIP_CARD_HEIGHT        = '100px';
const FLIP_CARD_WIDTH         = '200px';
export const About : React.FC<IAboutProps> = ({
    
}): React.ReactElement => {
    const [left, right] = useSwipeNavigation(Paths.Home, Paths.Projects);
    return (
        <LandingDiv>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='Home'
                navigationRightText='Showcase'
            />
            <BaseText
                type='h1'
            >
                A Bit About Me
            </BaseText>
            <AboutMeContainer>
                <BaseText
                    type='h3'
                >
                    I am
                </BaseText>
                <FlipCard
                    height={FLIP_CARD_HEIGHT}
                    width={FLIP_CARD_WIDTH}
                    
                    frontElement={
                        <BaseText
                            type='h3'
                        >
                            Self Taught
                        </BaseText>
                    }
                    backElement={<BaseText
                        size='h3'
                    >
                        Industry Tested
                    </BaseText>}
                    animationId='Developer'
                    animationTime={ANIMATION_TIME}
                    animationDelay={`${INITIAL_ANIMATION_DELAY}ms`}
                    rotationType='rotateX'
                />
            </AboutMeContainer>
            
        </LandingDiv>
    );
};

const LandingDiv       = styled.div`
    overflow-y: scroll;
    &::-webkit-scrollbar {
       width:0;
    }
    ${Mixins.flex('column', 'flex-start', 'center')}
    width:100vw;
    height:100vh;
`;
const AboutMeContainer = styled.div`
    ${Mixins.flex('row', 'space-between', 'center')}
    width: 500px;

`;