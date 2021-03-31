import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';
import { BaseText } from './BaseText';
import { Button } from './Button';
import { AnchorLink } from './AnchorLink'; 

interface INavigationMenuProps {
    isOpen : boolean;
}

export const NavigationMenu : React.FC<INavigationMenuProps> = ({
    isOpen,
}): React.ReactElement => {
    
    return (
        <NavigationMenuContainer
            isOpen={isOpen}>
            <AnchorLink>

            </AnchorLink>
        </NavigationMenuContainer>
    );
};

const NavigationMenuContainer = styled.div<INavigationMenuProps>`
    position: fixed;
    height: 100vh;
    width: 100vw;
    transition: all 0.3s linear;
    ${Mixins.flex('center')}
    ${({ isOpen, theme }) => {
        const translation     = isOpen ? 'transform: translateY(0)': 'transform: translateY(-100vh)';
        const backgroundColor = theme.colors.secondary;
        return `${translation}; background-color: ${backgroundColor};`;
    }}
    z-index: 9;
`;

const NavigationItem = styled.div`

`;