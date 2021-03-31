import React from 'react';
import styled from 'styled-components';
import { useMounted, useSwipeNavigation } from '../utils';
import { HeaderRow, BaseText, ParallaxStars, Navigation } from '../components';
import { Paths } from '../transitions';
import Mixins from '../mixins';
interface IContactProps {
    
}

export const Contact : React.FC<IContactProps> = ({
    
}): React.ReactElement => {
    const [left, right] = useSwipeNavigation(Paths.Projects, Paths.Home);
    return (
        <ContactDiv>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='Showcase'
                navigationRightText='Home'
            />
            <ParallaxStars/>
        </ContactDiv>
    );
};

const ContactDiv = styled.div`
    ${({ theme }) => `background-color: ${theme.colors.background};`}
    ${Mixins.flex('column','center')}
    ${Mixins.scroll}
    position: fixed;
    top: 0;
    left: 0;
    width:100vw;
    height:100vh;
`;