import React from 'react';
import { AnimatedDiv, BaseText } from '../components';
import { DimensionsProps } from './Landing';

interface HeaderProps {
    animationDelay: number;
    dimensions: DimensionsProps
}

export const Header: React.FC<HeaderProps> = ({
    animationDelay,
    dimensions,
}): React.ReactElement => {
    return <>
        <AnimatedDiv
            id="main"
            animation="2s ease-out"
            xInitial={-100}
            yInitial={-100}
            xFinal={dimensions.width * 0.05}
            yFinal={30}
            animationDelay={animationDelay}>
            <BaseText
                size="3.2rem"
                shadow={1}
                color="white">
                Andrew Patterson
            </BaseText>
        </AnimatedDiv>
        <AnimatedDiv 
            id="second"
            animation="2s ease-out" 
            xInitial={-100}
            yInitial={dimensions.height * 0.125}
            xFinal={dimensions.width * 0.075}
            yFinal={100}
            animationDelay={animationDelay}>
            <BaseText
                size="2.5rem"
                shadow={2}
                color="white">
                FullStack Web Developer
            </BaseText>
        </AnimatedDiv>
    </>;
};