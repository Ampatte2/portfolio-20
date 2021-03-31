import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Mixins from '../mixins';
import { BaseText } from './BaseText';
import { Button } from './Button';
import { AnchorLink } from './AnchorLink';
import { Paths } from '../transitions';

interface INavigationProps {
    isOpen : boolean;
}

interface INavigationMenuProps extends INavigationProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationMenu : React.FC<INavigationMenuProps> = ({
    isOpen,
    setIsOpen
}): React.ReactElement => {
    const history = useHistory();

    const navigatePath = (path: Paths) => {
        setIsOpen(false);
        setTimeout(() => history.push(path), 100);
    };
    return (
        <NavigationMenuContainer
            isOpen={isOpen}>
            <NavigationItem
                size='h1'
                onClick={() => navigatePath(Paths.Home)}>
                Main Menu
            </NavigationItem>
            <NavigationItem
                size='h1'
                onClick={() => navigatePath(Paths.About)}>
                About Me
            </NavigationItem>
            <NavigationItem
                size='h1'
                onClick={() => navigatePath(Paths.Projects)}>
                Project Showcase
            </NavigationItem>
            <NavigationItem
                size='h1'
                onClick={() => navigatePath(Paths.Contact)}>
                Contact Me
            </NavigationItem>
        </NavigationMenuContainer>
    );
};

const NavigationMenuContainer = styled.div<INavigationProps>`
    position: fixed;
    height: 100vh;
    width: 100vw;
    transition: all 0.3s linear;
    ${Mixins.flex('column', 'center')}
    ${({ isOpen, theme }) => {
        const translation     = isOpen ? 'transform: translateY(0)': 'transform: translateY(-100vh)';
        const backgroundColor = theme.colors.secondary;
        return `${translation}; background-color: ${backgroundColor};`;
    }}
    z-index: 9;
`;

const NavigationItem = styled(BaseText)`
    ${({ theme }) => `&:hover {
        color: ${theme.colors.background};
    }`}
`;