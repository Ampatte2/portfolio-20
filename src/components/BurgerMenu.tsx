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
                isOpenTransform='rotate(45deg)'
                initialTransform='rotate(0)'/>
            <BurgerLine
                isOpen={isOpen}
                isOpenTransform='translateX(20px)'
                initialTransform='translateX(0)'/>
            <BurgerLine
                isOpen={isOpen}
                isOpenTransform='rotate(-45deg)'
                initialTransform='rotate(0)'/>
        </Burger>
    );
};

const Burger = styled.button<IBurgerProps>`
  position: absolute;
  top: 20px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
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
    isOpenTransform : string;
}

const BurgerLine = styled.div<IBurgerLineProps>`
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    ${({ isOpen, isOpenTransform, initialTransform }) => `
        transform: ${isOpen ? isOpenTransform : initialTransform};
    `}
`;

// ${({ isOpen, isOpenTransform, initialTransform }) => `
//         transform: ${initialTransform};
//         ${Burger}:hover & {
//             transform: ${isOpenTransform};
//         };
//     `}