import React from 'react';
import styled from 'styled-components';
import { Link as L, useHistory } from 'react-router-dom';
import { Paths } from '../transitions';
import { AnimatedBackground, BaseText, Button, Navigation } from '../components';
import { useSwipeNavigation } from '../utils';

interface IAboutProps {
}

export const About : React.FC<IAboutProps> = ({
    
}): React.ReactElement => {
    const [left, right] = useSwipeNavigation(Paths.Home, Paths.Projects);
    return (
        <LandingDiv>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='Home'
                navigationRightText='Project'
            />
        </LandingDiv>
    );
};

const LandingDiv = styled.div`
    width:100vw;
    height:100vh;
`;