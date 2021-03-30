import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';

interface INavigationProps {
    navigationLeft?: () => void;
    navigationRight?: () => void;
}

export const Navigation : React.FC<INavigationProps> = ({
    navigationLeft,
    navigationRight
}): React.ReactElement => {
    
    return (
        <>
            {navigationLeft && <NavigationArrowContainer
                onClick={navigationLeft}
                isLeft={true}>
                <NavigationArrowSegment/>
                <NavigationArrowSegment2/>
            </NavigationArrowContainer>}
            {navigationRight && <NavigationArrowContainer
                onClick={navigationRight}
                isLeft={false}>
                <NavigationArrowSegment3/>
                <NavigationArrowSegment4/>
            </NavigationArrowContainer>
            }
        </>
    );
};

interface INavigationArrow {
    isLeft : boolean; 
}

const NavigationArrowContainer = styled.div<INavigationArrow>`
    ${({ isLeft }) => isLeft ? Mixins.position('fixed', 0, '45vh', 'auto', 0, '5px') : Mixins.position('fixed', 0, '45vh', '5px', 0, 'auto')}
    height: 10vh;
    width: 50px;
`;
const NavigationArrowSegment   = styled.div`
    transition: transform 300ms ease-in;
    transform-origin: bottom left;
    transform: rotate(40deg);
    ${NavigationArrowContainer}:hover & {
        transform-origin: bottom left;
        ${Mixins.transform([{ transformation: 'rotate', value: '20deg' }])};
    };
    ${Mixins.position('fixed', 0, '47vh', 0, 0, '5px')}
    background-color: black;
    width: 4px;
    height: 3vh;
`;
const NavigationArrowSegment2  = styled.div`
    transition: transform 300ms ease-in;
    transform-origin: top left;
    transform: rotate(-40deg);
    ${NavigationArrowContainer}:hover & {
        transform-origin: top left;
        ${Mixins.transform([{ transformation: 'rotate', value: '-20deg' }])};
    };
    ${Mixins.position('fixed', 0, '50vh', 0, 0, '5px')}
    background-color: black;
    width: 4px;
    height: 3vh;
`;

const NavigationArrowSegment3 = styled.div`
    background-color: black;
    transition: transform 300ms ease-in;
    transform-origin: bottom left;
    transform: rotate(220deg);
    ${NavigationArrowContainer}:hover & {
        transform-origin: bottom left;
        ${Mixins.transform([{ transformation: 'rotate', value: '200deg' }])};
    };
    ${Mixins.position('fixed', 0, '47vh', '5px', 0, 'auto')}
    width: 4px;
    height: 3vh;
`;

const NavigationArrowSegment4 = styled.div`
    background-color: black;
    transition: transform 300ms ease-in;
    transform-origin: top left;
    transform: rotate(-220deg);
    ${NavigationArrowContainer}:hover & {
        transform-origin: top left;
        ${Mixins.transform([{ transformation: 'rotate', value: '-200deg' }])};
    };
    ${Mixins.position('fixed', 0, '50vh', '5px', 0, 'auto')}
    width: 4px;
    height: 3vh;
`;