import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';
import { BaseText } from './BaseText';
import { Button } from './Button';
import { AnchorLink } from './AnchorLink'; 

interface IBurgerProps {
    isOpen : boolean;
}

interface IBurgerMenuProps extends IBurgerProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const BurgerMenu : React.FC<IBurgerMenuProps> = ({
    isOpen,
    setIsOpen
}): React.ReactElement => {
    
    return (
        <Burger
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}>
            <BurgerLine
                isOpen={isOpen}
                openTransform='rotate(45deg)'
                initialTransform='rotate(0)'/>
            <BurgerLine
                isOpen={isOpen}
                openTransform='translateX(20px)'
                initialTransform='translateX(0)'
                isCenter/>
            <BurgerLine
                isOpen={isOpen}
                openTransform='rotate(-45deg)'
                initialTransform='rotate(0)'/>
        </Burger>
    );
};

const Burger = styled.button<IBurgerProps>`
  position: fixed;
  top: 20px;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
`;

interface IBurgerLineProps extends IBurgerProps {
    initialTransform : string;
    openTransform : string;
    isCenter?: boolean;
}

const BurgerLine = styled.div<IBurgerLineProps>`
    width: 30px;
    height: 5px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    ${({ isOpen, isCenter, openTransform, initialTransform }) => `
        transform: ${isOpen ? openTransform : initialTransform};
        opacity: ${(isCenter && isOpen) ? '0' : '1'}
    `}
`;

// ${({ isOpen, openTransform, initialTransform }) => `
//         transform: ${initialTransform};
//         ${Burger}:hover & {
//             transform: ${openTransform};
//         };
//     `}