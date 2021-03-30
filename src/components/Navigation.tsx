import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';
import { BaseText } from './BaseText';

interface INavigationProps {
    navigationLeft?: () => void;
    navigationLeftText?: string;
    navigationRight?: () => void;
    navigationRightText?: string;
}

export const Navigation : React.FC<INavigationProps> = ({
    navigationLeft,
    navigationRight,
    navigationLeftText,
    navigationRightText
}): React.ReactElement => (
    <>
        {navigationLeft && <NavigationContainerLeft
            onClick={navigationLeft}
        >
            <NavigationArrowSegment/>
            <HiddenTextLeft
                bold
                lineHeight='1rem'>{navigationLeftText}</HiddenTextLeft>
            <NavigationArrowSegment2/>
        </NavigationContainerLeft>}
        {navigationRight && <NavigationContainerRight
            onClick={navigationRight}
        >
            <NavigationArrowSegment3/>
            <HiddenTextRight
                bold
                lineHeight='1rem'> {navigationRightText}</HiddenTextRight>
            <NavigationArrowSegment4/>
        </NavigationContainerRight>
        }
    </>
);

const NavigationContainerLeft = styled.div`
    ${Mixins.position('fixed', 0, '45vh', 'auto', 0, '5px')} 
    height: 10vh;
    width: 50px;
`;

const NavigationContainerRight = styled.div`
    ${Mixins.position('fixed', 0, '45vh', '5px', 0, 'auto')}
    height: 10vh;
    width: 50px;
`;
const NavigationArrowSegment   = styled.div`
    transition: transform 200ms ease-in;
    transform-origin: bottom left;
    transform: rotate(40deg);
    ${NavigationContainerLeft}:hover & {
        transform-origin: bottom left;
        ${Mixins.transform([{ transformation: 'rotate', value: '90deg' }, { transformation: 'translateX', value: '-20px' }])};
    };
    ${Mixins.position('fixed', 0, '47vh', 0, 0, '5px')}
    background-color: black;
    width: 4px;
    height: 3vh;
`;
const NavigationArrowSegment2  = styled.div`
    transition: transform 200ms ease-in;
    transform-origin: top left;
    transform: rotate(-40deg);
    ${NavigationContainerLeft}:hover & {
        transform-origin: top left;
        ${Mixins.transform([{ transformation: 'rotate', value: '-90deg' }, { transformation: 'translateX', value: '-20px' }])};
    };
    ${Mixins.position('fixed', 0, '50vh', 0, 0, '5px')}
    background-color: black;
    width: 4px;
    height: 3vh;
`;

const NavigationArrowSegment3 = styled.div`
    background-color: black;
    transition: transform 200ms ease-in;
    transform-origin: bottom right;
    transform: rotate(-40deg);
    ${NavigationContainerRight}:hover & {
        transform-origin: bottom right;
        ${Mixins.transform([{ transformation: 'rotate', value: '-90deg' }, { transformation: 'translateX', value: '20px' }])};
    };
    ${Mixins.position('fixed', 0, '47vh', '5px', 0, 'auto')}
    width: 4px;
    height: 3vh;
`;

const NavigationArrowSegment4 = styled.div`
    background-color: black;
    transition: transform 200ms ease-in;
    transform-origin: top right;
    transform: rotate(40deg);
    ${NavigationContainerRight}:hover & {
        transform-origin: top right;
        ${Mixins.transform([{ transformation: 'rotate', value: '90deg' }, { transformation: 'translateX', value: '20px' }])};
    };
    ${Mixins.position('fixed', 0, '50vh', '5px', 0, 'auto')}
    width: 4px;
    height: 3vh;
`;

const HiddenTextLeft = styled(BaseText)`
    color: black;
    transition: transform 200ms ease-in;
    height: 1rem;
    width: fit-content;
    opacity: 0;
    ${Mixins.position('fixed', 0, 'calc(50vh - 0.5rem)', 0, 0, '5px')}
    ${Mixins.transform([{ transformation: 'translateX', value: '-80px' }])};
    ${NavigationContainerLeft}:hover & {
        ${Mixins.transform([{ transformation: 'translateX', value: '0px' }])};
        opacity: 1;
    };
   
`;

const HiddenTextRight = styled(BaseText)`
    color: black;
    transition: transform 200ms ease-in;
    height: 1rem;
    width: fit-content;
    ${Mixins.position('fixed', 0, 'calc(50vh - 0.5rem)', '5px', 0, 'auto')}
    ${Mixins.transform([{ transformation: 'translateX', value: '80px' }])};
    ${NavigationContainerRight}:hover & {
        ${Mixins.transform([{ transformation: 'translateX', value: '0px' }])};
    };
    
`;