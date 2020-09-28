import React from 'react';
import styled from 'styled-components';
import { BaseText } from '../components';
import { flex } from '../globals/Flex';

interface HeaderProps {
    animationDelay: number;
}

export const Header: React.FC<HeaderProps> = ({
    animationDelay,
}): React.ReactElement => {
    return <HeaderDiv animationDelay={animationDelay}> 
        
        <BaseText
            size="5vmin"
            shadow={1}
            color="background"
            bold>
            Andrew Patterson
        </BaseText>
        <BaseText
            size="4.5vmin"
            shadow={1}
            color="primary">
            FullStack Web Developer
        </BaseText>
        
    </HeaderDiv>;
};

interface HeaderDivProps{
    animationDelay?: number;
}

const HeaderDiv = styled.div<HeaderDivProps>`
    position: absolute;
    overflow:hidden;
    left:50%;
    top:10%;
    ${flex('center')}
    flex-direction: column;
    transform: translate(-50%, -50%);
    animation: headerAnimation 2s ease-in-out forwards;
    animation-delay: ${props => props.animationDelay}s;
    opacity:0;
    @keyframes headerAnimation {
            0% {
               
            }
            100% {
                opacity: 1;
            }
    };
`;